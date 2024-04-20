import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Posts - Server Side Rendering',
};

const PostSSRPage: NextPage = () => {
  return <section>SSR Posts</section>;
};

export default PostSSRPage;
