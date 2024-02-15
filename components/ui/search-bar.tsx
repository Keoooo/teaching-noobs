import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  //TODO: link to dynamic page
  return (
    <div className="flex w-full h-full max-w-sm items-center space-x-2">
      <Input type="coin" placeholder="Coin" />
      <Button type="submit">Search</Button>
    </div>
  );
}
