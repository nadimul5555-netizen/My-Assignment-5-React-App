import {  type Dispatch } from "react";
import type { TechTypes } from "../TechTypes";
import { FaStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";


export interface TechCardsProps {
  Tech: TechTypes
  addTech:TechTypes[];
      setAddTech:Dispatch<React.SetStateAction<TechTypes[]>>;
      
}

const TechCards = ({ Tech,setAddTech,addTech ,}: TechCardsProps) => {

       
 let ButtonSelector = addTech.some(Button=> Button.id === Tech.id)
       
   const handleSelectdTech=()=>{
     
     const newAddStack =([...addTech,Tech])
     setAddTech(newAddStack)
     toast.success(`${Tech.name} is Added in Your Stack!`)
     
  }
  

  

  return (
    <div className="m-5 gap-5">
      <div className={`card bg-base-100 w-85 shadow-sm ${ButtonSelector=== true ? "border border-l-indigo-600":""}`}>
        <div className="px-10 pt-10 flex justify-between">
          <img
            src={Tech.icon}
            alt="Shoes"
            className="rounded-xl h-16" />
            <button className="btn rounded-3xl">{Tech.badge}</button>
        </div>
        <div className=" items-center p-5">
          <h2 className="font-bold text-2xl p-3 ">{Tech.name}</h2>
          <p className="text-[#475569] p-3">{Tech.description}</p>
          <div className="flex m-3 gap-5">
            <button className="text-[#475569] bg-[#F1F5F9] rounded-lg">{Tech.category}</button>
            <p className="text-[#475569]">{Tech.difficulty}</p>
            <div className="flex gap-1.5">
              < FaStar className="text-yellow-300 mt-1" />
              <h2>{Tech.rating}</h2>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={handleSelectdTech} disabled={ButtonSelector === true? true:false} className={`btn btn-primary btn-block ${ButtonSelector === true ? " text-pink-600":"bg-black"}  rounded-lg`}>{ButtonSelector === false? ("Add to Stack"):(
              <>
              <GiCheckMark /> Added to Stack
              </>
            )
             }</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechCards;