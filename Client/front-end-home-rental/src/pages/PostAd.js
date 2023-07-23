import Nav from "../components/nav";
import React, { useState, useEffect } from "react";

function PostAd() {
  const [file, setFile] = useState();
  const [userInfo, setUserInfo] = useState([{}]);
  const [formRes, setFormRes] = useState({
    Type: "",
    file: "",
    City: "",
    County: "",
    Address: "",
    Price: "0",
    Bedrooms: "0",
    Bathrooms: "0",
    UID: userInfo.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormRes((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInfo.id);
    console.log(formRes);
    const response = await fetch("/PostAd", {
      method: "post",
      body: JSON.stringify(formRes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(formRes);

    const result = await response.json();
    alert("MSG FROM BACKEND " + result);
    console.log(result);
  };

  const handleChangeImage = (e) => {
    console.log(e.target.files);
    formRes.file = URL.createObjectURL(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
    console.log(formRes);
  };

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
        console.log("Test");
        console.log(userInfo);
        formRes.UID = userInfo.id;
        console.log(formRes);
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
        <label>Add Image:</label>
        <input name="file" type="file" required onChange={handleChangeImage} />
        <img height={150} width={150} src={file} />
        <br /> <br />
        <br /> <br />
        <label>Address</label>
        <input
          name="Address"
          type="text"
          maxLength={30}
          required
          onChange={handleChange}
        />
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
        <label>County</label>
        <input
          name="County"
          type="text"
          maxLength={30}
          required
          onChange={handleChange}
        />
        <br /> <br />
        <label>Price per Month</label>
        <input name="Price" type="number" required onChange={handleChange} />
        <br /> <br />
        <label>Bedrooms</label>
        <input name="Bedrooms" type="number" required onChange={handleChange} />
        <br /> <br />
        <label>Bathrooms</label>
        <input
          name="Bathrooms"
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
