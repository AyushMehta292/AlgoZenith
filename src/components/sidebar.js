import {ReactComponent as FaHome} from "../svgAZ/ViewGridOutline.svg"
import {ReactComponent as FaBook} from "../svgAZ/LightBulbOutline.svg"
import {ReactComponent as FaForumbee} from "../svgAZ/UserGroupOutline.svg"
import {ReactComponent as FaChartLine} from "../svgAZ/ClipboardOutline.svg";
import {ReactComponent as FaHamburger} from "../svgAZ/Menu.svg";
import {ReactComponent as FaContest} from "../svgAZ/ChartBarOutline.svg"
import {ReactComponent as FaLeaderboard} from "../svgAZ/StarOutline.svg"

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
    <aside className="w-fit h-screen flex flex-col justify-start items-center">
      <div className="my-5 flex flex-col items-start ">
        <div className="flex items-center mb-8 p-2 relative">
          <FaHamburger className="mr-2 hover:text-gray-600 hover:cursor-pointer text-2xl" onClick={toggleMenu} />
          <style>
            {`
              .hamburger::after {
                content: 'AlgoZenith';
                position: absolute;
                right: 10;
                top: 0;
                font-size: 32px;
                font-weight: bold;
                color: #172B4D;
              }
            `}
          </style>
          <div className="hamburger"></div>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className={`flex items-center space-x-2 p-2 rounded-lg ${selectedItem === 'Dashboard' ? 'bg-[#DBF3FC]' : 'hover:bg-[#DBF3FC] hover:cursor-pointer'}`} onClick={() => handleItemClick('Dashboard')}>
              <FaHome className=" text-2xl"/>
              {!isMenuHidden && <span>Dashboard</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 rounded-lg ${selectedItem === 'Learn' ? 'bg-[#DBF3FC]' : 'hover:bg-[#DBF3FC] hover:cursor-pointer'}`} onClick={() => handleItemClick('Learn')}>
              <FaBook className=" text-2xl"/>
              {!isMenuHidden && <span>Learn</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 rounded-lg ${selectedItem === 'Forums' ? 'bg-[#DBF3FC]' : 'hover:bg-[#DBF3FC] hover:cursor-pointer'}`} onClick={() => handleItemClick('Forums')}>
              <FaForumbee className=" text-2xl"/>
              {!isMenuHidden && <span>Forums</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 rounded-lg ${selectedItem === 'Upskill' ? 'bg-[#DBF3FC]' : 'hover:bg-[#DBF3FC] hover:cursor-pointer'}`} onClick={() => handleItemClick('Upskill')}>
              <FaChartLine className=" text-2xl"/>
              {!isMenuHidden && <span>Upskill</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 rounded-lg ${selectedItem === 'Contest' ? 'bg-[#DBF3FC]' : 'hover:bg-[#DBF3FC] hover:cursor-pointer'}`} onClick={() => handleItemClick('Contest')}>
              <FaContest className=" text-2xl"/>
              {!isMenuHidden && <span>Contest</span>}
            </li>
            <li className={`flex items-center space-x-2 p-2 rounded-lg ${selectedItem === 'Leaderboard' ? 'bg-[#DBF3FC]' : 'hover:bg-[#DBF3FC] hover:cursor-pointer'}`} onClick={() => handleItemClick('Leaderboard')}>
              <FaLeaderboard className=" text-2xl"/>
              {!isMenuHidden && <span>Leaderboard</span>}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
