// src/App.js
import Sidebar from "./components/sidebar";
import MainContent from "./components/mainContent";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gradient-to-b from-white to-blue-100">
        <aside className="w-full md:w-64 h-screen fixed md:relative">
          <Sidebar />
        </aside>
        <MainContent />
      </div>
      <div className="flex h-screen bg-gradient-to-b from-blue-100 to-white">
      </div>
    </>
  );
}

export default App;
