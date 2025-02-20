import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { getAllBooks } from "@/redux/books/actions";
import { useAppDispatch } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";

import Title from "../Title";
import SliderButton from "./SliderButton";
import AsyncSlider from "./AsyncSlider";
import { selectBooks, selectNextCursor } from "@/redux/books/selectors";
import { useSelector } from "react-redux";

const SLIDES_PER_PAGINATION = 10;
const SLIDE_TO_MOBILE = 2;
const SLIDE_TO_DESKTOP = 10;
let slidesInSlider = 0;

switch (true) {
    case window.innerWidth >= 1200:
        slidesInSlider = 10;
        break;
    case window.innerWidth >= 992:
        slidesInSlider = 8;
        break;
    case window.innerWidth >= 768:
        slidesInSlider = 2;
        break;
}

export default function SliderSection() {
    const dispatch = useAppDispatch();

    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
        null,
    );

    const nextCursor = useSelector(selectNextCursor);
    const books = useSelector(selectBooks);

    const handlePrevButton = () => {
        if (currentPage === 1) {
            return;
        }
        swiperInstance?.slideTo(currentSlideIndex - slidesInSlider);
        setCurrentPage(currentPage - 1);
    };

    const handleNextButton = async () => {
        swiperInstance?.slideTo(currentSlideIndex + slidesInSlider);

        setCurrentPage(currentPage + 1);
        if (currentPage === books.length / 10 && null !== nextCursor) {
            await dispatch(getAllBooks(nextCursor));
            swiperInstance?.navigation.update();
            swiperInstance?.slideTo(currentSlideIndex + slidesInSlider);
        }
    };

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <Title>Recommended</Title>
                <div className="flex gap-2 items-center justify-center">
                    <SliderButton onClick={handlePrevButton} ref={prevBtn}>
                        <Icon
                            icon="material-symbols:chevron-left-rounded"
                            width="30"
                            height="30"
                        />
                    </SliderButton>
                    <SliderButton onClick={handleNextButton} ref={nextBtn}>
                        <Icon
                            icon="material-symbols:chevron-right-rounded"
                            width="30"
                            height="30"
                        />
                    </SliderButton>
                </div>
            </div>
            <AsyncSlider
                prevBtn={prevBtn}
                nextBtn={nextBtn}
                setSwiperInstance={setSwiperInstance}
                setCurrentSlideIndex={setCurrentSlideIndex}
                data={books}
            />
        </>
    );
}
