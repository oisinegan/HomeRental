import { useState, useEffect } from "react";
import Nav from "../components/nav";
import LandingPageImg from "../Images/LandingPageImg.jpg";
import React from "react";

function LandingPage() {
  const divStyle = {
    backgroundImage: `url(${LandingPageImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "800px",
    backgroundSize: "100% 100%",
    //backgroundSize: "100% auto"  ---- KEEP THIS (TRY IT)
  };
  return (
    <>
      <Nav />

      {/* SEARCH/ IMAGE */}
      <div style={divStyle} className="flex items-center justify-center h-full">
        <form className="w-3/5 m-auto">
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            {/*  */}
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-0"
              placeholder="Search a location"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* FILTER INPUTS */}
      <div class="w-full  shadow p-5 rounded-lg bg-white">
        <div class="flex items-center justify-between mt-4">
          <p class="font-medium">Filters</p>

          <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filters
          </button>
          <button class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-md">
            {" "}
            Search{" "}
          </button>
        </div>

        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>

            <input
              name="City"
              type="text"
              placeholder="Town"
              maxLength={30}
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />

            <input
              name="County"
              type="text"
              placeholder="County"
              maxLength={30}
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Any Price</option>
              <option value="1000">RM 1000</option>
              <option value="2000">RM 2000</option>
              <option value="3000">RM 3000</option>
              <option value="4000">RM 4000</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Floor Area</option>
              <option value="200">200 sq.ft</option>
              <option value="400">400 sq.ft</option>
              <option value="600">600 sq.ft</option>
              <option value="800 sq.ft">800</option>
              <option value="1000 sq.ft">1000</option>
              <option value="1200 sq.ft">1200</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Bedrooms</option>
              <option value="1">1 bedroom</option>
              <option value="2">2 bedrooms</option>
              <option value="3">3 bedrooms</option>
              <option value="4">4 bedrooms</option>
              <option value="5">5 bedrooms</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Bathrooms</option>
              <option value="1">1 bathroom</option>
              <option value="2">2 bathrooms</option>
              <option value="3">3 bathrooms</option>
              <option value="4">4 bathrooms</option>
              <option value="5">5 bathrooms</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Bathrooms</option>
              <option value="1">1 space</option>
              <option value="2">2 space</option>
              <option value="3">3 space</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
