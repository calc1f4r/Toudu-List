"use client";
import { useEffect, useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/Constants/Constants";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { useWriteContract } from "wagmi";
import DisplayTodo from "@/Components/DisplayTodo";
import { todoitem } from "@/Types/Types";
import AddTodo from "@/Components/AddTodo";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "@/Components/Navbar";
function App() {
  const { writeContract } = useWriteContract();

  // todos information
  const [todos, setTodos] = useState([]) as any;
  const { address, isConnecting } = useAccount();
  const [todoItem, setTodoItem] = useState<string>("");

  ////////// Defining all the functions //////////
  // function to function to fetch all the todos  

  let { data, error } = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "viewTodos",
    account: address,
  });

  if (data == undefined) {
    data = [];
  }

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  function checkAllTodosAreDeleted(todos: todoitem[]): boolean {
    return todos.every((todo) => todo.isDeleted);
  }
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={true} />
      </div>
      <div className="w-7/8 mx-auto">
        {/* Navbar */}
        <Navbar />
        {/* Main Section */}
        <main className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-40 ">
          {/* Card for adding the todo-item card */}
          {address ? (
            <>
              <AddTodo todoItem={todoItem} setTodoItem={setTodoItem} />

              <div className=" sm:w-2/5 bg-base-100 shadow-md border shadow-green-500/50 rounded-3xl p-10">
                <div className=" items-center text-center">
                  <h2 className="m-2 text-2xl">Todos!</h2>
                  {/* Todo-item */}
                  {todos.length > 0 && !checkAllTodosAreDeleted(todos) ? (
                    <div className="border p-3 rounded-lg">
                      <div className="flex items-center justify-between border p-3 rounded-xl">
                        <div className="grow">
                          <p className="todo-item text-center text-sm">
                            Todo item
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <p className="text-sm">Complete</p>
                          <p
                            className="text-sm
                          ">
                            Delete
                          </p>
                        </div>
                      </div>
                      {todos.map((todo: todoitem) => {
                        if (!todo.isDeleted) {
                          return (
                            <DisplayTodo
                              key={todo.todoId}
                              todoId={todo.todoId}
                              todoItem={todo.todoItem}
                              isCompleted={todo.isCompleted}
                              isDeleted={todo.isDeleted}
                            />
                          );
                        }
                      })}
                    </div>
                  ) : (
                    <p>No todos Yet Or You have deleted all your todos</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center gap-5">
              <p className="text-2xl ">Connect to the wallet first!</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
