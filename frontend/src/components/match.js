import React, { useState } from "react";

const Match = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[70%] bg-black">
      <div className="ml-[200px] ">
        <form onSubmit={handleSubmit}>
          
          <div className=" mb-10  mt-10 ">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring "
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-[#275f52] text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Search
            </button>
            </div>
            <div className="flex flex-col gap-y-20 w-[90%]">
            <div className="bg-[#071C17] text-white">
              <div className="flex flex-row items-center justify-around  py-5 text-xl">
                <label htmlFor="Player Name">Select Format</label>
                <input className="py-3 text-white bg-transparent" type="text" placeholder="slect format here" />
              </div>
              <div className="flex flex-row gap-x-10 items-center justify-around py-5 text-xl ">
                <label htmlFor="Player Name">Player E -email</label>
                <input className="py-3 text-white bg-transparent " type="text" placeholder="Enter the Email here here" />
              </div>
            </div>
            <div className="bg-[#071C17] text-white">
              <div className="flex flex-row items-center justify-around py-5 text-xl">
                <label htmlFor="Player Name"> Team 1</label>
                <input className="py-3 text-white bg-transparent" type="text" placeholder="player 1" />
              </div>
              <div className="flex flex-row gap-x-10 items-center justify-around py-5 text-xl ">
                <label htmlFor="Player Name"></label>
                <input className="py-3 text-white bg-transparent " type="text" placeholder="Player2" />
              </div>
            </div>
            <div className="bg-[#071C17] text-white">
              <div className="flex flex-row items-center justify-around py-5 text-xl">
                <label htmlFor="Player Name"> Team 2</label>
                <input className="py-3 text-white bg-transparent" type="text" placeholder="player 1" />
              </div>
              <div className="flex flex-row gap-x-10 items-center justify-around py-5 text-xl ">
                <label htmlFor="Player Name"></label>
                <input className="py-3 text-white bg-transparent " type="text" placeholder="Player2" />
              </div>
            </div>
            <div className="bg-[#071C17] text-white">
                <h1 className="text-center font-semibold text-xl mt-5">Resutl</h1>
              <div className="flex flex-row items-center justify-around py-5 text-xl">
                <label htmlFor="Player Name"> Run time</label>
                <input className="py-3 text-white bg-transparent" type="text" placeholder="Enter rank here" />
              </div>
              <div className="flex flex-row gap-x-10 items-center justify-around py-5 text-xl ">
                <label htmlFor="Player Name">Team 1 score</label>
                <input className="py-3 text-white bg-transparent " type="text" placeholder="Enter Number Here" />
              </div>
              <div className="flex flex-row gap-x-10 items-center justify-around py-5 text-xl ">
                <label htmlFor="Player Name">Team 2 score</label>
                <input className="py-3 text-white bg-transparent " type="text" placeholder="ENTER NUMBER HERE" />
              </div>
            </div>
            <button className="p-4  bg-[#071C17] font-semibold w-[100px] text-white text-center" >ADD</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Match;
