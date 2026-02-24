"use client";
import { useState, useRef } from "react";
import { SeletorCor } from "@/components/ui/color-picker";
import Cor from "./cor";

import { Pencil, Eraser, PencilLine, Circle, Square } from "lucide-react";
 
import { Button } from "./ui/button";

export default function PixelArtMaker() {
    const [tamanhoGrid, setTamanhoGrid] = useState(16);
    const [cor, setCor] = useState("#00000");
    const [lapis, setLapis] = useState(true);
    const [taClicado, setTaClicado] = useState(false);

    const [grid, setGrid] = useState(Array(tamanhoGrid * tamanhoGrid).fill(("#ffffff")));

    function handleCorMudanca(e) {
        setCor(e.target.value);
    }

    function handleApagar(e) {
        setLapis(false);
    }

    function handleDesenhar() {
        setLapis(true);
    }

    const desenharPixel = (index) => {
        const novaGrid = [...grid];
        if (lapis === false) {
            novaGrid[index] = "#ffffff";
        } else {
            novaGrid[index] = cor;
        }
        setGrid(novaGrid);
    };

    const handleMouseClicado = (index) => {
        setTaClicado(true);
        desenharPixel(index);
    };

    const handleClicando = (index) => {
        if (taClicado) {
            desenharPixel(index);
        }
    };

    const handleMouseNClicado = () => {
        setTaClicado(false);
    };

    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_auto_auto] gap-4 w-full justify-center">
            <div className="bg-secondary h-full flex flex-col gap-3 w-50 p-2">
                <h1>Ferramentas</h1>
                <div className="grid grid-cols-2">
                    <Button variant={"outline"} onClick={handleDesenhar}><Pencil /></Button>
                    <Button variant={"outline"} onClick={handleApagar}><Eraser /></Button>
                    <Button variant={"outline"}><PencilLine /></Button>
                    <Button variant={"outline"}><Circle /></Button>
                    <Button variant={"outline"}><Square /></Button>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Pixel art</h1>
                <div className="grid w-120 h-120" style={{ gridTemplateColumns: `repeat(${tamanhoGrid}, 1fr)` }} onMouseLeave={handleMouseNClicado}>
                    {grid.map((cor, index) => (
                        <div className="border"
                            key={index}
                            onMouseDown={() => handleMouseClicado(index)}
                            onMouseEnter={() => handleClicando(index)}
                            onMouseUp={handleMouseNClicado}
                            style={{ backgroundColor: cor }}
                        >
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-2">
                <h1 className="text-2xl">Seletor de cor:</h1>
                <div className="display-cor h-50 w-50 p-2 border-2 border-black" style={{ backgroundColor: cor }}>

                </div>
                <div className="p-2">
                    <p className="font-bold">Cor selecionada: {cor}</p>
                    <label htmlFor="">Selecione uma cor: </label>
                    <input className="h-10 w-20" type="color" value={cor} onChange={handleCorMudanca} />
                </div>
            </div>
        </div>

    </>)
}