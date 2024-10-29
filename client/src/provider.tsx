import { NextUIProvider } from "@nextui-org/system";
import { useNavigate } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <ReduxProvider store={store}>
      <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
    </ReduxProvider>
  );
}
