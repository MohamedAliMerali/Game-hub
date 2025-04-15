import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import "./index.css";
import DarkModeProvider from "./component/DarkMode/DarkModeProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
      {/* <App /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
