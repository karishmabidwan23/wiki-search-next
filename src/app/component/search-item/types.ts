export type SearchItemProps = {
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  style: any;
  onSelectPage: (pageId: string) => void; 
};
