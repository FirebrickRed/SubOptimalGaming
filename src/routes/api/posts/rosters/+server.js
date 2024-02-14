import { fetchRostersPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export async function GET() {
  const allPosts = await fetchRostersPosts();
  const STEAM_API_KEY = import.meta.env.VITE_STEAM_API_KEY;
  const RIOT_API_KEY = import.meta.env.VITE_RIOT_API_KEY;

  const usersDataPromises = allPosts.map(async user => {
    console.log(user);
    let userObject = {
      gamerTag: user.meta.gamerTag,
      aboutInfo: {
        irl: user.meta.IRL,
        about: user.meta.about,
        socialMedia: user.meta.socialMedia,
        clips: user.meta.clips
      },
      favoriteGames: user.meta.favoriteGames,
      esports: {
        esportsTeam: user.meta.esportsTeamAndRole?.esportsTeam || '',
        teamRoles: user.meta.esportsTeamAndRole?.teamRoles || ''
      },
      orgInfo: {
        roleInOrg: user.meta.roleInOrg,
        achievements: user.meta.playerAchievements
      },
      steamGameInfo: [],
      leagueInfo: {},
      carousel: {
        index: 0,
        indexes: ['About', 'Game', 'Business']
      }
    };

    try {
      const response = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${user.meta.steamId}&format=json`);
      const data = await response.json();
      if (data.response.games) {
        let usersGames = data.response.games.map(game => ({
          gameName: game.name,
          gameImage: game.img_icon_url
        }));
        userObject.steamGameInfo = usersGames;
      }
    } catch (error) {
      console.error('Error in fetching steam games: ', error);
    }

    if (user.meta.summonerName) {
      try {
        const response = await fetch(`https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${user.meta.summonerName}?api_key=${RIOT_API_KEY}`);
        const summonerInfo = await response.json();

        let leagueInfo = {
          summonerName: summonerInfo.name,
          id: summonerInfo.id,
          summonerLevel: summonerInfo.summonerLevel,
          profileIconId: summonerInfo.profileIconId,
          lolRank: {},
          tftRank: []
        };

        try {
          const lolResponse = await fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${leagueInfo.id}?api_key=${RIOT_API_KEY}`);
          const lolInfo = await lolResponse.json();
          if (lolInfo.length > 0) {
            leagueInfo.lolRank = {
              tier: lolInfo[0].tier,
              rank: lolInfo[0].rank,
              queueType: lolInfo[0].queueType
            };
          }
        } catch (error) {
          console.error('Error in LOL: ', error);
        }

        try {
          const tftResponse = await fetch(`https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${leagueInfo.id}?api_key=${RIOT_API_KEY}`);
          const tftInfo = await tftResponse.json();
          leagueInfo.tftRank = tftInfo.map(rank => ({
            queueType: rank.queueType,
            tier: rank.tier,
            rank: rank.rank
          }));
        } catch (error) {
          console.error('Error in TFT: ', error);
        }

        userObject.leagueInfo = leagueInfo;
        userObject.carousel.indexes.push('LOL');
      } catch (error) {
        console.error('Error in Summoner area: ', error);
      }
    }

    return userObject;
  });

  const usersData = await Promise.all(usersDataPromises);
  return json(usersData);
}