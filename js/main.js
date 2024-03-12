document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");

    // header
    var headers = document.querySelectorAll(".js__header");
    const boxes = document.querySelectorAll(".js__box");
    // const colors = ["rgba(0,0,0,0.72)", "rgba(255,255,255,0.72)"];
    const colors = ["blackActive", "whiteActive"];

    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");

    // slide
    var threeSlides = document.querySelectorAll(".js__swiperThreeContainer");

    // active
    var activeScrolls = document.querySelectorAll(".js__activeContainer");

    // range
    var rangeContainers = document.querySelectorAll(".js__rangeContainer");

    // check show commit
    var checkShowCommitContainer = document.querySelector(
        ".js__checkShowCommitContainer"
    );

    // check input
    // var checkedInputs = document.querySelectorAll(".checkbox-input");

    // change active
    var basicActives = document.querySelectorAll(".js__basicActive");
    var advancedActives = document.querySelectorAll(".js__advancedActive");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // submenu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var menu = document.querySelector(".js__subMenu");
                    var showSubMenu =
                        document.querySelector(".js__showSubMenu");
                    var closeSubMenu =
                        document.querySelector(".js__closeSubMenu");

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

                            if (ele.closest(".js__subMenu")) {
                                ele.closest(".js__subMenu").classList.remove(
                                    "active"
                                );
                                bodyEle.classList.remove("overflow-hidden");
                            }
                        };
                    });
                });
            }

            // range
            if (rangeContainers) {
                rangeContainers.forEach((rangeContainer) => {
                    var rangeLine =
                        rangeContainer.querySelector(".js__rangeLine");
                    var rangeBullet =
                        rangeContainer.querySelector(".js__rangeBullet");

                    var rangeSlide =
                        rangeContainer.querySelector(".js__rangeSlide");
                    var rangePopup =
                        rangeContainer.querySelector(".js__rangePopup");

                    if (rangeSlide != null) {
                        rangeSlide.onclick = function () {
                            rangePopup.classList.toggle("active");
                        };
                    }

                    if (rangeLine != null) {
                        rangeLine.addEventListener(
                            "input",
                            showSliderValue,
                            false
                        );
                    }

                    function showSliderValue() {
                        rangeBullet.innerHTML = rangeLine.value;
                    }
                });
            }

            // check show commit
            if (checkShowCommitContainer) {
                var checkShowCommit = checkShowCommitContainer.querySelector(
                    ".js__checkShowCommit"
                );
                var showCommit =
                    checkShowCommitContainer.querySelector(".js__showCommit");

                checkShowCommit.onclick = function (e) {
                    if (this.checked) {
                        showCommit.style.display = "block";
                    } else {
                        showCommit.style.display = "none";
                    }
                };
            }

            // checked input
            // if (checkedInputs) {
            //     checkedInputs.forEach((checkedInput) => {
            //         if (checkedInput.checked) {
            //             checkedInput
            //                 .closest(".checked-parent")
            //                 .classList.add("checked");
            //         } else {
            //             checkedInput
            //                 .closest(".checked-parent")
            //                 .classList.remove("checked");
            //         }
            //         checkedInput.onclick = function (e) {
            //             this.closest(".checked-parent").classList.toggle(
            //                 "checked"
            //             );
            //             if (checkShowCommitContainer) {
            //                 var showCommit =
            //                     checkShowCommitContainer.querySelector(
            //                         ".js__showCommit"
            //                     );

            //                 if (this.checked) {
            //                     showCommit.style.display = "block";
            //                 } else {
            //                     showCommit.style.display = "none";
            //                 }
            //             }
            //         };
            //     });
            // }

            // change active
            if (basicActives && advancedActives) {
                basicActives.forEach((basicActive) => {
                    basicActive.onclick = function () {
                        advancedActives.forEach((advancedActive) => {
                            advancedActive.classList.remove("active");
                        });
                        basicActives.forEach((ba) => {
                            ba.classList.add("active");
                        });
                    };
                });

                advancedActives.forEach((advancedActive) => {
                    advancedActive.onclick = function () {
                        basicActives.forEach((basicActive) => {
                            basicActive.classList.remove("active");
                        });
                        advancedActives.forEach((aa) => {
                            aa.classList.add("active");
                        });
                    };
                });
            }
        },
        // slider three
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperThreeItems");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
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

            let currentColor = null;

            headers.forEach((header) => {
                boxes.forEach(function (box, index) {
                    const boxTop = box.getBoundingClientRect().top;
                    if (boxTop <= header.clientHeight) {
                        currentColor = colors[index % 2];
                    }
                });

                if (currentColor) {
                    header.classList.remove("blackActive", "whiteActive");
                    header.classList.add(currentColor);
                }
            });
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
