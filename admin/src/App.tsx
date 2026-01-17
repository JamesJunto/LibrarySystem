import { Header } from "./Components/Header";
import { Dashboard } from "./Pages/Dashboard";
import { SideNav } from "./Components/Side_nav";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <Header />
    
      {/* MAIN CONTENT */}
      <div className="flex items-center">
        <SideNav />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
