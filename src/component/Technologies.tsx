import { use, useState } from "react";
import type { TechTypes } from "../TechTypes";
import AvilableTech from "./AvilableTech";
import SelectedTech from "./SelectedTech";

export interface TechnologiesProps {
    TechPromis:Promise<TechTypes[]>
}

const Technologies = ({ TechPromis }: TechnologiesProps) => {
    const toUse = use(TechPromis)

    const [addTech,setAddTech]=useState<TechTypes[]>([])
    
   
    return (
        <div className="mb-15">
            <div className="container mx-auto p-6 my-10">

            <h2 className="font-extrabold text-5xl">Explore the <span className=" bg-linear-to-r from-[#EC4899] to-blue-500 bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#475569] my-3 text-2xl">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-12 container mx-auto">
                <div className="col-span-9">
                 <AvilableTech toUse={toUse} addTech={addTech} setAddTech={setAddTech}></AvilableTech>
                </div>
                <div className="col-span-3">
                <SelectedTech addTech={addTech} setAddTech={setAddTech} ></SelectedTech>
                </div>
            </div>
        </div>
    )
}

export default Technologies;