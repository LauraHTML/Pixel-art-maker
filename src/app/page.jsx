import Image from "next/image";

import PixelArtMaker from "@/components/pixelArtMaker";

export default function Home() {
  return (
    <>
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <PixelArtMaker />
    </main>
    </>
  );
}
