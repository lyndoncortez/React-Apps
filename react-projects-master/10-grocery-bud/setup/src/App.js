import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, "danger", "Please add an item!");
    } else if (name && isEditing) {
      //deal with edit
    } else {
      showAlert(true, "success", "Item added to the List!");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleClear = () => {
    showAlert(true, "danger", "List cleared!");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item cleared!");
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <h3>Grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              placeholder="e.g. eggs"
              className="grocery"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} />
            <button className="clear-btn" onClick={handleClear}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
