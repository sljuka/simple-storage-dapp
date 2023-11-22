import ConnectButton from "@/Connect/ConnectButton";
import { FavouriteNumber } from "@/FavouriteNumber/FavouriteNumber";
import NoSSR from "@/Utils/NoSSR";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="text-2xl">Favourite number!</h1>
      <ConnectButton />
      <NoSSR>
        <FavouriteNumber />
      </NoSSR>
    </main>
  );
}
