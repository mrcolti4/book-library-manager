import { Select } from "@headlessui/react";
import { ChangeEvent } from "react";

interface Option {
    value: string;
    label: string;
}

export default function FormSelect({
    value,
    name,
    options,
    onChange,
}: {
    value: string;
    name: string;
    options: Option[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
    return (
        <Select
            className="block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white
              focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25
              *:text-black"
            name={name}
            value={value}
            onChange={onChange}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
}
