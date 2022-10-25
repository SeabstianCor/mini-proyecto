import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { userContext } from "./context/User/userContext";
import { theme } from "./components/style/theme";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [user, setUser] = useState(() => {
    const localData = localStorage.getItem("UserData");
    return localData
      ? JSON.parse(localData)
      : {
          isUserLogin: false,
          userData: {
            username: "string",
            userRole: "string",
            token: "string",
          },
        };
  });

  useEffect(() => {
    window.localStorage.setItem("UserData", JSON.stringify(user));
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
