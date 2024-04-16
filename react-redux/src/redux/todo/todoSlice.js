import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState = { 

    todos:[{id:1, text:"Hello"}]
 }
//reduce functionality

 const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
      addTodo:(state,action)=>{
        const todo={id:nanoid() , text:action.payload}
        state.todos.push(todo)

      } , 
      removeTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload.id)
      },
      updateTodo:(state,action)=>{
        const {id,newtext}=action.payload;
        const updateTodo=state.todos.find(todo=>todo.id===id);
        if(updateTodo){
            updateTodo.text=newtext;
        }
              },

        deleteTodo:(state,action)=>{
            state.todos=[]
        }      

      
    }
 })

 export const {addTodo,removeTodo,updateTodo,deleteTodo}=todoSlice.actions;
 export default todoSlice.reducer;