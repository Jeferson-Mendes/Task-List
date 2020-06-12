import React, { useState } from "react";
import { FiTrash, FiEdit } from "react-icons/fi";

import "./style.css";

const Agenda = () => {
  const [tarefa, setTarefa] = useState("");
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(-1);

  function handleInputChange(event) {
    //event.prevendDefault();
    setTarefa(event.target.value);
  }

  function handleButtonTaks(event) {
    event.preventDefault();

    if (index === -1) {
      setTasks([...tasks, tarefa]);
      setTarefa("");
    } else {
      const tarefas = [...tasks];
      tarefas[index] = tarefa;
      setTasks([...tarefas]);
      setIndex(-1);
      setTarefa("");
    }
  }

  function handleEditClick(taskIndex) {
    const tarefas = [...tasks];
    setTarefa(tarefas[taskIndex]);
    setIndex(taskIndex);
  }

  function handleTrashClick(taskIndex) {
    const novasTarefas = [...tasks];
    novasTarefas.splice(taskIndex, 1);
    setTasks([...novasTarefas]);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <form action="">
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={tarefa}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleButtonTaks}>
          Criar
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <span>
              <FiEdit
                className="editIcon"
                onClick={() => handleEditClick(index)}
              />
              <FiTrash
                className="deleteIcon"
                onClick={() => handleTrashClick(index)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agenda;
