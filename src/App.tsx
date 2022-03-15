import { VFC } from "react";
import { Layout } from "layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateProvider } from "context/StateProvider";
import { ClassicalFetchA } from "components/ClassicalFetchA";
import { ClassicalFetchB } from "components/ClassicalFetchB";
import { ReactQueryA } from "components/ReactQueryA";
import { ReactQueryB } from "components/ReactQueryB";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MainContext } from "components/MainContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ReactQueryA />} />
              <Route path="/query-b" element={<ReactQueryB />} />
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
              <Route path="/main-context" element={<MainContext />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
