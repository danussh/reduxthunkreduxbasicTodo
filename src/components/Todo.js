import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {addTodo,fetchdata} from "../actions/index"
import Todolist from './Todolist';
const Todo = () => {

    useEffect(() => {
        dispatch(fetchdata())
    }, [])
    const [change, setchange] = useState("")
    const arrays = useSelector(state => state.addreducer.data)
    const dispatch = useDispatch()
    const submittodo =()=>{
        dispatch(addTodo(change))
        setchange("")
    }
    return (
        <div>
            <input className=" mt-2"value={change}type ="text" onChange={(e)=>setchange(e.target.value)}/>
           <br></br> <button type="button" className="btn btn-primary mt-2" onClick={submittodo}>Cick Me</button>
           {
               arrays.map((val,index)=>{
                   return <Todolist key={index} val={val} />
               })
           }
   
        </div>
        
    )
}

export default Todo
