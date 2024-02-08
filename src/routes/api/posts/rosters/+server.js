import { fetchRostersPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchRostersPosts();

  // const sortedPosts = allPosts.sort((a, b) => {
  //   return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  let games;
  const STEAM_API_KEY = import.meta.env.VITE_STEAM_API_KEY;
  // const steam_id = '76561198038986067'; // Tweety
  // const steam_id = '76561198392359239'; // sam
  const steam_id = '76561199018948085';

  // let userCustomUrl = 'https://steamcommunity.com/profiles/76561198038986067/';
  try{
    const response = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${steam_id}&format=json`);
    // console.log(response)
    const data = await response.json();
    // console.log(data);
    // console.log(data.response.games)
    games = data.response.games;
  } catch (err) {
    console.log(err);
  }

  // console.log(games);
  return json(allPosts)
}