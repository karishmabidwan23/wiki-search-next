import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { BaseTheme } from "../lib/styled-components/themes/BaseTheme"

export const renderWithTheme = (component: React.ReactNode) => {
  render(<ThemeProvider theme={BaseTheme}>
    {component}
  </ThemeProvider>)
}