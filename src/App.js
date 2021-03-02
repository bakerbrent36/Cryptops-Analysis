import React, { useState, useEffect } from "react";
import WelcomeContainer from "./containers/WelcomeContainer";
import { AuthProvider } from "./context/AuthContext";
import { WidthProvider } from "./context/ScreenWidthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <WidthProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <WelcomeContainer />
          </Router>
        </QueryClientProvider>
      </WidthProvider>
    </AuthProvider>
  );
}

export default App;
