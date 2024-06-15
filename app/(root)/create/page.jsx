import '../scrollbar.css'
function Page() {
  return (
    <div className="w-full lg:w-4/6 bg-neutral-950 px-8 overflow-y-auto pb-5">
      <h1 className="text-3xl py-4 mt-8 border-b border-neutral-600">Create Gappa</h1>
      <textarea className="bg-neutral-600 w-full mt-5 min-h-40 outline-none text-white p-2 rounded" placeholder="Type your Gappa..." />
      <button className='w-full bg-blue-600 py-2 rounded mt-5 cursor-pointer hover:bg-blue-700'>Create</button>
    </div>
  )
}

export default Page