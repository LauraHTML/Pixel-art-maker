"use client";
import { useState } from "react";

export default function Cor(){
    const [cor, setCor] = useState("#00000")

    function handleCorMudanca(e){
        setCor(e.target.value);
    }

    return(<>
    <div className="p-2">
        <div className="display-cor h-50 w-50 p-2" style={{backgroundColor: cor}}>
            
        </div>
        <div className="p-2">
            <p className="font-bold">Cor selecionada: {cor}</p>
            <label htmlFor="">Selecione uma cor: </label>
            <input className="h-10 w-20" type="color" value={cor} onChange={handleCorMudanca} />
        </div>
    </div>
    </>)
}