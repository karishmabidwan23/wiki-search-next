import { useMemo } from "react";
import { SearchItemProps } from "./types";
import { sanitize } from "dompurify";
import { Description, SearchWrapper, Title } from "./styled";

export const SearchItem = ({
  title,
  snippet,
  style,
  pageid,
  onSelectPage,
}: SearchItemProps) => {
  const sanitizedHtml = useMemo(
    () => ({ __html: sanitize(snippet) }),
    [snippet]
  );
  return (
    <SearchWrapper style={{ ...style }} onClick={() => onSelectPage(title)}>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={sanitizedHtml}></Description>
    </SearchWrapper>
  );
};
