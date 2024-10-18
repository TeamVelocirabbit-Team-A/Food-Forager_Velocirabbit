import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

import Crossaint from "../../assets/monika-grabkowska-eAsck4oAguM-unsplash.png";
import Pancakes from "../../assets/monika-grabkowska-P1aohbiT-EY-unsplash.png";
import Coffee from "../../assets/monika-grabkowska-oMIWD_Ob0oA-unsplash.png";

import CusineDropdown from "./cusine_dropdown";

const HeroSearch = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-center bg-slate-400 ">
      <div className="flex flex-col md:flex-col items-center gap-6 px-16 sm:py-4 lg:pl-56">
        <CusineDropdown />
        <Input
          className="w-full md:w-auto"
          endContent="mi"
          label="Distance"
          placeholder='e.g "10"'
          type="number"
        />
        <Input
          className="w-full md:w-auto"
          endContent="$"
          label="Budget"
          placeholder='e.g "30"'
          type="number"
        />
        <Button className="w-full bg-amber-500 font-semibold text-medium text-slate-800 tracking-wide">
          Search
        </Button>
      </div>
      <div className="hidden md:flex flex-row  mt-4 md:mt-0">
        <img
          alt="Coffee"
          className="h-24 md:h-72"
          height="96"
          loading="eager"
          src={Coffee}
        />
        <img
          alt="Crossaint"
          className="h-24 md:h-72"
          height="96"
          loading="eager"
          src={Crossaint}
        />
        <img
          alt="Pancakes"
          className="h-24 md:h-72"
          height="96"
          loading="eager"
          src={Pancakes}
        />
      </div>
    </div>
  );
};

export default HeroSearch;
