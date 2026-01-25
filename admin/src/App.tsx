import { Header } from "./Components/Header";
import { SideNav } from "./Components/Side_nav";
import { Dashboard } from "./Pages/Dashboard";
import { BooksInfo } from "./Components/BooksInfor";
import { useAllBooks } from "./Data/AllBooks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const { data, loading, error, fetchData } = useAllBooks();
  
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: (
        <div className="flex items-start">
          <SideNav />
          <Dashboard books={data} loading={loading} error={error} fetchData={fetchData}/>
        </div>
      )
    },
    {
      path: "/booksinfo/:bookId",
      element: (
        <div className="">
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
