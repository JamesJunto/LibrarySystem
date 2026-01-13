import { Header } from "./Components/Header";
import { Dashboard } from "./Pages/Dashboard";
import { SideNav } from "./Components/Side_nav";
function App() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <SideNav />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
