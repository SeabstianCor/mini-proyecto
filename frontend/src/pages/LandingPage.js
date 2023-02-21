import { ThemeProvider } from "styled-components";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalStyles } from "../components/style/Global";

function LandingPage() {
  const theme = {
    colors: {
      primaryViolet: "hsl(257, 40%, 49%)",
      primaryMagenta: "hsl(300, 69%, 71%)",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage;
