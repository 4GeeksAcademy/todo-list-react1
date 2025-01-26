import React, { useState } from "react";



//include images into your bundle


//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const agregar = (e) => {
	  e.preventDefault();
	  if (inputValue.trim() !== "") {
		setTodo([...todo, inputValue]);
		setInputValue("");
	  }
	};
	console.log(todo);
	const handleKeyDown = (e) => {
	  if (e.key === "Enter") {
		agregar(e);
	  }
	};
	const eliminar = (item)=>{
		setTodo(todo.filter((_, i)=> i !== item))
		
	}
  
	return (
	  <div className="mx-auto mt-3 p-3 shadow p-3 mb-5 bg-body-tertiary rounded"  style={{width:"590px"}}>
		<form action="" onSubmit={agregar} className="form">
		  <div className="mb-3">
			<label htmlFor="Input1" className="form-label"></label>
			<input
			  value={inputValue}
			  onKeyDown={handleKeyDown}
			  onChange={(e) => setInputValue(e.target.value)}
			  type="text"
			  className="form-control "
			  id="Input1"
			  placeholder="name"
			/>
		  </div>
		  <ul className="list-group">

		  {todo.map((t, i) => (
			<li className="list-group-item d-flex justify-content-between" key={i}> {t} 
			<button className="border border-0 bg-white" onClick={()=>eliminar(i)} > X </button>
			 </li>  
			
			
		))}{" "}
		
		  </ul>
		</form>
		<span> {todo.length} Items left  <i class="bi bi-x-circle-fill"></i> </span>
	  </div>
	);
  };


export default Home;
