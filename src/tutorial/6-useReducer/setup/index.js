import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";
import { data } from "../../../data";
import { act } from "react-dom/test-utils";
// reducer function - always return a state

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = [
        ...state.people,
        { id: new Date().getTime().toString(), name: name },
      ];
      dispatch({ type: "ADD", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeModal = () => {
    dispatch({ type: "REMOVE_MODAL" });
  };

  return (
    <main>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} removeModal={removeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <h4>Add Person</h4>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </main>
  );
};

export default Index;
