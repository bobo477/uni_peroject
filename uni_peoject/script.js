document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Логика за мобилното меню (HAMBURGER) ---
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // --- 2. Логика за Dropdown менюто на тъч скрийн ---
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            }
        });
    }

    // --- 3. Логика за Формата за контакти (ВЪЗСТАНОВЕНА) ---
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Спираме стандартното презареждане на страницата
            event.preventDefault();

            // Взимаме данните
            const firstName = document.getElementById("fname").value;
            const lastName = document.getElementById("lname").value;
            
            // Показваме съобщение
            alert("Благодарим Ви, " + firstName + " " + lastName + "! Вашето съобщение беше изпратено успешно.");
            
            // Изчистваме полетата
            contactForm.reset();
        });
    }

    // --- 4. Логика за скрол анимациите ---
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
});