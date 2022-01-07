import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    boxShadow: {
      sm: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    letterSpacing: {
      md: number;
    };
    lineHeight: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transition: string;
  }
}
