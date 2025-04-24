import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-white mx-8">appName</h2>
            </div>
            <div className="relative"></div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm mt-5 flex flex-col items-center">
                <Link to="/">
                  <li className="rounded-sm">
                    <span className="text-gray-100">Dashboard</span>
                  </li>
                </Link>
                <Link to="/protection">
                  <li className="rounded-sm mt-4">
                    <span className="text-gray-100 ">Protection</span>
                  </li>
                </Link>
                <Link to="/privacy">
                  <li className="rounded-sm mt-4">
                    <span className="text-gray-100">privacy</span>
                  </li>
                </Link>

                <li className="rounded-sm mt-16">
                  <span className="text-gray-100">Log-out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
