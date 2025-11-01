
//IMPORTAÇÕES
import { useState } from "react";
import Input from "./Input";

//FUNÇÕES
function AddTask({onAddTaskSubmit}) {



    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">


      <Input   type="text"
        placeholder="Digite o titulo da tarefa" value={title} onChange={(event) =>setTitle(event.target.value)}
        
        />
      <Input type="text"
        placeholder="Digite descrição da tarefa" value={description} 
         onChange={(event) =>setDescription(event.target.value) }
        /> 



      {/*  
      COM REPETIÇÃO DE CLASSNAME :
      {
        <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title}
        onChange={(event) =>setTitle(event.target.value) }
      /> }
      { <input
        type="text"
        placeholder="Digite descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description}
         onChange={(event) =>setDescription(event.target.value) }
      />}  */}
      <button 
      onClick={() => {
        //verificar se o titulo e a descrição estão preenchidos
       if(!title.trim() || !description.trim()){
             return alert("preenche o titulo e a descrição da tarefa ");
}
        onAddTaskSubmit(title, description);
        setTitle("");
         setDescription("");
    }

      }  className="bg-slate-500 text-white px-4 py-2 rounded-md">
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
