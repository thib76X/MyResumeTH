import React from 'react';
import CoreLayout from "./components/layouts/core/CoreLayout";
import Header from './components/header/Header'
import Main from "./components/main/Main";

function App() {
  return (
    <CoreLayout
      header={<Header/>}
      main={<Main/>}
    />
  );
}

export default App;
