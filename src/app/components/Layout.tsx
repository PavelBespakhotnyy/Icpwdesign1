import { Outlet } from "react-router";
import { TopNav } from "./TopNav";
import { LeftSidebar } from "./LeftSidebar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: 'var(--icpw-surface)', color: 'var(--icpw-on-surface)' }}
    >
      <TopNav />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
