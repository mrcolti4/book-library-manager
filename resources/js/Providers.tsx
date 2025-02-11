import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactNode } from "react";

type props = {
    children: ReactNode;
};

export default function Providers({ children }: props) {
    return <Provider store={store}>{children}</Provider>;
}
