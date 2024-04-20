import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Articles - Server Side Rendering',
};

const ArticleSSRPage: NextPage = () => {
  return <section>SSR Articles</section>;
};

export default ArticleSSRPage;
