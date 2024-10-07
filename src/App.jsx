import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );

        const filterData = response.data.results.filter(
          (human) => human.dob.age >= 50
        );
        setData(filterData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (data.length === 0) {
    return <p>no data found</p>;
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Midterm 2</h1>
      <div className="flex flex-wrap">
        {data.map((user) => (
          <div key={user.email} className="border border-black m-10 w-[35%]">
            <div className="flex">
              <img src={user.picture.medium} alt="photo" />
              <div className="">
                <h2 className="text-lg font-bold">
                  {user.name.first} {user.name.last}
                </h2>
                <span>
                  {user.dob.age} / {user.gender}
                </span>
              </div>
            </div>
            <div>
              <div>
                <span>Age : {user.dob.age}</span>
              </div>
              <div>
                <span>
                  Name : {user.name.first} {user.name.last}
                </span>
              </div>
              <div>
                <span>Username : {user.login.username}</span>
              </div>
              <div>
                <span>City : {user.location.city}</span>
              </div>
              <div>
                <span>Country : {user.location.country}</span>
              </div>
              <div>
                <span>Postcode : {user.location.postcode}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
