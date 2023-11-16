import React, { useState } from "react";
import trash from "../images/Vector.png";

const Test = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputValue(newText);
  };

  const handleEnterClick = () => {
    if (inputValue.trim() !== "" && items.length <= 4) {
      setItems((prevItems) => [
        ...prevItems,
        { text: inputValue, done: false, isClicked: false },
      ]);
      setInputValue("");
    } else if (items.length > 4) {
      alert("Enough Notes!");
    }
  };

  const handleRemoveClick = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleDoneClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              done: !item.done,
              isClicked: item.done ? false : !item.isClicked,
            }
          : item
      )
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEnterClick();
    }
  };

  const generateText = (item) => {
    return item.done ? <del>{item.text}</del> : item.text;
  };

  return (
    <div className="mainDiv">
      <div className="inputDiv">
        <div className="inputInsideClear">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            maxLength={16}
            placeholder="Note"
          />
          <div className="inputClear" onClick={() => setInputValue("")}>
            ✗
          </div>
        </div>
        <div className="ENTER" onClick={handleEnterClick}>
          Enter
        </div>
      </div>
      <div className="footerDiv">
        <div className="footerChild">
          {items.map((item, index) => (
            <div className="footerFlex" key={index}>
              <div className="textAlone">
                <div className={item.done ? "userText done" : "userText"}>
                  {generateText(item)}
                </div>
              </div>

              <div className="iconsTogether">
                <div
                  className={`doneClick ${item.isClicked ? "clicked" : ""}`}
                  onClick={() => handleDoneClick(index)}
                >
                  <div className="hide"> ✔ </div>
                </div>
                <div
                  className="deleteClick"
                  onClick={() => handleRemoveClick(index)}
                >
                  <img src={trash} alt="trash" className="trashIcon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
