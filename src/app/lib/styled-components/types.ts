export type ProjectTheme = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
  };
  backgrounds: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  spacing: {
    xxxs: number;
    xxs: number;
    xs: number;
    xxsm: number;
    xsm: number;
    sm: number;
    xmd: number;
    md: number;
    mdm: number;
    m: number;
    xm: number;
    xxm: number;
    lg: number;
    xl: number;
    xll: number;
    xxl: number;
    xlll: number;
  };
  fontSize: {
    input: number;
    sm: number;
    xmd: number;
    md: number;
    mdm: number;
    m: number;
    xm: number;
    xxm: number;
    lg: number;
  };
  size: {
    smallWidth: number;
    smallHeight: number;
    mediumWidth: number;
    mediumHeight: number;
    maxwidth: number;
    maxHeight: number;
    inputWidth: number;
  };
  weight: {
    normal: number;
    thinBold: number;
    semiBold: number;
    bold: number;
  };
};

declare module "styled-components" {
  interface DefaultTheme extends ProjectTheme {}
}
