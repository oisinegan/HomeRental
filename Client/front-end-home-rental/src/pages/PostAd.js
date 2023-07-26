import Nav from "../components/nav";
import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../config/firebase";

function PostAd() {
  const [images, setImages] = useState(null);
  const [imagePre, setImagePre] = useState(null);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFilesImgURl, setUploadedFilesImgUrl] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const MAX_IMAGES = 4;

  const [userInfo, setUserInfo] = useState([{}]);
  const [formRes, setFormRes] = useState({
    Type: "",
    City: "",
    County: "",
    Address: "",
    Price: "0",
    Bedrooms: "0",
    Bathrooms: "0",
    idLandlord: "",
    url: "",
    DatePosted: "",
    Folder: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormRes((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const folder = formRes.idLandlord + "_" + fullDate;
    formRes.Folder = folder;
    formRes.DatePosted = date + "-" + month + "-" + year;

    console.log(uploadedFiles);
    const promise = [];
    uploadedFiles.map(async (img) => {
      const imageRef = ref(storage, folder + "/" + img.name);
      await uploadBytes(imageRef, img);
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);
      //formRes.url = imageUrl
    });
    // const imageRef = ref(storage, folder + "/" + images.name);

    //
    // const imageUrl = await getDownloadURL(imageRef);
    // formRes.url = imageUrl;
    // await sendForm();
  };

  const sendForm = async () => {
    const response = await fetch("/PostAd", {
      method: "post",
      body: JSON.stringify(formRes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    alert("MSG FROM BACKEND " + result);
  };

  // const handleChangeImage = (e) => {
  //   // setImages(e.target.files[0]);
  //   // const urlVal = URL.createObjectURL(e.target.files[0]);
  //   // setImagePre(urlVal);

  //   console.log(e.target.files);
  // };
  //CREATE OBJECT URLs
  const configImages = async (files) => {
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const objectURL = URL.createObjectURL(file);
      urls.push(objectURL);
    }
    setUploadedFilesImgUrl(urls);
    console.log(uploadedFilesImgURl);
    console.log(urls);
  };
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_IMAGES) {
          alert("YOU CAN ONLY ADD " + (MAX_IMAGES - 1) + " images");
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) {
      setUploadedFiles(uploaded);
      configImages(uploaded);
    }
  };
  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
        console.log(userInfo);
        setFormRes((prevFormRes) => ({
          ...prevFormRes,
          idLandlord: userInfo.id,
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
        <input
          name="file"
          type="file"
          required
          onChange={handleFileEvent}
          multiple
          disabled={fileLimit}
        />
        {/* <img height={150} width={150} src={imagePre} /> */}
        <div className="uploaded-files-list">
          {uploadedFilesImgURl.map((file) => (
            <div>
              <img height={150} width={150} src={file} />
            </div>
          ))}
        </div>
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
    </>
  );
}

export default PostAd;
