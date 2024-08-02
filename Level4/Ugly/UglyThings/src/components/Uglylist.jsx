import React, { useContext } from "react";
import { ThingContext } from "../context/ThingContext";

export default function Uglylist() {
  const { uglyThings, setUglyThings } = useContext(ThingContext);

  return (
    <div>
      {uglyThings.map((thing) => (
        <div key={thing._id}>
          <h3>{thing.title}</h3>
          <h3>{thing.description}</h3>
          <img src={thing.imgUrl}></img>

          
        </div>
        
      ))}
    </div>
    
  );
}
