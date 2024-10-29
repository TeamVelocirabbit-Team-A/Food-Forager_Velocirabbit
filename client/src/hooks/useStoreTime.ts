import { useState, useEffect } from "react";

const useStoreTime = (operationalHours: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minutesLeft, setMinutesLeft] = useState<number | null>(null);

  // Function to parse time in "HH:MMAM/PM" format to Date object
  const parseTime = (time: string) => {
    const [timePart, modifier] = time.split(/(AM|PM)/);
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return new Date(0, 0, 0, hours, minutes);
  };

  useEffect(() => {
    const now = new Date();
    const currentTime = new Date(0, 0, 0, now.getHours(), now.getMinutes());

    // Split operational hours into multiple time ranges
    const timeRanges = operationalHours.split(", ");
    let open = false;
    let minutesLeftUntilClose = null;

    for (const range of timeRanges) {
      const [openTime, closeTime] = range.split(" - ").map(parseTime);

      if (currentTime >= openTime && currentTime <= closeTime) {
        open = true;
        const minutesLeft =
          (closeTime.getTime() - currentTime.getTime()) / 60000;

        if (minutesLeft <= 60) {
          minutesLeftUntilClose = Math.round(minutesLeft);
        }
        break;
      }
    }

    setIsOpen(open);
    setMinutesLeft(minutesLeftUntilClose);
  }, [operationalHours]);

  return { isOpen, minutesLeft };
};

export default useStoreTime;
