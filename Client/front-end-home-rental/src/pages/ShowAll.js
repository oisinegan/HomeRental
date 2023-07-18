import { useState, useEffect } from "react";
import Nav from "../components/nav";

function ShowAll() {
  const [dataHouse, setDataHouse] = useState([{}]);

  useEffect(() => {
    fetch("/getAllHomes")
      .then((res) => res.json())
      .then((dataHouse) => {
        setDataHouse(dataHouse);
      });
  }, []);

  return (
    <>
      <Nav />
      <h1>Show All</h1>
      <div>
        {typeof dataHouse[0].City === "undefined" ? (
          <p>loading....</p>
        ) : (
          <div>
            {dataHouse.map((house, index) => (
              <div key={index}>
                <div>
                  <img src={house.url} width={100} height={100}></img>
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
                    house.Bathrooms +
                    ", POSTED BY: " +
                    house.name +
                    ", DATE POSTED: " +
                    house.DatePosted.slice(0, 10)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ShowAll;
