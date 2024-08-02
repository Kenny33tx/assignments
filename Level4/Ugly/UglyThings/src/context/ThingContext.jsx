import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const ThingContext = createContext();

export default function ThingProvider({ children }) {
  const [uglyThings, setUglyThings] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.vschool.io/kennysmith/thing")
      .then((res) => setUglyThings(res.data))

      .catch((err) => console.log(err));
  }, []);

  const addThing = (thing) => {
    
      axios.post("https://api.vschool.io/kennysmith/thing", thing)
      .then((res) => {
       setUglyThings([...uglyThings,res.data]) 
      })
      .catch((err) => {
        console.log("err adding a thing:", err);

        });

    
    };

    const deleteThing = (id) => {
      axios.delete(`https://api.vschool.io/kennysmith/thing/${id}`)
        .then((res) => {
          // Assuming res.data is the deleted item, you may not need to add it back to the list
          // setUglyThings([...uglyThings, res.data]);
          // Instead, you can filter out the deleted item from the list
          setUglyThings(uglyThings.filter(thing => thing.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting thing:", error);
        });
    };

  return (
    <ThingContext.Provider value={{ uglyThings, setUglyThings, addThing, deleteThing}}>
      {children}
    </ThingContext.Provider>
  );
}
