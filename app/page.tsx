import { InputWithButton } from "@/components/ui/search-bar";
import Image from "next/image";

export default function Home() {
  //TODO: font
  return (
    <main className="flex min-h-screen bg-lime-400 flex-col items-center  gap-10 p-24">
      <h1>Shit Coin Spotter</h1>
      {/* //TODO: use next image */}
      <img src="/icon.png" />
      <InputWithButton />
    </main>
  );
}
