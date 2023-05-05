export interface Post {
  slug: string;
  frontmatter: PostFrontMatter;
}

export interface PostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  isFeatured: boolean;
}
