"use client";

import { useSimpleStorageRetrieve, useSimpleStorageStore } from "@/generated";
import { useState } from "react";
import { useAccount } from "wagmi";

const parseBigInt = (value: string) => {
  try {
    return BigInt(value);
  } catch (e) {
    return null;
  }
};

export const FavouriteNumber = () => {
  const { data, isLoading } = useSimpleStorageRetrieve({ watch: true });
  const [favouriteNumber, setFavouriteNumber] = useState("");

  const { write, isLoading: isStoreWriteLoading } = useSimpleStorageStore();

  const bigIntValue = parseBigInt(favouriteNumber);
  const disabled = isStoreWriteLoading || isLoading || !bigIntValue;

  const { isConnected } = useAccount();

  if (!isConnected) return null;

  return (
    <div className="flex flex-col gap-4 items-center">
      <p>
        Current favourite number is:{" "}
        {isLoading ? (
          "loading"
        ) : (
          <span className="font-extrabold">{data?.toString()}</span>
        )}
      </p>

      <input
        type="number"
        onChange={(e) => setFavouriteNumber(e.target.value)}
        value={favouriteNumber}
        placeholder="Enter your favourite number"
        className="w-64 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />

      <button
        disabled={disabled}
        onClick={() => {
          bigIntValue && write({ args: [bigIntValue] });
          setFavouriteNumber("");
        }}
        className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg disabled:opacity-50 disabled:hover:bg-indigo-600"
      >
        {isStoreWriteLoading ? "Submitting..." : "Submit favourite number"}
      </button>
    </div>
  );
};
