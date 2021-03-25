import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

function TodoPage() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Card />
    </>
  );
}

export default TodoPage;
