export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts/rosters`)
  const posts = await response.json()

  return {
    posts
  }
}