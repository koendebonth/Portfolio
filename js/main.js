// Functie om de leeftijd te berekenen op basis van de geboortedatum
function berekenLeeftijd(geboortedatum) {
    const vandaag = new Date();
    const geboorteDatum = new Date(geboortedatum);
    let leeftijd = vandaag.getFullYear() - geboorteDatum.getFullYear();
    const maand = vandaag.getMonth() - geboorteDatum.getMonth();
    if (maand < 0 || (maand === 0 && vandaag.getDate() < geboorteDatum.getDate())) {
        leeftijd--;
    }
    return leeftijd;
}

// Event listener die wacht tot de DOM volledig is geladen
document.addEventListener("DOMContentLoaded", function() {
    // Leeftijd berekenen
    const geboortedatum = "2002-03-03";
    const leeftijdElement = document.getElementById("leeftijd");
    if (leeftijdElement) {
        leeftijdElement.textContent = berekenLeeftijd(geboortedatum);
    }

    // Hamburger menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
        });

        // Sluit menu bij klikken op link
        const navLinks = nav.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                menuToggle.classList.remove("active");
                nav.classList.remove("active");
            });
        });
    }

    // Scroll progress indicator
    const scrollProgress = document.getElementById("scrollProgress");
    if (scrollProgress) {
        window.addEventListener("scroll", function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + "%";
        });
    }

    // Header scroll effect
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add("visible");
            } else {
                scrollToTopBtn.classList.remove("visible");
            }
        });

        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Animated progress bars bij scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: "0px"
    };

    const progressBars = document.querySelectorAll(".progress-bar");
    
    const animateProgressBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = "0%";
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
                observer.unobserve(progressBar);
            }
        });
    };

    const observer = new IntersectionObserver(animateProgressBars, observerOptions);
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll("section");
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
