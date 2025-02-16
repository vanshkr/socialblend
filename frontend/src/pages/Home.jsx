import React from 'react'
import { Feed, SideNav, BottomNav } from '../components'
export const Home = () => {
  return (
    <div className="flex">
      {/* SideNav for desktop */}
      <aside className="hidden md:block xl:w-[20%] border-r border-gray-100">
        <SideNav />
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col xl:flex-row">
        {/* Feed section */}
        <section className="w-full xl:w-[65%] px-4">
          <Feed />
        </section>

        {/* SideNav for larger screens (hidden on smaller screens) */}
        <aside className="hidden xl:block w-[35%] border-l border-gray-100">
          <SideNav />
        </aside>
      </main>

      {/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 border-t-2 border-gray-100 block md:hidden">
        <BottomNav />
      </nav>
    </div>
  );
}
