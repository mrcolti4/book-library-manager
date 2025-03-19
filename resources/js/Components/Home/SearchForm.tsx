import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import { motion } from "motion/react";

import OutlineButton from "../OutlineButton";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import useLabelPadding from "@/hooks/useLabelPadding";

type FormState = {
    search: string;
};

export default function SearchForm() {
    const [padding, labelRef] = useLabelPadding();

    const { data, setData, get, processing, reset } = useForm<FormState>({
        search: "",
    });

    const handleSubmitSearch = (e: FormEvent) => {
        e.preventDefault();

        get(route("home"), {
            preserveState: true,
        });
    };

    const handleClearSearch = () => {
        reset("search");
        router.visit(window.location.pathname, {
            preserveState: true,
        });
    };

    useEffect(() => {
        const searchParam = route().queryParams.search?.toString();
        if (!searchParam) return;
        setData("search", searchParam);
    }, []);

    return (
        <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
                duration: 0.3,
            }}
            className="flex flex-col gap-2 md:w-1/2 lg:w-auto"
            onSubmit={handleSubmitSearch}
        >
            <h3 className="text-sm text-white">Filters: </h3>
            <div>
                <div className="relative">
                    <InputLabel
                        className="absolute -translate-y-1/2 left-3 text-dark-700 top-1/2"
                        value="Search: "
                        ref={labelRef}
                    />
                    <TextInput
                        id="search"
                        name="search"
                        value={data.search}
                        type="text"
                        className="block w-full mt-1"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setData("search", e.target.value)
                        }
                        required
                        style={{
                            paddingLeft: `${padding}px`,
                        }}
                    />
                    <div className="absolute flex items-center justify-center gap-3 -translate-y-1/2 right-3 top-1/2">
                        {data.search && (
                            <button type="button" onClick={handleClearSearch}>
                                <Icon
                                    icon="pajamas:close"
                                    color="white"
                                    width="20"
                                    height="20"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <OutlineButton
                className="py-3 px-[29px] md:px-7 rounded-[30px] md:py-4 md:leading-[18px] max-sm:justify-center mt-4 w-[130px] capitalize"
                disabled={processing}
            >
                To apply
            </OutlineButton>
        </motion.form>
    );
}
