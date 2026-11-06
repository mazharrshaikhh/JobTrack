
/* =========================================================
   JOBTRACK PREMIUM JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       1. CINEMATIC JOBTRACK INTRO — 4 SECONDS
       ===================================================== */

    const introScreen = document.getElementById("intro-screen");

    if (introScreen) {

        const introAlreadyPlayed =
            sessionStorage.getItem("jobtrack_intro_played");

        if (introAlreadyPlayed === "yes") {

            introScreen.remove();

        } else {

            const introDuration = 4000;

            setTimeout(function () {

                introScreen.classList.add("intro-hidden");

                sessionStorage.setItem(
                    "jobtrack_intro_played",
                    "yes"
                );

                setTimeout(function () {

                    introScreen.remove();

                }, 750);

            }, introDuration);

        }

    }


    /* =====================================================
       2. THEME TOGGLE
       ===================================================== */

    const themeToggle = document.getElementById("theme-toggle");

    const htmlElement = document.documentElement;

    const savedTheme =
        localStorage.getItem("jobtrack_theme") || "light";

    htmlElement.setAttribute("data-theme", savedTheme);


    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            const currentTheme =
                htmlElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            htmlElement.setAttribute(
                "data-theme",
                newTheme
            );

            localStorage.setItem(
                "jobtrack_theme",
                newTheme
            );

        });

    }


    /* =====================================================
       3. LANGUAGE TRANSLATIONS
       ===================================================== */

    const translations = {

        en: {

            workspace: "WORKSPACE",
            dashboard: "Dashboard",
            applications: "Applications",
            kanban: "Kanban Board",
            interviews: "Interviews",
            analytics: "Analytics",
            settings: "Settings",
            logout: "Logout",
            jobseeker: "Job Seeker",

            welcome_back: "Welcome back!",
            login_subtitle:
                "Continue your journey towards your dream career.",

            email: "Email Address",
            password: "Password",
            remember: "Remember me",
            forgot: "Forgot password?",
            login: "Log In",
            or: "OR",
            no_account: "Don't have an account?",
            create_account: "Create account",

            create_account_title: "Create your account",
            register_subtitle:
                "Start organizing your career journey today.",

            full_name: "Full Name",
            register: "Create Account",
            already_account: "Already have an account?",

            agree_terms:
                "I agree to the Terms of Service and Privacy Policy.",

            privacy: "Privacy",
            terms: "Terms",

            career_platform: "Career management platform",
            your_future: "YOUR FUTURE STARTS HERE",

            showcase_title:
                "Organize your journey.<br><span>Own your future.</span>",

            showcase_desc:
                "Every application is a step forward. Keep your career journey organized, focused and moving.",

            register_showcase_title:
                "Your next chapter<br><span>begins with you.</span>",

            register_showcase_desc:
                "Take control of your job search. Build momentum, stay organized and move closer to your goals.",

            made_for_you:
                "Designed for your next opportunity.",

            total_applications: "Total Applications",
            application_pipeline: "Application Pipeline",
            view_board: "View Board",
            offer_rate: "Offer Rate",
            quick_actions: "Quick Actions",
            recent_applications: "Recent Applications",

            add_application: "Add Application",
            search: "Search applications...",

            company: "Company",
            position: "Position",
            location: "Location",
            status: "Status",
            date: "Applied Date",
            actions: "Actions",
            notes: "Notes",

            save: "Save Changes",
            cancel: "Cancel",
            edit: "Edit",
            delete: "Delete",

            applied: "Applied",
            assessment: "Assessment",
            interview: "Interview",
            offer: "Offer",
            rejected: "Rejected",

            empty_applications: "No applications yet.",
            add_first_application:
                "Add your first application to get started.",

            total: "Total",
            interview_rate: "Interview Rate",
            offer_rate_label: "Offer Rate",

            profile_settings: "Profile Settings",
            update_profile: "Update Profile",

            language: "Language",
            theme: "Theme",
            light_mode: "Light Mode",
            dark_mode: "Dark Mode"

        },


        kn: {

            workspace: "ಕಾರ್ಯಸ್ಥಳ",
            dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            applications: "ಅರ್ಜಿಗಳು",
            kanban: "ಕಾನ್ಬನ್ ಬೋರ್ಡ್",
            interviews: "ಸಂದರ್ಶನಗಳು",
            analytics: "ವಿಶ್ಲೇಷಣೆ",
            settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
            logout: "ಲಾಗ್ ಔಟ್",
            jobseeker: "ಉದ್ಯೋಗ ಹುಡುಕುವವರು",

            welcome_back: "ಮತ್ತೆ ಸ್ವಾಗತ!",

            login_subtitle:
                "ನಿಮ್ಮ ಕನಸಿನ ವೃತ್ತಿಜೀವನದ ಪ್ರಯಾಣ ಮುಂದುವರಿಸಿ.",

            email: "ಇಮೇಲ್ ವಿಳಾಸ",
            password: "ಪಾಸ್‌ವರ್ಡ್",
            remember: "ನನ್ನನ್ನು ನೆನಪಿಡಿ",
            forgot: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
            login: "ಲಾಗಿನ್",
            or: "ಅಥವಾ",
            no_account: "ಖಾತೆ ಇಲ್ಲವೇ?",
            create_account: "ಖಾತೆ ರಚಿಸಿ",

            create_account_title: "ನಿಮ್ಮ ಖಾತೆ ರಚಿಸಿ",

            register_subtitle:
                "ಇಂದೇ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಸಂಘಟಿಸಲು ಪ್ರಾರಂಭಿಸಿ.",

            full_name: "ಪೂರ್ಣ ಹೆಸರು",
            register: "ಖಾತೆ ರಚಿಸಿ",
            already_account: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",

            agree_terms:
                "ನಾನು ಸೇವಾ ನಿಯಮಗಳು ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ಒಪ್ಪುತ್ತೇನೆ.",

            privacy: "ಗೌಪ್ಯತೆ",
            terms: "ನಿಯಮಗಳು",

            career_platform: "ವೃತ್ತಿ ನಿರ್ವಹಣಾ ವೇದಿಕೆ",
            your_future: "ನಿಮ್ಮ ಭವಿಷ್ಯ ಇಲ್ಲಿಂದ ಆರಂಭವಾಗುತ್ತದೆ",

            showcase_title:
                "ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಸಂಘಟಿಸಿ.<br><span>ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಿ.</span>",

            showcase_desc:
                "ಪ್ರತಿಯೊಂದು ಅರ್ಜಿಯೂ ಒಂದು ಹೆಜ್ಜೆ ಮುಂದಕ್ಕೆ. ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಸಂಘಟಿಸಿ ಮತ್ತು ಗುರಿಯತ್ತ ಸಾಗಿರಿ.",

            register_showcase_title:
                "ನಿಮ್ಮ ಹೊಸ ಅಧ್ಯಾಯ<br><span>ನಿಮ್ಮಿಂದಲೇ ಆರಂಭವಾಗುತ್ತದೆ.</span>",

            register_showcase_desc:
                "ನಿಮ್ಮ ಉದ್ಯೋಗ ಹುಡುಕಾಟದ ನಿಯಂತ್ರಣ ತೆಗೆದುಕೊಳ್ಳಿ. ಸಂಘಟಿತರಾಗಿ ಮತ್ತು ನಿಮ್ಮ ಗುರಿಗಳತ್ತ ಸಾಗಿರಿ.",

            made_for_you:
                "ನಿಮ್ಮ ಮುಂದಿನ ಅವಕಾಶಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",

            total_applications: "ಒಟ್ಟು ಅರ್ಜಿಗಳು",
            application_pipeline: "ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ",
            view_board: "ಬೋರ್ಡ್ ವೀಕ್ಷಿಸಿ",
            offer_rate: "ಆಫರ್ ಪ್ರಮಾಣ",
            quick_actions: "ತ್ವರಿತ ಕ್ರಮಗಳು",
            recent_applications: "ಇತ್ತೀಚಿನ ಅರ್ಜಿಗಳು",

            add_application: "ಅರ್ಜಿ ಸೇರಿಸಿ",
            search: "ಅರ್ಜಿಗಳನ್ನು ಹುಡುಕಿ...",

            company: "ಕಂಪನಿ",
            position: "ಹುದ್ದೆ",
            location: "ಸ್ಥಳ",
            status: "ಸ್ಥಿತಿ",
            date: "ಅರ್ಜಿ ದಿನಾಂಕ",
            actions: "ಕ್ರಮಗಳು",
            notes: "ಟಿಪ್ಪಣಿಗಳು",

            save: "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
            cancel: "ರದ್ದುಮಾಡಿ",
            edit: "ಸಂಪಾದಿಸಿ",
            delete: "ಅಳಿಸಿ",

            applied: "ಅರ್ಜಿ ಸಲ್ಲಿಸಲಾಗಿದೆ",
            assessment: "ಮೌಲ್ಯಮಾಪನ",
            interview: "ಸಂದರ್ಶನ",
            offer: "ಆಫರ್",
            rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",

            empty_applications: "ಇನ್ನೂ ಯಾವುದೇ ಅರ್ಜಿಗಳಿಲ್ಲ.",

            add_first_application:
                "ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಮೊದಲ ಅರ್ಜಿಯನ್ನು ಸೇರಿಸಿ.",

            total: "ಒಟ್ಟು",
            interview_rate: "ಸಂದರ್ಶನ ಪ್ರಮಾಣ",
            offer_rate_label: "ಆಫರ್ ಪ್ರಮಾಣ",

            profile_settings: "ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
            update_profile: "ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ",

            language: "ಭಾಷೆ",
            theme: "ಥೀಮ್",
            light_mode: "ಲೈಟ್ ಮೋಡ್",
            dark_mode: "ಡಾರ್ಕ್ ಮೋಡ್"

        }

    };


    /* APPLY LANGUAGE */

    function applyLanguage(language) {

        const dictionary =
            translations[language] || translations.en;

        document.querySelectorAll("[data-i18n]").forEach(
            function (element) {

                const key =
                    element.getAttribute("data-i18n");

                if (dictionary[key]) {

                    element.innerHTML = dictionary[key];

                }

            }
        );


        const englishToggle =
            document.getElementById("lang-en");

        const kannadaToggle =
            document.getElementById("lang-kn");


        if (englishToggle && kannadaToggle) {

            englishToggle.classList.toggle(
                "active",
                language === "en"
            );

            kannadaToggle.classList.toggle(
                "active",
                language === "kn"
            );

        }


        document.documentElement.setAttribute(
            "lang",
            language === "kn" ? "kn" : "en"
        );

        localStorage.setItem(
            "jobtrack_language",
            language
        );

    }


    /* LOAD SAVED LANGUAGE */

    const savedLanguage =
        localStorage.getItem("jobtrack_language") || "en";

    applyLanguage(savedLanguage);


    /* LANGUAGE BUTTON */

    const languageToggle =
        document.getElementById("language-toggle");


    if (languageToggle) {

        languageToggle.addEventListener("click", function () {

            const currentLanguage =
                localStorage.getItem("jobtrack_language") || "en";

            const newLanguage =
                currentLanguage === "en" ? "kn" : "en";

            applyLanguage(newLanguage);

        });

    }


    /* =====================================================
       4. PASSWORD SHOW / HIDE
       ===================================================== */

    document.querySelectorAll(".password-toggle").forEach(
        function (button) {

            button.addEventListener("click", function () {

                const wrapper =
                    button.closest(".input-wrapper");

                if (!wrapper) return;

                const input =
                    wrapper.querySelector("input");

                if (!input) return;

                const isPassword =
                    input.type === "password";

                input.type =
                    isPassword ? "text" : "password";

                button.innerHTML = isPassword
                    ? '<i data-lucide="eye-off"></i>'
                    : '<i data-lucide="eye"></i>';

                if (typeof lucide !== "undefined") {
                    lucide.createIcons();
                }

            });

        }
    );


    /* =====================================================
       5. BUTTON RIPPLE
       ===================================================== */

    document.addEventListener("click", function (event) {

        const button =
            event.target.closest(".btn, .auth-submit-btn");

        if (!button) return;

        const ripple =
            document.createElement("span");

        ripple.classList.add("button-ripple");

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            (event.clientX - rect.left - 50) + "px";

        ripple.style.top =
            (event.clientY - rect.top - 50) + "px";

        button.appendChild(ripple);

        setTimeout(function () {

            ripple.remove();

        }, 600);

    });


    /* =====================================================
       6. FORM SUBMIT ANIMATION
       ===================================================== */

    document.querySelectorAll("form").forEach(
        function (form) {

            form.addEventListener("submit", function () {

                const submitButton =
                    form.querySelector('button[type="submit"]');

                if (submitButton && !submitButton.disabled) {

                    submitButton.style.opacity = "0.75";

                    submitButton.style.transform =
                        "scale(0.98)";

                }

            });

        }
    );


    /* =====================================================
       7. AUTO DISMISS FLASH MESSAGES
       ===================================================== */

    document.querySelectorAll(".flash-message").forEach(
        function (message) {

            setTimeout(function () {

                message.style.transition =
                    "opacity 400ms ease, transform 400ms ease";

                message.style.opacity = "0";

                message.style.transform =
                    "translateY(-8px)";

                setTimeout(function () {

                    message.remove();

                }, 400);

            }, 5000);

        }
    );


    /* =====================================================
       8. DASHBOARD STAT NUMBER ANIMATION
       ===================================================== */

    document.querySelectorAll(".stat-value[data-count]").forEach(
        function (element) {

            const target =
                Number(element.dataset.count);

            if (isNaN(target)) return;

            let current = 0;

            const duration = 900;

            const startTime =
                performance.now();


            function animateNumber(time) {

                const progress =
                    Math.min(
                        (time - startTime) / duration,
                        1
                    );

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(target * eased);

                element.textContent = current;

                if (progress < 1) {

                    requestAnimationFrame(animateNumber);

                } else {

                    element.textContent = target;

                }

            }


            requestAnimationFrame(animateNumber);

        }
    );


    /* =====================================================
       9. PROGRESS BAR ANIMATION
       ===================================================== */

    document.querySelectorAll("[data-progress]").forEach(
        function (element) {

            const progress =
                Number(element.dataset.progress);

            if (isNaN(progress)) return;

            const safeProgress =
                Math.min(Math.max(progress, 0), 100);

            setTimeout(function () {

                element.style.width =
                    safeProgress + "%";

            }, 250);

        }
    );


    /* =====================================================
       10. STAGGERED CARD ANIMATION
       ===================================================== */

    const cards = document.querySelectorAll(
        ".stat-card, .kanban-card, .interview-card, .analytics-card"
    );


    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(15px)";

        setTimeout(function () {

            card.style.transition =
                "opacity 450ms ease, transform 450ms cubic-bezier(0.16, 1, 0.3, 1)";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 70 * index);

    });


    /* =====================================================
       11. SMOOTH PAGE TRANSITIONS
       ===================================================== */

    document.querySelectorAll("a[href]").forEach(
        function (link) {

            link.addEventListener("click", function (event) {

                const href = link.getAttribute("href");

                if (!href) return;

                if (
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey ||
                    event.altKey ||
                    event.button !== 0
                ) {
                    return;
                }

                if (
                    link.target === "_blank" ||
                    link.hasAttribute("download")
                ) {
                    return;
                }

                if (
                    href.startsWith("#") ||
                    href.startsWith("javascript:")
                ) {
                    return;
                }

                let destination;

                try {

                    destination =
                        new URL(href, window.location.href);

                } catch (error) {

                    return;

                }

                if (
                    destination.origin !== window.location.origin
                ) {
                    return;
                }

                if (
                    destination.pathname === window.location.pathname &&
                    destination.search === window.location.search
                ) {
                    return;
                }

                event.preventDefault();

                document.body.classList.add(
                    "page-transition-exit"
                );

                setTimeout(function () {

                    window.location.href =
                        destination.href;

                }, 220);

            });

        }
    );


    /* =====================================================
       12. ICON INITIALIZATION
       ===================================================== */

    

    function initializeJobTrackIcons() {
    const rules = [
        [/interview/i, "calendar-check"],
        [/offer/i, "trophy"],
        [/reject/i, "circle-x"],
        [/assessment/i, "clipboard-check"],
        [/kanban|board/i, "columns-3"],
        [/analytics|insight/i, "chart-no-axes-combined"],
        [/settings|preferences/i, "settings"],
        [/salary/i, "wallet"],
        [/location/i, "map-pin"],
        [/notes/i, "notebook-pen"],
        [/add job|add application/i, "plus-circle"],
        [/application|applied/i, "briefcase-business"],
        [/profile|personal/i, "user-round"],
        [/account/i, "shield-check"],
        [/search/i, "search"]
    ];

    document.querySelectorAll(
        ".stat-icon, .stat-card-icon, .quick-action-icon, " +
        ".empty-icon, .feature-icon, .card-icon, .icon-box"
    ).forEach(function (box) {
        if (box.querySelector("svg, [data-lucide]")) return;

        const text = (
            box.closest("a, button, .stat-card, .quick-action, .empty-state, .card")
                ?.innerText ||
            box.parentElement?.innerText ||
            ""
        ).toLowerCase();

        const match = rules.find(rule => rule[0].test(text));
        const icon = document.createElement("i");

        icon.setAttribute("data-lucide", match ? match[1] : "briefcase-business");
        box.appendChild(icon);
    });

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

initializeJobTrackIcons();

});
