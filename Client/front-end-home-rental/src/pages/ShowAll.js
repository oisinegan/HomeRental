import { useState, useEffect } from "react";
import Nav from "../components/nav";

function ShowAll() {
  const [dataHouse, setDataHouse] = useState({});

  useEffect(() => {
    fetch("/getAllHomes")
      .then((res) => res.json())
      .then((dataHouse) => {
        setDataHouse(dataHouse);
        console.log(dataHouse);
      });
  }, []);

  return (
    <>
      <Nav />
      <h1 className="text-3xl font-bold underline">Show all</h1>
      <div>
        {dataHouse.length === 0 ? (
          <p>loading....</p>
        ) : (
          <div>
            {Object.entries(dataHouse).map(([index, house]) => (
              <div key={index}>
                <div>
                  {house.urls.map((images, index) => (
                    <img
                      src={images}
                      alt="Rental property images"
                      width={100}
                      height={100}
                    ></img>
                  ))}
                  {index +
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
                    house.Name +
                    ", DATE POSTED: " +
                    house.DatePosted}
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
