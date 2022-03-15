import { VFC } from "react";
import { Layout } from "layouts/Layout";
import { BrowserRouter } from "react-router-dom";

export const App: VFC = () => {
  return (
    <BrowserRouter>
      <Layout>App</Layout>
    </BrowserRouter>
  );
};
