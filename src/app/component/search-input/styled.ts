import Image from "next/image";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";

export const InputWrapper = styled.div<{ isError?: boolean }>`
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.1);
  width: ${({ theme }) => theme.size.inputWidth}px;
  align-items: center;
  border: 1px solid ${({ theme, isError }) => isError && theme.colors.error};
`;

export const Icon = styled(Image).attrs(({ theme }) => ({
  width: theme.spacing.xxm,
  height: theme.spacing.xxm,
}))``;

export const CrossIcon = styled(Icon)`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
  cursor: pointer;
`;

export const SearchInputStyled = styled.input`
  font-size: ${({ theme }) => theme.fontSize.input}px;
  padding-left: ${({ theme }) => theme.spacing.sm}px;
  border: 0px solid ${({ theme }) => theme.colors.primary};
  outline: none;
  width: 100%;
`;

export const LoadingStyled = styled(RotatingLines).attrs(({ theme }) => ({
  height: "25",
  width: "25",
}))``;
