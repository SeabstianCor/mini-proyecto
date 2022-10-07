import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { userContext } from "./context/User/userContext";
import { theme } from "./components/style/theme";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [user, setUser] = useState({
    isUserLogin: true,
    userData: {
      username: "string",
      userRole: "string",
    },
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </userContext.Provider>
  );
}

export default App;
