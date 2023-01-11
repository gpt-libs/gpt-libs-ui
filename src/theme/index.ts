// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    oxfordBlue: "#0A2239",
    maximumBlue: "#53A2BE",
    blueNCS: "#1D84B5",
    charlestonGreen: "#132E32",
    blueSapphire: "#176087"
  },
})