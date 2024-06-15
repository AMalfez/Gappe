function RightBar() {
  return (
    <div className="w-1/6 hidden lg:flex flex-col pb-2 px-1 gap-1">
        <div className="h-1/2 p-2 bg-neutral-950 overflow-y-auto rounded-lg">
          <p className="text-sm font-medium border-b border-neutral-500 pb-1">Suggested Communities</p>
        </div>
        <div className="h-1/2 p-2 bg-neutral-950 overflow-y-auto rounded-lg">
          <p className="text-sm font-medium border-b border-neutral-500 pb-1">Suggested Users</p>
        </div>
    </div>
  )
}

export default RightBar