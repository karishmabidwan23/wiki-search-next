import { SearchInput } from "@/app/component";
import {
  HomeContainer,
  RecentList,
  RecentSearchWrapper,
  SearchList,
  SearchListWrapper,
  SearchWrapper,
} from "./styled";
import { useHome } from "./useHome";
import { SearchItem } from "@/app/component";
import { useCallback, useRef } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useTheme } from "styled-components";

export const Home = () => {
  const {
    handleSubmit,
    isSearchLoading,
    searchData,
    searchTerm,
    handleClear,
    onSelectPage,
    searchDetailDataSanitized,
    isSearchDetailFetching,
    isErrorDetail,
    isSearchError,
    showSearchResult,
    searchHistory,
  } = useHome();

  const searchListRef = useRef(null);
  const theme = useTheme();

  const renderSearchItem = useCallback(
    ({ index, style }: { index: number; style: any }) =>
      searchData?.length &&
      searchData?.length > index && (
        <SearchItem
          {...searchData[index]}
          style={style}
          onSelectPage={onSelectPage}
        />
      ),
    [searchData]
  );

  return (
    <HomeContainer>
      <SearchWrapper>
        <SearchInput
          placeholder="Type to search here..."
          onInput={handleSubmit}
          isLoading={isSearchLoading}
          onClear={handleClear}
          value={searchTerm}
          isError={isSearchError}
        />
        {showSearchResult && searchData?.length ? (
          <SearchListWrapper>
            <SearchList
              width={theme.size.contentWrapper}
              height={theme.size.listHeight}
              ref={searchListRef}
              itemCount={searchData?.length || 0}
              itemSize={120}
            >
              {renderSearchItem}
            </SearchList>
          </SearchListWrapper>
        ) : null}
      </SearchWrapper>
      {searchHistory?.length ? (
        <RecentSearchWrapper>
          {searchHistory?.map((rs) => (
            <RecentList key={rs + ""}>{`${rs}`}</RecentList>
          ))}
        </RecentSearchWrapper>
      ) : null}

      {isSearchDetailFetching && (
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {searchDetailDataSanitized && !isSearchDetailFetching && (
        <div dangerouslySetInnerHTML={searchDetailDataSanitized} />
      )}
      {isErrorDetail && <div>Something went wrong ... Please try again.</div>}
    </HomeContainer>
  );
};
