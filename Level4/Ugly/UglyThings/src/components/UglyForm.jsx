import React, { useContext, useState } from "react";
import { ThingContext } from "../context/ThingContext";

export default function UglyForm() {
  const { uglyThings, setUglyThings, addThing, deleteThing } =
    useContext(ThingContext);
  const [uglyData, setUglyData] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });

  const { title, description, imgUrl } = uglyData;

  function handleChange(e) {
    const { name, value } = e.target;
    setUglyData((prevThing) => ({
      ...prevThing,
      [name]: value,
    }));
    console.log(e.target.value);
  }

  function uglySubmit(e) {
    e.preventDefault();
    addThing(uglyData);
    console.log("added");
    setUglyData((prevData)=>({
      ...prevData,
      uglyData
    }));
  }

 
  return (
    <div className="container">
      {/* <h2 className='title'>
            Ugly Thing
        </h2> */}
      <form onSubmit={uglySubmit}>
        <input
          className="inputs"
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="text"
          name="imgUrl"
          value={imgUrl}
          placeholder="image url"
          onChange={handleChange}
        />

        <input
          className="inputs"
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={handleChange}
        />
      </form>
      <button className="button" onClick={uglySubmit}>
        Add Ugly Thing
      </button>
     
    </div>
  );
}
