import Body from "../components/landingPage/Body";
import Footer from "../components/landingPage/Footer";
import Header from "../components/landingPage/Header";
import { GlobalStyles } from "../components/style/landingPage/Global";
import { theme } from "../components/style/theme";

function LandingPage() {
  return (
    <>
      <GlobalStyles bg={theme.palette.secondary} />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default LandingPage;
