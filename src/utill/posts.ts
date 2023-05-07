import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';

import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import matter from 'gray-matter';

const POSTS_PATH = 'src/content/articles';
const POSTS_DIRECTORY = path.join(process.cwd(), POSTS_PATH);
const MDX_RGX = /\.mdx$/;

export function getPostsFiles() {
  return fs.readdirSync(POSTS_DIRECTORY);
}

export function getMdxSource(postIdentifier: string) {
  return fs
    .readFileSync(path.join(POSTS_DIRECTORY, `${postIdentifier}.mdx`))
    .toString();
}

export async function getPostData(fileName: string) {
  const id = fileName.replace(MDX_RGX, '');

  const mdxSource = getMdxSource(id);

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options, frontmatter) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
      ];
      return options;
    },
  });

  return {
    slug: id,
    frontmatter: {
      wordCount: mdxSource.split(/\s+/gu).length,
      readingTime: readingTime(mdxSource),
      slug: id || null,
      ...frontmatter,
    },
    code,
  };
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  
  const allPosts = postFiles
    .map((fileName) => {
      const slug = fileName.replace(MDX_RGX, '');
      const source = getMdxSource(slug);
      const { data } = matter(source);

      return {
        slug: slug,
        frontmatter: data,
      };
    });

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.frontmatter.isFeatured);

  return featuredPosts;
}
