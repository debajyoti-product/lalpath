import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Home from "./pages/Home.tsx";
import Chat from "./pages/Chat.tsx";
import HealthProfile from "./pages/HealthProfile.tsx";
import Account from "./pages/Account.tsx";
import History from "./pages/History.tsx";
import BookTest from "./pages/BookTest.tsx";
import NotFound from "./pages/NotFound.tsx";
import EditProfile from "./pages/EditProfile.tsx";
import Family from "./pages/Family.tsx";
import Reports from "./pages/Reports.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<HealthProfile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/history" element={<History />} />
          <Route path="/book-test" element={<BookTest />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/family" element={<Family />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
