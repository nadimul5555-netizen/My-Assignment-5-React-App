import type { Dispatch } from "react";
import type { TechTypes } from "../TechTypes";
import TechCards from "./TechCards";

export interface AvilableTechProps {
    toUse: TechTypes[]
    addTech:TechTypes[];
    setAddTech:Dispatch<React.SetStateAction<TechTypes[]>>
    
}

const AvilableTech = ({ toUse,addTech,setAddTech}: AvilableTechProps) => {
    
    return (
        <div className="grid sm:grid-cols-1  lg:grid-cols-3">
            {
                toUse.map((Tech,ind)=> <TechCards Tech={Tech} key={ind} addTech={addTech} setAddTech={setAddTech} ></TechCards>)
            }
        </div>
    )
}

export default AvilableTech;