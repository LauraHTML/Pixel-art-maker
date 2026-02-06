"use client";
import { useState } from "react";

export default function PixelArtMaker() {
    const [tamanhoGrid, setTamanhoGrid] = useState(16);
    const cor = "#64c6f7"
    const [grid, setGrid] = useState(Array(tamanhoGrid * tamanhoGrid).fill(("#ffffff")));

    const handleClickPixel = (index) =>{
        const novaGrid = [...grid];
        novaGrid[index] = cor;
        setGrid(novaGrid)
    }

    return (<>
    <h1>Pixel art maker</h1>
    <div className="grid w-120 h-120" style={{ gridTemplateColumns: `repeat(${tamanhoGrid}, 1fr)`}}>
        
        {grid.map((cor, index) => (
           <div className="border"
           key={index}
            onClick={() => handleClickPixel(index)}
            style={{backgroundColor: cor}}
           >
        </div> 
        ))}       
    </div>
    </>)
}