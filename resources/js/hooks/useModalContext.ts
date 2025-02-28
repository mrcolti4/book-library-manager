import { ModalContext } from "@/Layouts/AuthenticatedLayout";
import ModalContextProps from "@/types/ModalContext";
import { useContext } from "react";

export const useModalContext = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (null === context) {
        throw new Error("Context cannot be null");
    }

    return context;
};
