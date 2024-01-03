import { Outlet, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <div className="flex h-screen w-full">
          <section className="flex flex-1 flex-col items-center justify-center py-10">
            <Outlet />
          </section>
          <img
            src="/public/assets/images/side-img.svg"
            alt="logo"
            className="hidden h-screen w-1/2 bg-no-repeat object-cover xl:block"
          />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default AuthLayout;
