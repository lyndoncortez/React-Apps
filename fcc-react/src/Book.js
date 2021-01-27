import React from "react";

const handleClick = () => {
  alert("Hello World");
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={handleClick}>
        Buy
      </button>
    </article>
  );
};

export default Book;
