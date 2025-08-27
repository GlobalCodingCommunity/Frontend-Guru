import React, { useEffect, useState } from "react";
import ScreenContainer from "./components/ScreenContainer";
import Sidebar from "./components/Sidebar";
import TwoFactorAuthScreen from './screens/TwoFactorAuthScreen';
import "./App.css";

function App() {
  return (
    <>
      <ScreenContainer>
        <TwoFactorAuthScreen />
        <Sidebar />
      </ScreenContainer>
    </>
  );
}

export default App;
