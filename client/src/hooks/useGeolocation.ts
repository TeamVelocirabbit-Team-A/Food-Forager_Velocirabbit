import { useDispatch } from "react-redux";

import { setLatitude, setLongitude } from "@/store/searchSlice";
import { AppDispatch } from "@/store/store";

const useGeolocation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchGeolocation = () => {
    return new Promise<void>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Geolocation obtained:");
            dispatch(setLatitude(position.coords.latitude));
            dispatch(setLongitude(position.coords.longitude));
            resolve();
          },
          (error) => {
            console.error("Error obtaining geolocation:", error);
            reject(error);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };

  return fetchGeolocation;
};

export default useGeolocation;
