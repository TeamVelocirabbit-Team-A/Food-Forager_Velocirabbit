import { Card, CardBody, Image } from "@nextui-org/react";

import { Logo } from "../icons";

import RestTimeStatus from "./restTimeStatus";

interface RestCardProps {
  info: any;
  currentDay: string;
}

const RestCard: React.FC<RestCardProps> = ({ info, currentDay }) => {
  const distanceOneDecimal = `${info.miles.toFixed(1)} mi.`;
  const restName =
    info.name.length > 13 ? info.name.slice(0, 13) + "..." : info.name;
  const cityName =
    info.address.city.length > 17
      ? info.address.city.slice(0, 17) + "..."
      : info.address.city;
  const dollarRepeats = "$".repeat(info.dollar_signs);
  const operationalHours = info.local_hours.operational[currentDay];
  const hasLogoPhoto = info.logo_photos.length > 0 ? true : false;

  return (
    <Card
      className="w-[175] h-72 flex flex-col justify-center content-center bg-opacity-0"
      shadow="none"
    >
      {hasLogoPhoto ? (
        <Image
          alt="Image"
          className="object-cover object-center"
          height={175}
          src={info.logo_photos[0]}
          width={175}
        />
      ) : (
        <div className="flex items-center justify-center h-[175px] w-[175px] bg-gray-200 rounded-xl">
          <Logo className="text-gray-400" size={120} />
        </div>
      )}
      <CardBody className="mx-0 px-0">
        <div className="flex justify-between items-baseline">
          <b>{restName}</b>
          <span className="text-xs text-gray-600">{distanceOneDecimal}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500">{cityName}</span>
          {info.dollar_signs > 0 && (
            <span className="text-xs text-gray-500">
              {` • ${dollarRepeats}`}
            </span>
          )}
        </div>
        <RestTimeStatus hours={operationalHours} />
      </CardBody>
    </Card>
  );
};

export default RestCard;
