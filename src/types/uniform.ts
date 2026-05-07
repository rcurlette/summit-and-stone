export interface BlogArticle {
  id?: number;
  image?: string;
  date?: string;
  title: string;
  summary?: string;
  slug?: object;
  link?: {
    path?: string;
    type?: string;
    nodeId?: string;
    projectMapId?: string;
  };
  content?: string;
}
