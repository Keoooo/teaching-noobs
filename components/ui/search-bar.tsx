"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  const [coin, setCoin] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSearch = () => {
    router.push(`/search/${coin}`);
  };

  return (
    <div className="flex w-full h-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Coin"
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      />
      <Button type="button" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
