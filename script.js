
/* =========================================================
   NITIN PANDEY PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GET HTML ELEMENTS
       ===================================================== */

    const pageLoader =
        document.getElementById("pageLoader");

    const navbar =
        document.querySelector(".navbar");

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const navMenu =
        document.querySelector(".nav-menu");

    const featuredAudio =
        document.getElementById("featuredAudio");


    /* =====================================================
       MUSIC PLAYLIST
       ===================================================== */


    const musicPlaylist = [
        {
            file: "assets/music/Champ.mp3",
            name: "Champ"
        },
        {
            file: "assets/music/Shiv-Lehri.mp3",
            name: "Shiv Lehri"
        },
        {
            file: "assets/music/Krishna hai Vistaar.mp3",
            name: "Krishna Hai Vistaar"
        },
        {
            file: "assets/music/Mahabharat.mp3",
            name: "Mahabharat"
        },
        {
            file: "assets/music/Ramayan Ka Saar.mp3",
            name: "Ramayan Ka Saar"
        },
        {
            file: "assets/music/Mard.mp3",
            name: "Mard"
        },
        {
            file: "assets/music/Madam Ji.mp3",
            name: "Madam Ji"
        },
        {
            file: "assets/music/Ek Raat.mp3",
            name: "Ek Raat"
        },
        {
            file: "assets/music/IK Mulaqaat.mp3",
            name: "IK Mulaqaat"
        },
        {
            file: "assets/music/Kahani Suno 2.0.mp3",
            name: "Kahani Suno 2.0"
        },
        {
            file: "assets/music/Zaroori Tha.mp3",
            name: "Zaroori Tha"
        }
    ];

    let currentSongIndex = 0;



    /* =====================================================
       LOAD DATA FROM config.js
       ===================================================== */

    if (typeof portfolioConfig !== "undefined") {

        /* -------------------------------------------------
           PERSONAL INFORMATION
           ------------------------------------------------- */

        const heroRole =
            document.getElementById("heroRole");

        const heroTagline =
            document.getElementById("heroTagline");

        if (
            heroRole &&
            portfolioConfig.personal?.role
        ) {
            heroRole.textContent =
                portfolioConfig.personal.role;
        }

        if (
            heroTagline &&
            portfolioConfig.personal?.tagline
        ) {
            heroTagline.textContent =
                portfolioConfig.personal.tagline;
        }


        /* -------------------------------------------------
           SOCIAL MEDIA LINKS
           ------------------------------------------------- */

        const socialLinks = {

            instagramLink:
                portfolioConfig.social?.instagram,

            facebookLink:
                portfolioConfig.social?.facebook,

            linkedinLink:
                portfolioConfig.social?.linkedin,

            githubLink:
                portfolioConfig.social?.github,

            replitLink:
                portfolioConfig.social?.replit,

            contactInstagram:
                portfolioConfig.social?.instagram,

            contactFacebook:
                portfolioConfig.social?.facebook,

            contactLinkedin:
                portfolioConfig.social?.linkedin,

            contactGithub:
                portfolioConfig.social?.github
        };

        Object.entries(socialLinks).forEach(
            ([id, url]) => {

                const element =
                    document.getElementById(id);

                if (element && url) {
                    element.href = url;
                }

            }
        );


        /* -------------------------------------------------
           MUSIC DATA
           ------------------------------------------------- */

        const musicTitle =
            document.getElementById("musicTitle");

        const musicSongName =
            document.getElementById("musicSongName");

        const musicArtist =
            document.getElementById("musicArtist");


        if (
            musicTitle &&
            portfolioConfig.music?.title
        ) {
            musicTitle.textContent =
                portfolioConfig.music.title;
        }


        if (
            musicSongName &&
            portfolioConfig.music?.songName
        ) {
            musicSongName.textContent =
                portfolioConfig.music.songName;
        }


        if (
            musicArtist &&
            portfolioConfig.music?.artist
        ) {
            musicArtist.textContent =
                portfolioConfig.music.artist;
        }

    }


    /* =====================================================
       PAGE LOADER
       ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (pageLoader) {
                pageLoader.classList.add("hide");
            }

        }, 600);

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (mobileMenuBtn) {

        mobileMenuBtn.addEventListener(
            "click",
            () => {

                mobileMenuBtn.classList.toggle("open");

                document.body.classList.toggle(
                    "menu-open"
                );

                if (navMenu) {

                    navMenu.classList.toggle("open");

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER NAVIGATION
       ===================================================== */

    if (navMenu) {

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenuBtn?.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                    navMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

    }


    /* =====================================================
       HERO ENTRANCE ANIMATION
       ===================================================== */

    const animatedElements = [

        document.querySelector(".hero-eyebrow"),

        document.querySelector(".hero-title"),

        document.querySelector(".hero-role"),

        document.querySelector(".hero-description"),

        document.querySelector(".hero-actions"),

        document.querySelector(".hero-socials"),

        document.querySelector(".hero-visual")

    ];


    animatedElements.forEach(
        (element, index) => {

            if (!element) return;

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            setTimeout(() => {

                element.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";

                element.style.opacity = "1";

                element.style.transform =
                    "translateY(0)";

            }, 700 + (index * 120));

        }
    );


    /* =====================================================
       EMAILJS CONTACT FORM
       ===================================================== */

    if (typeof emailjs === "undefined") {

        console.error(
            "EmailJS library not loaded."
        );

    } else {

        emailjs.init({
            publicKey: "IdLgrlKH6TOY9bCqr"
        });


        const contactForm =
            document.getElementById("contactForm");

        const contactFormMessage =
            document.getElementById(
                "contactFormMessage"
            );

        const contactSubmit =
            document.getElementById(
                "contactSubmit"
            );


        if (contactForm) {

            contactForm.addEventListener(
                "submit",
                async (event) => {

                    event.preventDefault();
                    event.stopPropagation();


                    /* -------------------------------------
                       GET FORM VALUES
                       ------------------------------------- */

                    const name =
                        document
                            .getElementById(
                                "contactName"
                            )
                            ?.value.trim();

                    const email =
                        document
                            .getElementById(
                                "contactEmail"
                            )
                            ?.value.trim();

                    const subject =
                        document
                            .getElementById(
                                "contactSubject"
                            )
                            ?.value.trim();

                    const message =
                        document
                            .getElementById(
                                "contactMessage"
                            )
                            ?.value.trim();


                    /* -------------------------------------
                       VALIDATION
                       ------------------------------------- */

                    if (
                        !name ||
                        !email ||
                        !subject ||
                        !message
                    ) {

                        if (contactFormMessage) {

                            contactFormMessage.textContent =
                                "Please fill in all fields.";

                        }

                        return;

                    }


                    /* -------------------------------------
                       EMAIL VALIDATION
                       ------------------------------------- */

                    const emailPattern =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                    if (
                        !emailPattern.test(email)
                    ) {

                        if (contactFormMessage) {

                            contactFormMessage.textContent =
                                "Please enter a valid email address.";

                        }

                        return;

                    }


                    /* -------------------------------------
                       DISABLE SUBMIT BUTTON
                       ------------------------------------- */

                    if (contactSubmit) {

                        contactSubmit.disabled = true;

                        const buttonText =
                            contactSubmit.querySelector(
                                "span"
                            );

                        if (buttonText) {

                            buttonText.textContent =
                                "Sending...";

                        }

                    }


                    if (contactFormMessage) {

                        contactFormMessage.textContent =
                            "Sending message...";

                    }


                    /* -------------------------------------
                       SEND MESSAGE THROUGH EMAILJS
                       ------------------------------------- */

                    try {

                        await emailjs.sendForm(
                            "service_bkebqnt",
                            "template_5wn3dfg",
                            contactForm
                        );


                        /* ---------------------------------
                           SUCCESS
                           --------------------------------- */

                        if (contactFormMessage) {

                            contactFormMessage.textContent =
                                "Message sent successfully! I'll get back to you soon.";

                        }

                        contactForm.reset();


                    } catch (error) {

                        /* ---------------------------------
                           ERROR
                           --------------------------------- */

                        console.error(
                            "EmailJS Error:",
                            error
                        );


                        if (contactFormMessage) {

                            contactFormMessage.textContent =
                                "EmailJS Error: " +
                                (
                                    error.text ||
                                    error.message ||
                                    "Unknown error"
                                );

                        }


                    } finally {

                        /* ---------------------------------
                           ENABLE BUTTON AGAIN
                           --------------------------------- */

                        if (contactSubmit) {

                            contactSubmit.disabled =
                                false;

                            const buttonText =
                                contactSubmit.querySelector(
                                    "span"
                                );

                            if (buttonText) {

                                buttonText.textContent =
                                    "Send Message";

                            }

                        }

                    }

                }
            );

        }

    }


    /* =====================================================
       ACTIVE NAVIGATION LINK
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        });

    /* =====================================================
       FEATURED MUSIC
       -----------------------------------------------------
       Playlist + Autoplay + Music Toggle + Volume
       + User Song Selection
       + Show / Hide Playlist
       ===================================================== */

    if (featuredAudio) {

        const musicToggle =
            document.getElementById("musicToggle");

        const musicVolume =
            document.getElementById("musicVolume");

        const musicVolumeValue =
            document.getElementById("musicVolumeValue");

        const playlistContainer =
            document.getElementById("musicPlaylist");

        const playlistHeader =
            playlistContainer?.querySelector(".playlist-header");

        const playlistList =
            document.getElementById("playlistList");


        /* =================================================
           START WITH CHAMP
           ================================================= */

        currentSongIndex = 0;


        /* =================================================
           DEFAULT VOLUME = 100%
           ================================================= */

        featuredAudio.volume = 1;

        if (musicVolume) {
            musicVolume.value = 100;
        }

        if (musicVolumeValue) {
            musicVolumeValue.textContent = "100%";
        }


        /* =================================================
           UPDATE MUSIC TITLE
           ================================================= */

        function updateSongTitle() {

            const musicSongName =
                document.getElementById("musicSongName");

            if (musicSongName) {

                musicSongName.textContent =
                    musicPlaylist[currentSongIndex].name;

            }
        }


        /* =================================================
           LOAD SONG
           ================================================= */

        function loadSong(index, autoPlay = false) {

            if (
                index < 0 ||
                index >= musicPlaylist.length
            ) {
                return;
            }

            currentSongIndex = index;

            featuredAudio.src =
                musicPlaylist[currentSongIndex].file;

            featuredAudio.load();

            updateSongTitle();

            updatePlaylistUI();


            if (autoPlay) {

                featuredAudio.play()
                    .then(() => {

                        updateMusicUI(true);
                        updatePlaylistUI();

                    })
                    .catch(error => {

                        console.log(
                            "Song could not autoplay:",
                            error
                        );

                        updateMusicUI(false);

                    });

            }

        }


        /* =================================================
           UPDATE PLAYLIST UI
           ================================================= */

        function updatePlaylistUI() {

            if (!playlistList) return;

            const buttons =
                playlistList.querySelectorAll(
                    ".playlist-song"
                );

            buttons.forEach(button => {

                const index =
                    Number(
                        button.dataset.songIndex
                    );

                const icon =
                    button.querySelector(
                        ".playlist-play-icon i"
                    );

                button.classList.toggle(
                    "active",
                    index === currentSongIndex
                );


                if (icon) {

                    if (
                        index === currentSongIndex &&
                        !featuredAudio.paused
                    ) {

                        icon.className =
                            "fa-solid fa-volume-high";

                    } else {

                        icon.className =
                            "fa-solid fa-play";

                    }

                }

            });

        }


        /* =================================================
           CREATE PLAYLIST BUTTONS
           ================================================= */

        if (playlistList) {

            playlistList.innerHTML = "";

            musicPlaylist.forEach(
                (song, index) => {

                    const button =
                        document.createElement("button");

                    button.type = "button";

                    button.className =
                        "playlist-song";

                    button.dataset.songIndex =
                        index;


                    button.innerHTML = `
                    <span class="playlist-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="playlist-name">
                        ${song.name}
                    </span>

                    <span class="playlist-play-icon">
                        <i class="fa-solid fa-play"></i>
                    </span>
                `;


                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();

                            loadSong(
                                index,
                                true
                            );

                        }
                    );


                    playlistList.appendChild(
                        button
                    );

                }
            );


            updatePlaylistUI();

        }
        /* =================================================
           PLAYLIST OPEN / CLOSE
           ================================================= */

        const playlistToggle =
            document.getElementById("playlistToggle");

        if (playlistContainer && playlistToggle) {

            playlistToggle.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    const isOpen =
                        playlistContainer.classList.toggle("playlist-open");

                    playlistToggle.setAttribute(
                        "aria-expanded",
                        isOpen ? "true" : "false"
                    );

                }
            );

        }
        /* =================================================
           CLICK OUTSIDE = CLOSE PLAYLIST
           ================================================= */

        document.addEventListener("click", (event) => {

            if (!playlistContainer) return;

            if (
                playlistContainer.classList.contains("playlist-open") &&
                !playlistContainer.contains(event.target)
            ) { 

                playlistContainer.classList.remove("playlist-open");

                if (playlistToggle) {

                    playlistToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            } 

        });

        /* =================================================
           UPDATE MUSIC BUTTON UI
           ================================================= */

        function updateMusicUI(isPlaying) {

            if (!musicToggle) return;

            const icon =
                musicToggle.querySelector("i");

            const text =
                musicToggle.querySelector("span");


            if (isPlaying) {

                document.body.classList.add(
                    "music-playing"
                );

                musicToggle.classList.add(
                    "playing"
                );


                if (icon) {

                    icon.className =
                        "fa-solid fa-volume-high";

                }


                if (text) {

                    text.textContent =
                        "Music On";

                }

            } else {

                document.body.classList.remove(
                    "music-playing"
                );

                musicToggle.classList.remove(
                    "playing"
                );


                if (icon) {

                    icon.className =
                        "fa-solid fa-volume-xmark";

                }


                if (text) {

                    text.textContent =
                        "Play Music";

                }

            }


            updatePlaylistUI();

        }


        /* =================================================
           MUSIC PLAY EVENT
           ================================================= */

        featuredAudio.addEventListener(
            "play",
            () => {

                updateMusicUI(true);

            }
        );


        /* =================================================
           MUSIC PAUSE EVENT
           ================================================= */

        featuredAudio.addEventListener(
            "pause",
            () => {

                updateMusicUI(false);

            }
        );


        /* =================================================
           PLAY NEXT SONG AUTOMATICALLY
           ================================================= */

        featuredAudio.addEventListener(
            "ended",
            () => {

                currentSongIndex++;

                if (
                    currentSongIndex >=
                    musicPlaylist.length
                ) {

                    currentSongIndex = 0;

                }

                loadSong(
                    currentSongIndex,
                    true
                );

            }
        );


        /* =================================================
           TRY AUTOPLAY WHEN WEBSITE LOADS
           ================================================= */

        window.addEventListener(
            "load",
            async () => {

                loadSong(
                    currentSongIndex,
                    false
                );


                try {

                    await featuredAudio.play();

                    updateMusicUI(true);

                } catch (error) {

                    console.log(
                        "Autoplay blocked by browser. User can press Play Music."
                    );

                    updateMusicUI(false);

                }

            }
        );


        /* =================================================
           MUSIC ON / OFF BUTTON
           ================================================= */

        if (musicToggle) {

            musicToggle.addEventListener(
                "click",
                async () => {

                    if (
                        !featuredAudio.paused
                    ) {

                        featuredAudio.pause();

                    } else {

                        try {

                            await featuredAudio.play();

                            updateMusicUI(true);

                        } catch (error) {

                            console.error(
                                "Music could not be played:",
                                error
                            );

                            updateMusicUI(false);

                        }

                    }

                }
            );

        }


        /* =================================================
           VOLUME SLIDER
           ================================================= */

        if (musicVolume) {

            musicVolume.addEventListener(
                "input",
                () => {

                    const volume =
                        Number(
                            musicVolume.value
                        );

                    featuredAudio.volume =
                        volume / 100;


                    if (musicVolumeValue) {

                        musicVolumeValue.textContent =
                            `${volume}%`;

                    }

                }
            );

        }

    }

    /* =====================================================
       PROJECT CARD HOVER / TOUCH EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "project-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });


    /* =====================================================
       REDUCED MOTION ACCESSIBILITY
       ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        prefersReducedMotion.matches
    ) {

        document.documentElement.style.scrollBehavior =
            "auto";

    }

});
