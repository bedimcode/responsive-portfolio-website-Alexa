export const ScrollTop = () => {
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');

        if (window.scrollY >= 200) scrollUp?.classList.add('show-scroll');
        else scrollUp?.classList.remove('show-scroll');
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.addEventListener('scroll', scrollUp);

    return (
        <button className="scrollup" id="scroll-up" onClick={topFunction}>
            <i className="uil uil-arrow-up scroll__icon"></i>
        </button>
    )
}