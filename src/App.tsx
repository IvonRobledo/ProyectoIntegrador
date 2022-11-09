import React from "react";
import {DataProvider} from "./Context/DataContext";
import Layout from "./Components/sections/Layout";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Layout/>
      </div>
    </DataProvider>
  );
}

export default App;
