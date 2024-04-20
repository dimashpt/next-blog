import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Articles - Client Side Rendering',
};

const ArticleCSRPage: NextPage = () => {
  return <section>CSR Articles</section>;
};

export default ArticleCSRPage;
