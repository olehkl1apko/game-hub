import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { theme } from "@/config";

import AppExamples from "./examples/AppExamples";
import routerExample from "./examples/routing/routes";
import router from "./routes";

const queryClient = new QueryClient();

// SET OPTIONS FOR REACT-QUERY
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 2,
//       cacheTime: 300_000, // 5min - how log the data is saved in a cache
//       staleTime: 10_000, // 10sec - how long the data is considered fresh
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     },
//   },
// });

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        {/* <RouterProvider router={routerExample} /> */}
        {/* <AppExamples /> */}
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
