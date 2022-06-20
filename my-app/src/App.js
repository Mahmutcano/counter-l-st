import { useState } from "react";
import Item from "./Item";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);


  function addItem(event) {
    event.preventDefault();
    
    setItems((prevData) => {
      const  dataItem = [...prevData, input];
      return dataItem;
    });
    setInput("");

  }


  return (
    <div>
      <div style={{border: '2px solid', borderColor: 'red', padding: 50}}>
        <label htmlFor="">Güzergah Adı</label>
        <input
          type="text"
          placeholder="Gir"
          required
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit" disabled={!input} onClick={addItem}>Kaydet</button>
      </div>

      <div >
        <ul>
          {(items.length > 0 && items.map((item, index) => (
            <>
              <Item id={index} item={item} items={items} setItems={setItems}/><br/>
            </>
          ))) || ('Daha Bişey Yok')}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
