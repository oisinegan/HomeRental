import Nav from "../components/nav";
import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import storage from "../config/firebase";

function PostAd() {
  const [image, setImage] = useState(null);
  const [imagePre, setImagePre] = useState(null);
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [userInfo, setUserInfo] = useState([{}]);
  const [formRes, setFormRes] = useState({
    Type: "",
    City: "",
    County: "",
    Address: "",
    Price: "0",
    Bedrooms: "0",
    Bathrooms: "0",
    UID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormRes((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("Type", formRes.Type);
    formData.append("City", formRes.City);
    formData.append("County", formRes.County);
    formData.append("Address", formRes.Address);
    formData.append("Price", formRes.Price);
    formData.append("Bedrooms", formRes.Bedrooms);
    formData.append("Bathrooms", formRes.Bathrooms);
    formData.append("UID", formRes.UID);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const response = await fetch("/PostAd", {
      method: "post",
      body: formData,
    });

    const result = await response.json();
    alert("MSG FROM BACKEND " + result);
    console.log(result);
  };

  const handleChangeImage = (e) => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let milli = date_ob.getMilliseconds();

    let fullDate =
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      ":" +
      milli +
      "__" +
      date +
      "-" +
      month +
      "-" +
      year;
    console.log(fullDate);

    const folder = formRes.UID + "_" + fullDate;

    console.log(folder);
    const imageRef = ref(storage, folder);

    setImage(e.target.files[0]);
    setImagePre(URL.createObjectURL(image));
    console.log(image);

    // uploadBytes(imageRef, image).then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
  };

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
        setFormRes((prevFormRes) => ({
          ...prevFormRes,
          UID: userInfo.id,
        }));
      });
  }, []);

  return (
    <>
      <Nav />

      <h1>Hello {userInfo.Name} Post a property</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
        <img height={150} width={150} src={imagePre} />
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
