import { FixedSizeList } from "react-window";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const SearchList = styled(FixedSizeList).attrs(({ theme }) => ({
  width: theme.size.contentWrapper,
  height: theme.size.ListHeight,
}))`
  margin-top: 0;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const RecentSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: ${({ theme }) => theme.size.contentWrapper}px;
  margin: ${({ theme }) => theme.spacing.md}px 0px;
  flex-wrap: wrap;
`;

export const RecentList = styled.div`
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.lg}px;
  border: 1px solid ${({ theme }) => theme.backgrounds.buttonBackground};
  border-radius: 50px;
  margin: 0px ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.md}px 0px;
  font-size: ${({ theme }) => theme.fontSize.mdm}px;
  cursor: pointer;
`;
