import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MotionConfig } from "framer-motion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // @ts-ignore
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MotionConfig transition={{ ease: [0, 0, 0.2, 1], duration: 0.7 }}>
        <App />
      </MotionConfig>
    </QueryClientProvider>
  </BrowserRouter>
);
