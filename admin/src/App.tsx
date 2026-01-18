import { Header } from "./Components/Header";
import { SideNav } from "./Components/Side_nav";
import { Dashboard } from "./Pages/Dashboard";
import { BooksInfo } from "./Components/BooksInfor";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex items-start">
          <SideNav />
          <Dashboard />
        </div>
      )
    },
    {
      path: "/booksinfo/:bookId",
      element: (
        <div className="flex items-start">
          <BooksInfo />
        </div>
      )
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
