import React, { useState } from "react";

export default function Badgeform(props) {
  const initialData = {
    firstName: "",
    lastName: "",
    Phone: "",
    placeOfBirth: "",
    Email: "",
    favoriteFood: "",
    aboutMe: "",
  };
  const [badge, setBadge] = useState(initialData);
  const [isdisabled,setIsDisabled] = useState(true)
 

  function handleChange(e) {
    const { name, value } = e.target;
    setBadge((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    //    console.log("Submitted")
    props.addBadge(badge);
    setBadge(initialData);

  }

  return (
    <form className="flexContainer" onSubmit={handleSubmit}>
      <input
        className="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={badge.firstName}
        required
      />
      <input
        className="lastName"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={badge.lastName}
        required
      />
      <input
        className="phone"
        type="number"
        placeholder="Phone Number"
        onChange={handleChange}
        name="Phone"
        value={badge.Phone}
        required
      />
      <input
        className="pob"
        type="text"
        placeholder="Place of Birth"
        onChange={handleChange}
        name="placeOfBirth"
        value={badge.placeOfBirth}
        required
      />
      <input
        className="email"
        type="email"
        placeholder="Email Address"
        onChange={handleChange}
        name="Email"
        value={badge.Email}
        required
      />

      <input
        className="favFood"
        type="text"
        placeholder="Favorite Food"
        onChange={handleChange}
        name="favoriteFood"
        value={badge.favoriteFood}
        required
      />

      <textarea
        className="aboutMe"
        value={badge.aboutMe}
        placeholder="About Me"
        onChange={handleChange}
        name="aboutMe"
        required
      />

      <button type="submit" className="Submit" onChange= {handleChange} >
        Submit
      </button>
    </form>
  );
}
