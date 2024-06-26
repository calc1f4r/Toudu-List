import { useWriteContract } from "wagmi";
import toast from "react-hot-toast";
import { useWaitForTransactionReceipt } from "wagmi";
import { useEffect } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/Constants/Constants";
interface AddTodoProps {
  todoItem: string;
  setTodoItem: React.Dispatch<React.SetStateAction<string>>;
}
export default function AddTodo({ todoItem, setTodoItem }: AddTodoProps) {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const addTodo = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "addTodo",
      args: [todoItem],
    });
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
    <div className=" sm:1/5 bg-base-100 shadow-md active:shadow-green-900/50  shadow-green-500/50 border mix-blend-normal	 rounded-3xl  p-10">
      <div className=" items-center text-center">
        <h2 className=" text-xl">Add-Todo</h2>
        <input
          type="text"
          value={todoItem}
          placeholder="Enter your todo item here!"
          onChange={(e) => setTodoItem(e.target.value)}
          className="input input-bordered mt-5 input-success w-full max-w-xs input-md rounded-2xl"
        />

        <div>
          <button
            disabled={isPending}
            onClick={addTodo}
            className="btn mt-5 btn-outline btn-wide rounded-lg ">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}
