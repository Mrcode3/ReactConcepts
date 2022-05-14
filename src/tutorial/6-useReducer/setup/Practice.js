import React, { useEffect, useState } from "react";
import { useReducer } from "react";

const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        people: action.payload,
        isModalOpen: true,
        modalContent: "person added",
      };
    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "enter name",
      };
    case "REMOVE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    case "REMOVE_ITEM":
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "removed item",
      };

    default:
      throw new Error("No matching action");
  }
};

const Practice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    if (name) {
      const newPeople = [
        ...state.people,
        { id: new Date().getTime().toString(), name: name },
      ];
      dispatch({ type: "ADD", payload: newPeople });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeModal = () => {
    dispatch({ type: "REMOVE_MODAL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    setTimeout(() => {
      removeModal();
    }, 3000);
  }, [state.isModalOpen]);

  return (
    <main>
      {state.isModalOpen && (
        <div className="modal">
          <p>{state.modalContent}</p>
        </div>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add person</h4>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <p>{name}</p>
            <button onClick={() => removeItem(id)}> remove</button>
          </div>
        );
      })}
    </main>
  );
};

export default Practice;
