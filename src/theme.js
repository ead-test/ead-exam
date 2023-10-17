import {
  extendTheme,
  withDefaultColorScheme,
  baseTheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.green,
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    components: {
      Button: {
        baseStyle: {
          rounded: "full",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "green" })
);

export default customTheme;
