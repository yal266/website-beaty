import { RiSearchLine } from "@remixicon/react";
import React from "react";

const Search = () => {
  return (
    <div className="container mx-auto section px-5">
      <div className="flex items-center border shadow bg-white rounded-full">
        <span className="flex items-center justify-center pl-3">
          <RiSearchLine size={18} />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full py-3 pl-4 border-0 outline-none rounded-full text-gray-800"
        />
      </div>
    </div>
  );
};

export default Search;
