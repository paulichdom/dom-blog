import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFrontMatter } from '@/types/post';

const postsPath = 'src/content/posts';
const postsDirectory = path.join(process.cwd(), postsPath);

function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  // Remove the file extension
  const postSlug = fileName.replace(/\.md$/, '');

  const postData = {
    slug: postSlug,
    ...(data as PostFrontMatter),
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
