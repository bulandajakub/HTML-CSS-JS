import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  placeholder?: string;
};

/**
 * A search input component with a search icon.
 *
 * @summary
 * A single-line text input with a search icon that can be used to search for
 * something.
 *
 * @prop {string} [placeholder] - The placeholder text to show in the input.
 *
 * @example
 * <SearchInput />
 */
export function SearchInput({ placeholder }: Props) {
  return (
    <div className="border rounded-lg flex justify-between items-center">
      <Input
        type="text"
        placeholder={placeholder || "Search..."}
        className="border-none"
      />
      <Button variant="ghost" size="icon">
        <Search />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
}
