import { useSelector } from "react-redux";
import { useEffect } from "react";

import { RootState } from "@/store/store";
import HeroLayout from "@/layouts/heroLayout";
import RestCard from "@/components/resturant_components/restCard";

export default function IndexPage() {
  const { searchResults } = useSelector((state: RootState) => state.search);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[new Date().getDay()];

  useEffect(() => {
    console.log("Search Results: ", searchResults);
  }, [searchResults]);

  return (
    <HeroLayout>
      {searchResults.length === 0 ? (
        <div className="container border-2 border-red-500" />
      ) : (
        <div className="container flex flex-row flex-wrap justify-between gap-x-12 gap-y-4 my-8">
          {searchResults.map((result) => (
            <RestCard key={result._id} currentDay={currentDay} info={result} />
          ))}
        </div>
      )}
    </HeroLayout>
  );
}
