'use client'

import { CreateGappa } from "@/lib/actions";
import { useState } from "react";

function PostForm({userId}) {
  const [msg, setMsg] = useState("")
  const handleSubmit = async()=>{
    try {
      await CreateGappa(userId,msg);
      alert("Done!");
      setMsg("")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <textarea
        className="bg-neutral-600 w-full mt-5 outline-none text-white p-2 rounded"
        rows={10}
        placeholder="Type your Gappa..."
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
      />
      <button onClick={handleSubmit} className="w-full bg-blue-600 py-2 rounded mt-5 cursor-pointer hover:bg-blue-700">
        Create
      </button>
    </>
  );
}

export default PostForm;
