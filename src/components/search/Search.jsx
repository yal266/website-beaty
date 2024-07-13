import { RiSearchLine } from "@remixicon/react";
import React from "react";

const Search = () => {
  return (
    <div className="container section mx-auto px-5">
      <div className="flex items-center border bg-white">
        <span className="flex items-center justify-center pl-3">
          <RiSearchLine size={18} />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full py-3 pl-4 border-0 outline-none  text-gray-800"
        />
      </div>
    </div>
  );
};

export default Search;
