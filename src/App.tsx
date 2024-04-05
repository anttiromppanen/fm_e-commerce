import React from "react";
import AppBar from "./components/AppBar/AppBar";

const ProductView = React.lazy(
  () => import("./components/ProductView/ProductView"),
);

function App() {
  return (
    <main className="mx-auto flex max-w-[1120px] flex-col justify-center">
      <AppBar />
      <ProductView />
    </main>
  );
}

export default App;
