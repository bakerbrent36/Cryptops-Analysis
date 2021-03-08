import React, { useState, useEffect } from "react";
import WelcomeContainer from "./containers/WelcomeContainer";
import { AuthProvider } from "./context/AuthContext";
import { WidthProvider } from "./context/ScreenWidthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [installPrompt, setInstallPrompt] = useState(false);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("BEFORE");
      console.log(e);
      setInstallPrompt(true);
    });
  }, []);

  return (
    <AuthProvider>
      <WidthProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            {installPrompt && <h1>INSTALL PRMOT</h1>}
            <WelcomeContainer />
          </Router>
        </QueryClientProvider>
      </WidthProvider>
    </AuthProvider>
  );
}

export default App;
