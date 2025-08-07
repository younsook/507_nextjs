'use client'
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import axios from "axios";
import { useState, useEffect } from "react";

import type { Todo, completedT } from "@/types/Todo"

export default function TodoList() {
  const url =  "http://localhost:3005/todos" ;
  const [ tdata , setTdata ] = useState<Todo[]>([]) ;

  const getData = async () => {
    const { data } = await axios.get(url) ;
    setTdata(data) ;
  }

  const addTodo = async (text:string, completed:completedT) => {
    // console.log("Add", text, completed)
    await axios.post(url, {
      text : text,
      completed : completed
    }) ;

    getData();
  }

  const toggleTodo = async (id:string, completed:completedT) => {
    // console.log("modify", id, completed)
    const done = completed == "X" ? "O" : "X" ;
    await axios.patch(`${url}/${id}`, { 
      completed : done
    }) ;
    getData();
  }

  const deleteTodo = async (id:string) => {
    // console.log("delete", id)
    await axios.delete(`${url}/${id}`) ;
    getData();
  }
  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="w-9/10 flex flex-col">
      <TodoForm addTodo ={addTodo} />
      {tdata && tdata.map(item => <TodoItem key={item.id}
                                            item={item}
                                            onDelete={deleteTodo}
                                            onToggle={toggleTodo}
                                            />) }
    </div>
  )
}