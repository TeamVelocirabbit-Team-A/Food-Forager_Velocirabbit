import React from "react";

import useStoreTime from "@/hooks/useStoreTime";

interface RestTimeStatusProps {
  hours: string;
}

const RestTimeStatus: React.FC<RestTimeStatusProps> = ({ hours }) => {

  const { isOpen, minutesLeft } = useStoreTime(hours);

  return (
    <div className="text-xs text-gray-500">
      {!isOpen ? (
        <span>
          <b className="text-red-500">Closed</b> Today
        </span>
      ) : (
        <span>
          <b className="text-emerald-600">Open</b> Today
          {minutesLeft !== null && (
            <>
              <span className="text-gray-500"> • </span>
              <span className="italic text-red-500">
                {`Closing in ${minutesLeft} mins`}
              </span>
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default RestTimeStatus;
