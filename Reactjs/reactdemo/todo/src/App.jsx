import { useState } from 'react';
import './App.css'
function App(){
  const[data,setData] = useState([]);
  const[name,setName] = useState("");
  const[description,setDescription] = useState("");

  function handleName(e){
    setName(e.target.value)
  }

  function handleDescription(e){
    setDescription(e.target.value)
  }

  function handleSubmit(){
    let newarr = {name , description}
    console.log(newarr);
    
    setData([...data,newarr])
    console.log(data);
    setDescription("");
    setName("")
  }

  function handleDelete(index){
    let newarry = data.filter((val,i)=>i !== index)
    setData(newarry)
  }
  return(
    <div>
      <h1>Todo</h1>
      <div >
      <input className='input-name'
      type="text"
      value={name}
      onChange={handleName}
      placeholder='Enter heading'
      />
      </div>
      <div>
      <input className='input-description'
      type="text"
      value={description}
      onChange={handleDescription}
      placeholder='Enter description'
      />
      </div>
      <button id='btn' onClick={handleSubmit}>Submit</button>
      {
        data.map((val,index)=>(
          <div className='App-comp'>
            <div>
            <h1 id='containt'>{val.name}</h1>
            <h3>{val.description}</h3>
            </div>
                
              <button id='deletebtn' onClick={()=>handleDelete(index)}>Delete</button>
            </div>
           
          
        ))
      }
    </div>
  )
}
export default App;