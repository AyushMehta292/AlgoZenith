import {
  FaHome,
  FaBook,
  FaForumbee,
  FaChartLine,
  FaHamburger,
} from "react-icons/fa";
import { useState } from 'react';

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('Upskill');
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item !== 'Upskill') {
      alert(`You have clicked on the ${item} section.`);
    }
  };

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <aside className="w-64 h-screen flex flex-col justify-start items-center fixed">
      <div className="my-5 flex flex-col items-start ">
        <div className="flex items-center mb-8 p-2">
          <FaHamburger className="mr-2 hover:text-gray-600 hover:cursor-pointer text-2xl" onClick={toggleMenu} />
          <h2 className="text-3xl font-bold ">AlgoZenith</h2>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className={`flex items-center space-x-2 p-2 border-b-2 rounded-lg ${selectedItem === 'Dashboard' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-gray-200 hover:cursor-pointer'}`} onClick={() => handleItemClick('Dashboard')}>
              <FaHome className=" text-2xl"/>
              {!isMenuHidden && <span>Dashboard</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 border-b-2 rounded-lg ${selectedItem === 'Learn' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-gray-200 hover:cursor-pointer'}`} onClick={() => handleItemClick('Learn')}>
              <FaBook className=" text-2xl"/>
              {!isMenuHidden && <span>Learn</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 border-b-2 rounded-lg ${selectedItem === 'Forums' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-gray-200 hover:cursor-pointer'}`} onClick={() => handleItemClick('Forums')}>
              <FaForumbee className=" text-2xl"/>
              {!isMenuHidden && <span>Forums</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 border-b-2 rounded-lg ${selectedItem === 'Upskill' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-gray-200 hover:cursor-pointer'}`} onClick={() => handleItemClick('Upskill')}>
              <FaChartLine className=" text-2xl"/>
              {!isMenuHidden && <span>Upskill</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 border-b-2 rounded-lg ${selectedItem === 'Contest' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-gray-200 hover:cursor-pointer'}`} onClick={() => handleItemClick('Contest')}>
              <FaChartLine className=" text-2xl"/>
              {!isMenuHidden && <span>Contest</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 border-b-2 rounded-lg ${selectedItem === 'Leaderboard' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-gray-200 hover:cursor-pointer'}`} onClick={() => handleItemClick('Leaderboard')}>
              <FaChartLine className=" text-2xl"/>
              {!isMenuHidden && <span>Leaderboard</span>}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
