import axios from "axios"

export const addTodo = (data)=>{
    return {
        type:"ADD_TODO",
         payload : data
    }
}

export const fetchdata = ()=>{

    return async (dispatch)=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
       const todo=[];
       response.data.map((val)=>{
           return todo.push(val.title)
       })
       var todos=todo.slice(0,10)
        dispatch({
            type:"FETCH_DATA",
            payload:todos
        })
    }
}

