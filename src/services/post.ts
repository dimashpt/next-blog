import axios from 'axios';
import { Post } from './post.schema';

export async function getPosts(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return data;
}
