 
        // Update the footer year
        document.getElementById("year").textContent =
            new Date().getFullYear();

        // Animate sections when they appear on screen
        const revealItems = document.querySelectorAll(".reveal");

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12
            });

            revealItems.forEach(function(item) {
                observer.observe(item);
            });
        } else {
            revealItems.forEach(function(item) {
                item.classList.add("show");
            });
        }

        // Smooth navigation and active link highlighting
        document.querySelectorAll('a[href^="#"]').forEach(function(link) {
            link.addEventListener("click", function(event) {
                const target = document.querySelector(
                    this.getAttribute("href")
                );

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });

        // Highlight the current navigation section
        const sections = document.querySelectorAll(
            "section[id]"
        );

        const navLinks = document.querySelectorAll("nav a");

        if ("IntersectionObserver" in window) {
            const sectionObserver = new IntersectionObserver(
                function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            navLinks.forEach(function(link) {
                                link.classList.toggle(
                                    "active",
                                    link.getAttribute("href") ===
                                    "#" + entry.target.id
                                );
                            });
                        }
                    });
                },
                {
                    rootMargin: "-25% 0px -60% 0px"
                }
            );

            sections.forEach(function(section) {
                sectionObserver.observe(section);
            });
        }

        console.log("Welcome to Asif Zafar's Portfolio!");
    