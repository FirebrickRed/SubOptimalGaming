import { marked } from 'marked';

export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts/blog`)
  const posts = await response.json()

  const result = posts.map(post => 
    ({
      ...post.meta,
      content: marked.parse(post.meta.content),
      path: post.path
    })
  );

  return { result };
}