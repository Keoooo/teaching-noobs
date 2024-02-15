import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//TODO: next js router.push next/navigations

export function InputWithButton() {
  const [coin, setCoin] = useState("");
  // const navigate = useNavigate(); // useHistory for React Router v5

  const handleSearch = () => {
    // Redirect to the dynamic page, assuming the path is `/search/:coin`
    // navigate(`/search/${coin}`);
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
