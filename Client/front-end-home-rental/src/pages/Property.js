import Footer from "../components/footer";
import Nav from "../components/nav";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Property() {
  const [msgDetails, setMsgDetails] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMsgDetails((prev) => {
      return { ...prev, [name]: value.trim() };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("/EmailUsers", {
    //   method: "post",
    //   body: JSON.stringify(msgDetails),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log(msgDetails);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [property, setProperty] = useState();

  useEffect(() => {
    // Call the fetchData function inside the useEffect
    getPropertyInfo();
  }, [id]);

  const getPropertyInfo = async () => {
    console.log(id);

    const response = await fetch("/getProperty", {
      method: "post",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    setProperty(result);
  };

  const informUser = (e) => {
    e.preventDefault();
    alert("Message send to landlord!");
  };

  return (
    <>
      <Nav />

      <div>
        {property === undefined ? (
          <p>loading....</p>
        ) : (
          <div className="flex flex-col ">
            {/* IMAGES */}
            <div className="flex justify-center">
              <div className="   w-[50%]">
                <div className="carousel carousel-end w-[100%] mt-4 ">
                  {property[id].urls.reverse().map((images, index) => (
                    <div key={index} className="carousel-item w-full  ">
                      <img
                        src={images}
                        alt="Rental property images"
                        className="w-full max-w-full h-[30em]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full py-1 gap-1 rounded">
              {property[id].urls.map((item, index) => (
                <p
                  key={index}
                  className="btn btn-xs"
                  onClick={(e) => e.preventDefault()}
                >
                  {index + 1}
                </p>
              ))}
            </div>
            {/* Info */}
            <div className=" ml-[10%]">
              <h5 className="mb-2 text-3xl mt-4 font-bold tracking-tight text-cyan-900 dark:text-white">
                {property[id].City}, {property[id].County}
              </h5>
              <p className="mb-2 text-xl">
                {" "}
                <span className="font-bold">Type: </span> {property[id].Type}{" "}
              </p>
              <p className="mb-2 text-xl">
                <span className="font-bold">Bedrooms: </span>{" "}
                {property[id].Bedrooms}{" "}
              </p>
              <p className="mb-2 text-xl">
                <span className="font-bold">Bathrooms: </span>{" "}
                {property[id].Bathrooms}{" "}
              </p>
              <p className="mb-2 text-xl">
                <span className="font-bold">Price p/m: </span>{" "}
                {property[id].Price}{" "}
              </p>
            </div>
            <div>
              {" "}
              <h5 className="mb-2 text-2xl ml-[10%] mt-10 font-bold tracking-tight text-cyan-900 dark:text-white">
                Description
              </h5>
              <p className="mx-[10%] text-xl">{property[id].Description} </p>
            </div>
            <div className=" bg-[#fafaf9] mt-4">
              <h5 className="mb-2 text-2xl ml-[10%] mt-10 font-bold tracking-tight text-cyan-900 dark:text-white">
                Contact Landlord
              </h5>
              <form className="flex3" onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label
                    htmlFor="name"
                    className="block text-sm  ml-[10%] font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="Name"
                      onChange={handleChange}
                      type="text"
                      required
                      className="block w-1/2 mx-[10%] rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block ml-[10%] text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      name="Email"
                      onChange={handleChange}
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-1/2 mx-[10%] rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="number"
                    className="block ml-[10%] text-sm font-medium leading-6 text-gray-900"
                  >
                    Number
                  </label>
                  <div className="mt-1">
                    <input
                      name="Number"
                      onChange={handleChange}
                      id="number"
                      type="text"
                      autoComplete="number"
                      required
                      className="block w-1/2 mx-[10%] rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="occupants"
                    className="block ml-[10%] text-sm font-medium leading-6 text-gray-900"
                  >
                    Number of occupants
                  </label>
                  <div className="mt-1">
                    <input
                      name="Occupants"
                      onChange={handleChange}
                      id="occupants"
                      type="number"
                      autoComplete="Number"
                      required
                      className="block w-1/2 mx-[10%] rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block ml-[10%] text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="Message"
                      onChange={handleChange}
                      id="message"
                      required
                      className="block w-3/4 h-[10em] mx-[10%] py-4 rounded-md border-0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-4 mr-[10%] mt-4">
                  <button
                    type="submit"
                    className="text-white text-lg p-4  bg-cyan-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold3 rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Property;
