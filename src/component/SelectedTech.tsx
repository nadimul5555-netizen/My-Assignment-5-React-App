import type { Dispatch } from "react";
import type { TechTypes } from "../TechTypes";
import { RxCross2 } from "react-icons/rx";

export interface SelectedTechProps {
    addTech: TechTypes[];
    setAddTech: Dispatch<React.SetStateAction<TechTypes[]>>;
     
}

const SelectedTech = ({ addTech, setAddTech }: SelectedTechProps) => {
    const handleRemove =(tech:TechTypes)=>{
        const newRemoveSetAdder= addTech.filter(fil=> fil.id !== tech.id)
        setAddTech(newRemoveSetAdder)
        
    }

    const handleRemoveAll=(adderTech:TechTypes[])=>{
        setAddTech(adderTech)
    }

    return (
        <div>
            <div className="card bg-base-100 w-85 shadow-xl m-5 border border-gray-100">
                <h1 className="m-6 font-bold text-2xl">Your Stack</h1>
                <h2 className="m-3 text-[#475569]">{addTech.length === 0 ? "No technologies selected yet." : `${addTech.length} Technology Selected!`}</h2>

                <div>
                    {
                        addTech.map(tech => {
                            return (
                                <div className="grid grid-cols-2 rounded-2xl  bg-base-100 shadow-md m-4 ">

                                    <div className="flex">
                                        <div>
                                            <img className="h-12 m-3" src={tech.icon} />
                                        </div>
                                        <div className="m-3">

                                            <h2 className="font-bold">{tech.name}</h2>
                                            <p className="text-[#475569]">{tech.category}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center m-5">
                                        <RxCross2 onClick={()=> handleRemove(tech)} />
                                    </div>

                                </div>



                            )
                        })
                    }
                </div>
                <div className="m-3">
                    {
                        addTech.length > 0 ? <button onClick={()=> handleRemoveAll([])} className="btn btn-block text-red-500 border-red-400">Remove All</button> : <div className="bg-base-100 shadow-md m-4 h-20  flex items-center justify-center rounded-2xl border border-dashed border-red-300 ">Your stack is empty.</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectedTech;