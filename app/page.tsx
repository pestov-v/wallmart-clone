"use client";
import Dropdown, { type DropdownItem } from "./components/ui/Dropdown";

export default function Home() {
  const dropdownItems = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const handleSelect = (item: DropdownItem) => {
    console.log("Selected:", item);
  };

  const handleClear = () => {
    console.log("Cleared");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold underline text-red-500">
        lets build a wallmart
      </h1>
      <Dropdown
        list={dropdownItems}
        onSelect={handleSelect}
        onClear={handleClear}
      />
    </main>
  );
}
