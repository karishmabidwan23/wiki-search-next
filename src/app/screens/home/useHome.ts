import { useDebounce } from "@/app/hooks";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { SearchDetailResponse, SearchResponse } from "./types";
import { sanitize } from "dompurify";
import axios from "axios";

const fetchSearchData = async (searchTerm: string): Promise<SearchResponse> => {
  const response = await axios.get(`/api/search?value=${searchTerm}`);
  return response.data;
};

const fetchSearchDetailData = async (
  searchTerm: string
): Promise<SearchDetailResponse> => {
  const response = await axios.get(`/api/search-detail?value=${searchTerm}`);
  return response.data;
};

export const useHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDetailTerm, setSearchDetailTerm] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const queryClient = useQueryClient();
  const serchDetailQueryData = queryClient.getQueriesData("search-detail");

  const searchHistory = useMemo(
    () =>
      queryClient
        .getQueriesData("search-detail")
        .map((it) => it[0][1])
        .filter((it) => !!it),
    [serchDetailQueryData]
  );

  console.log("search history",searchHistory)
  const {
    data: searchData,
    isFetching: isSearchLoading,
    isError: isSearchError,
  } = useQuery(
    ["search", debouncedSearchTerm],
    () => fetchSearchData(searchTerm),
    {
      enabled: !!searchTerm && !!debouncedSearchTerm,
      keepPreviousData: true,
      onSuccess: () => setShowSearchResult(true),
    }
  );

  const {
    data: searchDetailData,
    isFetching: isSearchDetailFetching,
    isError: isErrorDetail,
  } = useQuery(
    ["search-detail", searchDetailTerm],
    () => fetchSearchDetailData(searchDetailTerm),
    {
      keepPreviousData: true,
      enabled: !!searchDetailTerm,
      refetchOnWindowFocus: false,
    }
  );

  const searchDetailDataSanitized = useMemo(
    () =>
      searchDetailData?.length && {
        __html: sanitize(searchDetailData[0].extract),
      },
    [searchDetailData]
  );

  const onSelectPage = useCallback((pageTitle: string) => {
    setShowSearchResult(false);
    setSearchDetailTerm(pageTitle);
  }, []);

  const handleClear = () => {
    setSearchTerm("");
    setShowSearchResult(false);
    queryClient.removeQueries(["search"]);
    queryClient.cancelQueries(["search"]);
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget?.value);

  return {
    searchData,
    isSearchLoading,
    handleSubmit,
    handleClear,
    searchTerm,
    onSelectPage,
    searchDetailDataSanitized,
    isSearchDetailFetching,
    isErrorDetail,
    showSearchResult,
    isSearchError,
    searchHistory
  };
};
