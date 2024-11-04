import { useState, useEffect } from "react";
import {
  FaQuestionCircle,
  FaBook,
  FaBell,
  FaUserCircle,
  FaClock,
  FaMedium,
  FaVideo,
  FaNewspaper,
  FaCalculator,
  FaCode,
  FaBookOpen,
} from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { chapters } from "./chapters";
export default function MainContent() {

  const [selectedTab, setSelectedTab] = useState("Mentor Sessions");
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);
  const [expandedParts, setExpandedParts] = useState({});
  const [visitedResources, setVisitedResources] = useState({});

  const handleTabToggle = (tabName) => setSelectedTab(tabName);

  const handlePartToggle = (partName) => {
    setExpandedParts((prevExpandedParts) => ({
      ...prevExpandedParts,
      [partName]: !prevExpandedParts[partName],
    }));
  };

  const handleResourceVisit = (partName, resourceName) => {
    setVisitedResources((prevVisitedResources) => ({
      ...prevVisitedResources,
      [partName]: {
        ...prevVisitedResources[partName],
        [resourceName]: !prevVisitedResources[partName]?.[resourceName],
      },
    }));
  };

  const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;
    } else {
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    }
  };

  const calculateTotalDuration = (resources) => {
    const totalSeconds = resources.reduce((total, resource) => {
      const [minutes, seconds] = resource.duration.split(":").map(Number);
      return total + minutes * 60 + seconds;
    }, 0);
    return formatDuration(totalSeconds);
  };

  const calculateProgress = (resources, visitedResources) => {
    const totalResources = resources.length;
    const visitedResourcesCount = Object.keys(visitedResources).filter(
      (resourceName) => visitedResources[resourceName]
    ).length;
    return (visitedResourcesCount / totalResources) * 100;
  };

  useEffect(() => {
    setExpandedParts((prevExpandedParts) => ({
      ...prevExpandedParts,
      [chapters[0].parts[0].name]: true,
    }));
  }, []);

  return (
    <>
      <div className="w-full mr-10 ml-10">
        {/* Header */}
        <div className="p-4 pr-0 flex flex-row-reverse gap-5 items-center h-auto my-[0.4rem]">
          <FaUserCircle className="text-black text-3xl hover:cursor-pointer" onClick={() => alert("User icon clicked")} />
          <FaBell className="text-black text-3xl hover:cursor-pointer" onClick={() => alert("Bell icon clicked")} />
        </div>
        <div className="flex-grow p-6 border bg-white border-[#A4E6FF] rounded-lg shadow-md h-[90%] overflow-hidden">
          <header className="flex justify-between items-center mb-4">
            <div className="flex p-1 bg-gradient-to-t from-white to-blue-100 rounded-lg">
              <button
                className={`text-gray-600 hover:text-gray-700 rounded-lg p-2 flex items-center ${
                  selectedTab === "Mentor Sessions"
                    ? ""
                    : "border-2 bg-white border-blue-200"
                }`}
                onClick={() => handleTabToggle("Mentor Sessions")}
              >
                <FaBook className="mr-2" /> Mentor Sessions
              </button>
              <button
                className={`text-gray-600 hover:text-gray-700 rounded-lg p-2 flex items-center ${
                  selectedTab === "Learning Material"
                    ? ""
                    : "border-2 bg-white border-blue-200"
                }`}
                onClick={() => handleTabToggle("Learning Material")}
              >
                <FaBook className="mr-2" /> Learning Material
              </button>
            </div>
            <button
              className="text-gray-600 hover:text-gray-700 border border-[#A4E6FF] rounded-lg p-2 flex items-center"
              onClick={() =>
                alert("How it works information will be displayed here.")
              }
            >
              <FaQuestionCircle className="mr-2 text-gray-600" /> How it works
            </button>
          </header>

          <div className="flex">
            <aside className="w-1/4 p-4">
              <ul className="space-y-2">
                {chapters.map((chapter) => (
                  <li
                    key={chapter.name}
                    className={`cursor-pointer hover:text-blue-700 py-2 px-4 rounded-lg font-semibold transition duration-300 ease-in-out ${
                      selectedChapter.name === chapter.name
                        ? "bg-[#EFF5FF]"
                        : ""
                    }`}
                    onClick={() => setSelectedChapter(chapter)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{chapter.name}</span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <FaClock className="mr-1" />
                        {calculateTotalDuration(
                          chapter.parts.reduce(
                            (acc, part) => acc.concat(part.resources),
                            []
                          )
                        )}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>

            <section className="w-3/4 ml-4">
              {selectedChapter && (
                <div className="space-y-4 h-[39rem] overflow-scroll">
                  {selectedChapter.parts.map((part, index) => (
                    <div
                      key={part.name}
                      className="bg-white rounded-lg mb-4 border border-gray-200 shadow-md"
                    >
                      <h4
                        className="mb-5 my-4 mx-4 flex justify-between items-center cursor-pointer"
                        onClick={() => handlePartToggle(part.name)}
                      >
                        <div className="flex flex-col items-start">
                          <span className="text-gray-400">
                            Part {index + 1}
                          </span>
                          <span className="text-lg font-semibold">
                            {part.name}
                          </span>
                        </div>
                        <div className="flex items-center justify-end text-gray-500">
                          <div className="mr-4 flex items-center">
                            <FaClock className="mr-1" />
                            {calculateTotalDuration(part.resources)}
                          </div>
                          <div className="mr-4 flex items-center">
                            <FaMedium className="mr-1" /> Medium</div>
                          <div className="mr-4 flex items-center">
                          <SlDocs className="mr-1" />
                          {part.resources.length}</div>
                          {expandedParts[part.name] ? (
                            <MdExpandLess className="ml-2 text-gray-600 text-2xl" />
                          ) : (
                            <MdExpandMore className="ml-2 text-gray-600 text-2xl" />
                          )}
                        </div>
                      </h4>
                      <div className="bg-gray-200 text-gray-600 mx-0 rounded-bl-full rounded-br-full relative">
                        <div className=" absolute -top-[2rem] right-[0.3rem] text-sm text-gray-800 border border-[#A4E6FF] bg-[#EFF5FF] p-1 rounded-lg scale-75">
                          {calculateProgress(
                            part.resources,
                            visitedResources[part.name] || {}
                          )}
                          % Completed
                        </div>
                        <div
                          className="bg-gray-700 rounded-bl-full p-1"
                          style={{
                            width: `${calculateProgress(
                              part.resources,
                              visitedResources[part.name] || {}
                            )}%`,
                          }}
                        >
                          {/* {calculateProgress(
                            part.resources,
                            visitedResources[part.name] || {}
                          )}
                          % */}
                        </div>
                      </div>
                      {expandedParts[part.name] && (
                        <div className="p-2 pb-0">
                          {part.resources.map((resource) => (
                            <div
                              key={resource.name}
                              className="mb-1 bg-gradient-to-r from-transparent from-0% via-black via-50% to-transparent to-100% pb-[0.5px]"
                            >
                              <div className="flex justify-between items-center p-2 bg-white">
                                <div className="flex mr-2 items-center justify-center">

                                {resource.type === 'Video' && <FaVideo className="mr-2" />}
                                {resource.type === 'Article' && <FaNewspaper className="mr-2" />}
                                {resource.type === 'Quiz' && <FaCalculator className="mr-2" />}
                                {resource.type === 'Coding Exercise' && <FaCode className="mr-2" />}
                                {resource.type === 'Combined Resource' && <FaBookOpen className="mr-2" />}
                                <span>{resource.name}</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <FaClock className="mr-1" />
                                  {resource.duration}
                                  <input
                                    type="checkbox"
                                    checked={
                                      visitedResources[part.name]?.[
                                        resource.name
                                      ] || false
                                    }
                                    onChange={() =>
                                      handleResourceVisit(
                                        part.name,
                                        resource.name
                                      )
                                    }
                                    className="ml-3 w-5 h-5 text-blue-300 bg-gray-100 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
