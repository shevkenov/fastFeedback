import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global:{
      "*": {
        padding: 0,
        margin: 0,
        "boxSizing": "borderBox",
      }
    },
    fonts: {
      body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    fontWeights: {
      normal: 400,
      medium: 600,
      bold: 800,
    },
  }
});

export default customTheme;
