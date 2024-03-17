import { InputHTMLAttributes } from "react";


export type SearchInputProps =  InputHTMLAttributes<HTMLInputElement> & {
   onClear: () => void
   isLoading?: boolean
   isError?: boolean
}