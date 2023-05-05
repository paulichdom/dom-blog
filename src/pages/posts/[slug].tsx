import { ReactElement, useMemo } from 'react';
import { getPostData, getPostsFiles } from '@/utill/posts';
import { getMDXComponent } from 'mdx-bundler/client';
import IconInput from '@/components/IconInput/IconInput';
import LayoutContainer from '@/components/Layout/LayoutContainer/LayoutContainer';
import PostLayout from '@/components/Layout/PostLayout/PostLayout';
import { NextPageWithLayout } from '../_app';
import SyntaxHighlighter from '@/components/SyntaxHighlighter/SyntaxHighlighter';
import MdxHeading02 from '@/components/Markdown/Heading/MdxHeading02';
import MdxImage from '@/components/Markdown/Image/MdxImage';
import ArticleHeader from '@/components/Articles/ArticleDetail/ArticleHeader';

const BlogPost: NextPageWithLayout = ({ code, frontmatter }: any) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <ArticleHeader frontmatter={frontmatter} />
      <article>
        <Component
          components={{
            pre: SyntaxHighlighter,
            img: MdxImage,
            h2: MdxHeading02,
            IconInput,
          }}
        />
      </article>
    </>
  );
};

BlogPost.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutContainer>
      <PostLayout>{page}</PostLayout>
    </LayoutContainer>
  );
};

export const getStaticProps = async (context: any) => {
  const slug = context.params?.slug;

  const postData = await getPostData(slug);

  return {
    props: {
      ...postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default BlogPost;
