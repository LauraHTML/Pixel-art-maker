import Image from "next/image";

import PixelArtMaker from "@/components/pixelArtMaker";

export default function Home() {
  
  return (
    <>
    <main className="min-h-screen w-full p-10 bg-accent">
      
      <PixelArtMaker />
    </main>
    </>
  );
}
