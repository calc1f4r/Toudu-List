import { useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/Constants/Constants";
import { todoitem } from "@/Types/Types";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useWaitForTransactionReceipt } from "wagmi";
export default function DisplayTodo({
  todoId,
  todoItem,
  isDeleted,
  isCompleted,
}: todoitem) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [completeTodo, setCompleteTodo] = useState<boolean>(isCompleted);
  const [deleteTodo, setDeleteTodo] = useState<boolean>(isDeleted);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const completeThetodo = async () => {
    setIsLoading(true);
    if (!completeTodo) {
      try {
        await writeContract({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          functionName: "completeTodo",
          args: [todoId],
        });
        setCompleteTodo(true);
      } catch (err) {
        alert("Error in completing the todo!" + err);
      }
    } else {
      try {
        await writeContract({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          functionName: "uncompleteTodo",
          args: [todoId],
        });
        setCompleteTodo(false);
      } catch (err) {
        alert("Error in uncompleting the todo!" + err);
      }
    }
    setIsLoading(false);
  };

  const deleteTheTodo = async () => {
    setIsLoading(true);
    try {
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "deleteTodo",
        args: [todoId],
      });
      setDeleteTodo(true);
    } catch (err) {
      alert("Error in deleting the todo!" + err);
    }
    setIsLoading(false);
  };
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  useEffect(() => {
    if (isConfirming) {
      toast("Confirming the transaction!!", {
        icon: "🔃",
      });
    } else if (isConfirmed) {
      toast.success("Transaction has been confirmed!");
    }
  }, [isConfirming, isConfirmed]);
  return (
    <div className="mt-5 flex-col gap-  ">
      <div className="flex items-center justify-center gap-3 border rounded-full p-3">
        <input
          readOnly
          className={`flex h-10 w-full border active:border-2 border-green-600 bg-transparent p-4 rounded-full disabled:cursor-not-allowed disabled:opacity-50 ${
            completeTodo ? "line-through" : ""
          }`}
          type="text"
          value={todoItem}
        />
        <button
          disabled={isLoading}
          className="btn btn-circle btn-outline btn-sm "
          onClick={completeThetodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={!completeTodo ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
        <button
          disabled={isLoading}
          className="btn btn-circle btn-outline btn-sm"
          onClick={deleteTheTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
