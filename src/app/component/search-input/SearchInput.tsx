import { InputHTMLAttributes, useCallback } from "react";
import {
  CrossIcon,
  Icon,
  InputWrapper,
  LoadingStyled,
  SearchInputStyled,
} from "./styled";
import { crossIcon, searchIcon } from "@/app/icons";
import { SearchInputProps } from "./types";
import { RotatingLines } from "react-loader-spinner";

export const SearchInput = (inputProps: SearchInputProps) => {
  const { isLoading, onClear, isError } = inputProps;
  return (
    <InputWrapper isError={isError}>
      <Icon src={searchIcon} alt="search-icon" />
      <SearchInputStyled {...inputProps} />
      <LoadingStyled
        visible={isLoading}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      <CrossIcon src={crossIcon} alt="cross-icon" onClick={onClear} />
    </InputWrapper>
  );
};
