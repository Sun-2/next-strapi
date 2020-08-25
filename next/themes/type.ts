export interface Theme {
  palette: {
    background: {
      body: string;
      paper: string;
    };
  };
}
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}