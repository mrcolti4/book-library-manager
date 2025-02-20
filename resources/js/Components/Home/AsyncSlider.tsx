import { RefObject } from "react";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BookType } from "@/types/Book/Book";
import Book from "./Book";

import "swiper/css";
import "swiper/css/grid";

type props = {
    prevBtn: RefObject<HTMLButtonElement | null>;
    nextBtn: RefObject<HTMLButtonElement | null>;
    setSwiperInstance: Function;
    setCurrentSlideIndex: Function;
    data: Array<BookType> | [];
};

export default function AsyncSlider({
    prevBtn,
    nextBtn,
    setSwiperInstance,
    setCurrentSlideIndex,
    data,
}: props) {
    return (
        <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
            spaceBetween={20}
            modules={[Grid, Navigation]}
            navigation={{
                prevEl: prevBtn.current,
                nextEl: nextBtn.current,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                768: {
                    grid: {
                        rows: 2,
                        fill: "row",
                    },
                    slidesPerView: 4,
                },
                1024: {
                    grid: {
                        rows: 2,
                        fill: "row",
                    },
                    slidesPerView: 5,
                },
            }}
        >
            {data.map((book: BookType) => (
                <SwiperSlide key={book.id}>
                    <Book book={book} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
