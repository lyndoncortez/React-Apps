import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book
        title="I Love You to the Moon and Back"
        author="Amelia Hepworth"
        img="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="Change Sings: A Children's Anthem"
        author="Amanda Gorman"
        img="https://images-na.ssl-images-amazon.com/images/I/91wRcPETM0L._AC_UL200_SR200,200_.jpg"
      />
      <Book
        title="A Promise Land"
        author="Barrack Obama"
        img="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
