import React from 'react'

const MagicButton = ({
    title,icon,positionn,handleClick,otherClass
}: {
    title:string; icon:React.ReactNode, positionn?:string; handleClick?:()=>void;otherClass?:string
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${otherClass}`}>
        {positionn === "left" && icon}
        {title}
        {positionn === "right" && icon}
        </span>
    </button>
  )
}

export default MagicButton