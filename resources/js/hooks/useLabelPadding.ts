import { useEffect, useRef, useState } from "react";

export default function useLabelPadding(): [number, React.RefObject<HTMLLabelElement|null>] {
    const [padding, setPadding] = useState(0);
    const labelRef = useRef<HTMLLabelElement>(null);
    
    useEffect(() => {
        if (labelRef.current) {
            const labelWidth = labelRef.current.offsetWidth;
            setPadding(labelWidth + 15);
        }
    }, []);

    return [padding, labelRef] as const;
}