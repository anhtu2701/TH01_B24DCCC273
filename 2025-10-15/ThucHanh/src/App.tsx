import Header from "./components/header";
import AppRoutes from "./AppRoutes";
import Layout from "./components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Layout>
                <AppRoutes />
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
