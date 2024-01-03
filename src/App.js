
import { useState } from 'react';
import React from 'react';
import Navbar from './UI-Component/header';
import PageBody from './UI-Component/landingpage';
import LandingPage from './UI-Component/landingpage';



function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
