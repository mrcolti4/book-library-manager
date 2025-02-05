import InputLabel from "./InputLabel";

export default function InputWrapper({ children, labelValue }) {
    return (
        <div className="relative">
            <InputLabel
                className="absolute left-3 text-dark-700 top-1/2 -translate-y-1/2"
                value={labelValue}
            />
            {children}
        </div>
    );
}
