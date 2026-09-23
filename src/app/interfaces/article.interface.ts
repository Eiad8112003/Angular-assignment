export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  authorName: string;
  authorRole?: string;
  authorAvatar: string;
  image: string;
  isFeatured?: boolean;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleDetail {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  authorBio: string;
  heroImage: string;
  quote: string;
  introText: string;
  sections: ArticleSection[];
  tags: string[];
}
