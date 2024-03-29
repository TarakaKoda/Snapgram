import { Outlet } from "react-router-dom";
import AppLayout from "@/AppLayout";
import { LeftSideBar, TopBar, BottomBar } from "@/components/shared";
const RootLayout = () => {
  return (
    <AppLayout>
      <div className="w-full md:flex">
        <TopBar />
        <LeftSideBar />
        <section className="flex flex-1 h-full">
          <Outlet />
        </section>
        <BottomBar />
      </div>
    </AppLayout>
  );
};

export default RootLayout;
