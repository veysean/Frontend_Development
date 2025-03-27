import React, { useState } from "react";
export default function StuffForm({addStuff}) {

  const [stuffName, setStuffName] = useState("");
  const [stuffPrice, setStuffPrice] = useState(0);

  function onStuffNameChange(event) {
    setStuffName(event.target.value);
  }

  function onStuffPriceChange(event) {
    setStuffPrice(Number(event.target.value));
  }

  function onAddStuff(event) {
    event.preventDefault();
    addStuff(stuffName, stuffPrice);
    setStuffName("");
    setStuffPrice(0);
  }

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={onStuffNameChange}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={onStuffPriceChange}/>

      <button onClick={onAddStuff}>Add Stuff</button>
    </form>
  );
}
