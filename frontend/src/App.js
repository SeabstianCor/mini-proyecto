import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { userContext } from "./context/User/userContext";
import { theme } from "./components/style/theme";
import MainRoutes from "./routes/MainRoutes";
import {
  getLocalStorage,
  setLocalStorage,
} from "./utils/LocalStorage/localStorage";

function App() {
  const [user, setUser] = useState(getLocalStorage());

  useEffect(() => {
    setLocalStorage(user);
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </userContext.Provider>
  );
}

export default App;
