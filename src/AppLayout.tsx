import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthContext";
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex w-screen h-screen">
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </main>
  );
};

export default AppLayout;
