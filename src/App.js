
import { useState } from 'react';
import React from 'react';
import Navbar from './UI Component/header';
import PageBody from './UI Component/pagebody';



function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {/* <LandingPage /> */}
      <PageBody />
    </div>
  );
}

export default App;
