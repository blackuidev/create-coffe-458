import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Analytics from "./pages/dashboard/Analytics";


const queryClient = new QueryClient();

const App = () => (
    <div className="font-primarylw bg-gray-900">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<Navigate to="/dashboard/analytics" replace />} />
                        <Route path="analytics" element={<Analytics />} />
                        {/* Add other dashboard routes here */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;
