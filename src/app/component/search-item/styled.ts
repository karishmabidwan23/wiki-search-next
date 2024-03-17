import styled from "styled-components";

export const SearchWrapper = styled.div`
  height: 150px;
  width: 100%;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  padding: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: 0px;
  white-space: nowrap;
  text-decoration: underline;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m}px;
  line-height: ${({ theme }) => theme.fontSize.xm}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: 0px;
`;
