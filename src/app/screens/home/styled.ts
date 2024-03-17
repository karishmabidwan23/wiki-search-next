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
  width: 470,
  height: 600,
}))`
  margin-top: 0;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.1);
`;
