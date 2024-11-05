// src/App.js
import Sidebar from "./components/sidebar";
import MainContent from "./components/mainContent";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gradient-to-b from-white to-[#F2FAFF] relative">
        <aside className="h-screen w-fit pl-4 pr-2">
          <Sidebar />
        </aside>
        <MainContent />
      </div>
      <div className="flex h-screen bg-gradient-to-b from-[#F2FAFF] to-white">
      </div>
    </>
  );
}

export default App;
