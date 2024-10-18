import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useState } from 'react';

export default function CusineDropdrop() {
  const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterrean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const [selectedCuisine, setSelectedCuisine] = useState("Choose a Cuisine");

  // Handler for selecting a cuisine
  const handleSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black max-h-60 overflow-y-auto", // Add max height and enable scrolling
      }}
    >
      <DropdownTrigger>
        <Button
          className="py-2 px-4 h-8 w-full "
          endContent="$"
          size="md"
          variant="faded"
        >
          {selectedCuisine}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Cuisine Options">
        {cuisines.map((cuisine) => (
          <DropdownItem key={cuisine} onClick={() => handleSelect(cuisine)}>
            {cuisine}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
