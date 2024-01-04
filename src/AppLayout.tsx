import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthContext";
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
  );
};

export default AppLayout;
