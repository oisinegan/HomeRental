import Nav from "../components/nav";
import React, { useState, useEffect } from "react";

function PostAd() {
  const [file, setFile] = useState();
  const [userInfo, setUserInfo] = useState([{}]);
  const [formRes, setFormRes] = useState({
    Type: "%",
    City: "%",
    County: "%",
    MinPrice: "0",
    MaxPrice: Number.MAX_SAFE_INTEGER,
    MinBedrooms: "0",
    MaxBedrooms: Number.MAX_SAFE_INTEGER,
    MinBathrooms: "0",
    MaxBathrooms: Number.MAX_SAFE_INTEGER,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormRes((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(formRes);
  };

  const handleChangeImage = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
        console.log("Test");
        console.log(userInfo);
      });
  }, []);

  return (
    <>
      <Nav />

      <h1>Hello {userInfo.Name} Post a property</h1>
      <form onSubmit={handleSubmit}>
        <label>Property Type</label>
        <br />
        <label>
          <input
            type="radio"
            name="Type"
            value="apartment"
            required
            onChange={handleChange}
          />
          Apartment
        </label>
        <label>
          <input
            type="radio"
            name="Type"
            value="house"
            required
            onChange={handleChange}
          />
          House
        </label>
        <br /> <br />
        <label>Town</label>
        <input
          name="City"
          type="text"
          maxLength={30}
          required
          onChange={handleChange}
        />
        <br /> <br />
        <label>Add Image:</label>
        <input type="file" onChange={handleChangeImage} />
        <img height={150} width={150} src={file} />
        <br /> <br />
        <label>County</label>
        <input
          name="County"
          type="text"
          maxLength={30}
          required
          onChange={handleChange}
        />
        <br /> <br />
        <label>Min Price</label>
        <input name="MinPrice" type="number" required onChange={handleChange} />
        <br /> <br />
        <label>Max Price</label>
        <input name="MaxPrice" type="number" required onChange={handleChange} />
        <br /> <br />
        <label>Min Bedrooms</label>
        <input
          name="MinBedrooms"
          type="number"
          required
          onChange={handleChange}
        />
        <br /> <br />
        <label>Max Bedrooms</label>
        <input
          name="MaxBedrooms"
          type="number"
          required
          onChange={handleChange}
        />
        <br /> <br />
        <label>Min Bathrooms</label>
        <input
          name="MinBathrooms"
          type="number"
          required
          onChange={handleChange}
        />
        <br /> <br />
        <label>Max Bathrooms</label>
        <input
          name="MaxBathrooms"
          type="number"
          required
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {typeof searchRes === "undefined" ? (
          <p>loading....</p>
        ) : (
          <div>
            {/* {searchRes.map((house, index) => (
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
                    house.Bathrooms}
                </div>
              </div>
            ))} */}
          </div>
        )}
      </div>
    </>
  );
}

export default PostAd;
