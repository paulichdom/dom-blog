export interface Post extends PostFrontMatter {
  slug: string;
  content: string;
}

export interface PostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  isFeatured: boolean;
}
