
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import DoctorListing from "./pages/DoctorListing";
import DoctorProfile from "./pages/DoctorProfile";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PhoneConsultation from "./pages/PhoneConsultation";
import VideoConsultation from "./pages/VideoConsultation";
import Chat from "./pages/Chat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/find-doctors" element={<DoctorListing />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/doctor/:id/profile" element={<DoctorProfile />} />
            <Route path="/doctor/:id/book" element={<DoctorProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/consultation/phone" element={<PhoneConsultation />} />
            <Route path="/consultation/video" element={<VideoConsultation />} />
            <Route path="/chat/:doctorId" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
