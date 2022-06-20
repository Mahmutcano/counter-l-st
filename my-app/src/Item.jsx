import React, { useState } from "react";
import ItemList from "./ItemList";

const Item = ({ item, items, props }) => {
  const [data, setData] = useState({
    stop: "",
    enlem: "",
    boylam: "",
  });
  

  const [err, setErr] = useState({
    stop: "Aynı",
  });



  const handleInputChange = (event) => {
    setData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log([data].map(item => item));

  };



  return (
    <>
      <p>
        <small>Güzergah Adı:</small>
        {item}
      </p>
      <div style={{border: '2px solid', borderColor: 'red', display: 'flex'}}>
      <form onSubmit={handleSubmit} style={{display: 'flex', margin: 10, gap: 15}}>
        <div className="form-control">
          <label>Durak Adı:</label>
          <input
            type="text"
            name="stop"
            value={data.stop}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Enlem:</label>
          <input
            type="number"
            name="enlem"
            value={data.enlem}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Boylam:</label>
          <input
            type="number"
            name="boylam"
            value={data.boylam}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit" disabled={!data.stop}>Ekle</button>
        </div>
        <ItemList data={data} />
      </form>
    </div>

    </>
  );
};

export default Item;
