document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");

    // header
    var header = document.querySelector(".js__header");

    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");

    // slide
    var threeSlides = document.querySelectorAll(".js__swiperThreeContainer");

    // active
    var activeScrolls = document.querySelectorAll(".js__activeContainer");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // submenu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var menu = subMenu.querySelector(".js__subMenu");
                    var showSubMenu = subMenu.querySelector(".js__showSubMenu");
                    var closeSubMenu =
                        subMenu.querySelector(".js__closeSubMenu");

                    showSubMenu.onclick = function () {
                        menu.classList.add("active");
                        bodyEle.classList.add("overflow-hidden");
                    };
                    closeSubMenu.onclick = function () {
                        menu.classList.remove("active");
                        bodyEle.classList.remove("overflow-hidden");
                    };
                });
            }

            // active
            if (activeScrolls) {
                activeScrolls.forEach((activeScroll) => {
                    var elementList =
                        activeScroll.querySelectorAll(".js__activeElement");
                    elementList.forEach((ele) => {
                        ele.onclick = function () {
                            activeScroll
                                .querySelector(".active.js__activeElement")
                                .classList.remove("active");
                            ele.classList.add("active");
                        };
                    });
                });
            }
        },
        // slider three
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThreeItems");
                // var next = item.querySelector(".swiper-button-next");
                // var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    // navigation: {
                    //     nextEl: next || null,
                    //     prevEl: prev || null,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    },
                });
            });
        },
        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;

            if (header) {
                const isSticky = scrollY > 50;
                if (isSticky !== this.isSticky) {
                    header.classList.toggle("sticky", isSticky);
                    this.isSticky = isSticky;
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // slider three
            this.sliderThreeItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
