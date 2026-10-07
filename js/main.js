/*
    CLM STATIC HOMEPAGE
    No jQuery.
    No WordPress dependencies.
*/


document.addEventListener("DOMContentLoaded", () => {

    /*
        -------------------------------------------------------
        MOBILE NAVIGATION
        -------------------------------------------------------
    */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".main-nav");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /*
            Close the menu after clicking a navigation link.
        */

        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navigation.classList.remove("open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /*
        -------------------------------------------------------
        GALLERY
        -------------------------------------------------------

        Once you've downloaded the CLM images, simply add them
        to this array.

        Example:

        "images/gallery/gallery-01.jpg"

    */

    const galleryImages = [

        /*
        "images/gallery/gallery-01.jpg",
        "images/gallery/gallery-02.jpg",
        "images/gallery/gallery-03.jpg",
        "images/gallery/gallery-04.jpg",
        "images/gallery/gallery-05.jpg",
        "images/gallery/gallery-06.jpg"
        */

    ];


    const gallery =
        document.querySelector("#gallery");


    if (gallery) {

        galleryImages.forEach(
            (imagePath, index) => {

                const image =
                    document.createElement("img");

                image.src =
                    imagePath;

                image.alt =
                    `CLM Construction project ${index + 1}`;

                image.loading =
                    "lazy";

                gallery.appendChild(image);

            }
        );

    }


    /*
        -------------------------------------------------------
        CONTACT FORM
        -------------------------------------------------------

        This does NOT pretend to send email.

        You'll need to connect this form to whatever
        service CLM wants to use.

        Until then, this prevents the browser from trying
        to submit to a nonexistent endpoint.
    */

    const contactForm =
        document.querySelector("#contact-form");

    const formMessage =
        document.querySelector("#form-message");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                formMessage.textContent =
                    "The form is ready to connect to a form/email service.";

            }
        );

    }


    /*
        -------------------------------------------------------
        IMAGE FALLBACK
        -------------------------------------------------------

        If an image hasn't been downloaded yet, replace
        the broken image with a neutral placeholder rather
        than showing the browser's broken-image icon.
    */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-missing"
                    );

                }
            );

        });

});