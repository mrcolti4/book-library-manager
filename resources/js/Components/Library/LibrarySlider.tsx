import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BookInLibrary } from "@/types/Library/Library";

import "swiper/css";
import "swiper/css/grid";

import Book from "../Home/Book";

type props = {
    setSwiperInstance: Function;
    setCurrentSlideIndex: Function;
    data: Array<BookInLibrary> | [];
};

export default function LibrarySlider({
    setSwiperInstance,
    setCurrentSlideIndex,
    data,
}: props) {
    return (
        <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
            spaceBetween={20}
            modules={[Grid]}
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
            {data.map((book) => (
                <SwiperSlide key={book.id}>
                    <Book book={book.book} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
