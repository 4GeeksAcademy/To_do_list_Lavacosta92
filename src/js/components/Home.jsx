import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState ("")
	const [listaDeTareas, setListaDeTareas]= useState([])


const onInputChange = (evento) => {
 	setInputValue(evento.target.value)
}

const onKeyEnterUp = (evento) => {
	if (evento.key === "Enter") {
		setListaDeTareas([...listaDeTareas, inputValue])
		setInputValue("")
	}

}

const deleteTask = (indextoDelete) => {
listaDeTareas.filter((tarea, indice) => {

	return indice !== indextoDelete ? true : false;

})

};


	return (
		<div className="text-center">
			<input type="text" value={inputValue} onChange={onInputChange} onKeyUp={onKeyEnterUp}/>
			<ul>
			{
				listaDeTareas.map((tarea, indice)=>{
					return (
						<li key={indice} >{tarea}
						<button onClick={() => deleteTask()}>X</button></li>

					)
				})
			}
			</ul>
            <div>
				<p>{} total items </p>
			</div>

		</div>
	);
};

export default Home;