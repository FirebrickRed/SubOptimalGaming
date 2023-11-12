import { marked } from 'marked';

export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts/blog`)
  const posts = await response.json()

  const result = posts.map(post => {
    if (post.meta && post.meta.content) {
      return {
        ...post.meta,
        content: marked.parse(post.meta.content),
        path: post.path
      };
    } else {
      console.error('Error: post.meta.content is undefined or null', post);
      return {
        ...post.meta,
        content: '',
        path: post.path
      };
    }
  });

  return { result };
}