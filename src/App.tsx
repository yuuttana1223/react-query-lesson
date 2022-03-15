import { VFC } from "react";
import { Layout } from "layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateProvider } from "context/StateProvider";
import { ClassicalFetchA } from "components/ClassicalFetchA";
import { ClassicalFetchB } from "components/ClassicalFetchB";

export const App: VFC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/fetch-a" element={<ClassicalFetchA />} />
            <Route path="/fetch-b" element={<ClassicalFetchB />} />
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  );
};
