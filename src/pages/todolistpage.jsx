import React, { useState } from 'react';
import './todolistpage.css';
import { Helmet } from 'react-helmet-async';

function Todolistpage() {
  const [deyer, setDeyer] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Helmet>
        <title>Todolistpage</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <form
        className="myform"
        onSubmit={(e) => {
          e.preventDefault();
          setTodo([...todo, { name: deyer, id: Math.round(Math.random() * 100) }]);
          setDeyer("");

        }}
      >
        <input
          className="myinp"
          type="text"
          value={deyer}
          onChange={(e) => setDeyer(e.target.value)}
        />
        <button className="mybtn" type="submit">Ekle</button>
      </form>
      <div className="myvalue">
        {todo.map((x, i) => (
          <div className="mysddedlist" key={x.id}>{i + 1}: {x.name}
            <button onClick={() => setTodo(todo.filter((y) => y.id !== x.id))}>
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolistpage;
