export default function usePerPage() {
    const slidesOnMobile = 2;
    const slidesOnTablet = 8;
    const slidesOnDesktop = 10;

    let perPage;

    switch (true) {
        case window.innerWidth > 1200:
            perPage = slidesOnDesktop;
            break;
        case window.innerWidth > 992:
            perPage = slidesOnTablet;
            break;
        default:
            perPage = slidesOnMobile;
            break;
    }

    return perPage;
}
