import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { userContext } from "./context/User/userContext";
import { theme } from "./components/style/theme";
import MainRoutes from "./routes/MainRoutes";
import {
  getLocalStorage,
  setLocalStorage,
} from "./utils/LocalStorage/localStorage";
// import { useFetch } from "./utils/CustomHooks/customHooks";
// import { verifyToken } from "./utils/DataFetch/DataFetch";

function App() {
  const [user, setUser] = useState(getLocalStorage());
  const [isTokenVerified, setTokenVerified] = useState(false);

  useEffect(() => {
    setLocalStorage(user);
  }, [user]);

  return (
    <userContext.Provider
      value={{ user, setUser, isTokenVerified, setTokenVerified }}
    >
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </userContext.Provider>
  );
}

export default App;
