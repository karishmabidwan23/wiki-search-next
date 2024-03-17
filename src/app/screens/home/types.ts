export type SearchItem = {
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
};

export type SearchDetail = {
  title: string;
  extract: string;
}

export type SearchResponse = Array<SearchItem>;

export type SearchDetailResponse = Array<SearchDetail>