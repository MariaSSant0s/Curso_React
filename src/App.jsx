import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import Title from "./components/Title";

import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    //nao pode usar assync
    const fecthTasks = async () => {
      //CHAMAR API
      const response = await fetch(
        "'https://jsonplaceholder.typicode.com/todos?_limit=10",
        () => {
          methor: "GET";
        }
      );
      const data = await response.json();
      console.log(data);
   

    //PEGA OS DADOS QUE ELA RETORNOU
    //ARMAZENA/PERSISTIR ESSES DADOS NO STATE
    
     };
     //SE QUISER VOCE PODE CHAMAR UMA API para pegar as tarefas
     //fecthTasks();
  }, []); //paramentro de lista vaizia = essa função so vai ser rodada na primeira vez que abre o app
 
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      //precisa atualizar a tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        //não precisa atualizar
        return task;
      }
    });
    setTasks(newTask);
  }

  function onTrashClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId); //PEGA OS ID
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title >
          Gerenciador de tarefas
        </Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}
export default App;

//REFERENCIA- COMEÇO AULA :
//import { useState } from "react";
//
//function App(){
//  //STATES(ESTADO)
//  //uma variavel - atualiza tela/interface
//  const [ message, setMessage] = useState("Ola mundo");
//
//  /* let message = "ola mundo"; */ //LET -> MUDAVEL
//  return(
//    //SÓ RETORNA UM ELEMENTO
//    <div>
//    <h1>{message}</h1>
//    <button onClick={() =>{
//      /* message = "ola, foi clicado" */ //USANDO STATE :
//      setMessage("ola, foi clicado");
//    }}> Mudar mensagem</button>
//    </div>
//
//  )
//}
//
//export default App;

//DADOS ANTIGOS

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */
