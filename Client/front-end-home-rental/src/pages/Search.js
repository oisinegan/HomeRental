import { useState, useEffect } from "react";
import Nav from "../components/nav";
function Search() {
  const [search, setSearch] = useState([]);
  const [searchRes, setSearchRes] = useState([{}]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearch((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch("/searchHomes", {
      method: "post",
      body: JSON.stringify(search),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setSearchRes(result);
  
  };

  return (
    <>
      <Nav />
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <br />

        <input
          name="search"
          type="text"
          maxLength={40}
          onChange={handleChange}
        />
        <button type="submit">Seach</button>
      </form>

      <div>
        {typeof searchRes === "undefined" ? (
          <p>Search results display here!</p>
        ) : (
          <div>
            {searchRes.map((house, index) => (
              <div key={index}>
                <img src={house.url} width={100} height={100}></img>
                <div>
                  {house.idHome +
                    "," +
                    house.Type +
                    "," +
                    house.Address +
                    "," +
                    house.City +
                    "," +
                    house.County +
                    "," +
                    house.Price +
                    "," +
                    house.Bedrooms +
                    "," +
                    house.Bathrooms}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
