import React, { ReactNode, VFC } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-600">
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
            >
              react-query
            </Link>
            <Link
              to="/fetch-a"
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
            >
              Regular fetch
            </Link>
            <Link
              to="/main-context"
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
            >
              useContext
            </Link>
            <Link
              to="/main-rtkit"
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
            >
              RTKit
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};
