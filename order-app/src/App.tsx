import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import AppRoutes from "./routes";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
