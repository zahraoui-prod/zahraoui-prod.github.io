/* ZAHRAOUI PROD - Shared JavaScript
   Multi-Page Architecture
*/

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarLinks = document.querySelector('.navbar-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarLinks.classList.remove('active');
        });
    });

    // Set active link based on current page
    setActiveNavLink();

    // تشغيل وظيفة تحديث صورة الفنان إذا كنا في صفحة التفاصيل
    updateArtistImage();

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// وظيفة تحديث صورة الفنان ديناميكياً
function updateArtistImage() {
    const urlParams = new URLSearchParams(window.location.search);
    const artistId = urlParams.get('id');
    
    // بيانات الفنانين مع روابطهم
    const artistsData = {
        "1": {
            image: "images/artists/mostafa.jpg",
            facebook: "https://facebook.com/mostafa",
            instagram: "https://instagram.com/mostafa",
            tiktok: "https://tiktok.com/@mostafa",
            youtube: "https://youtube.com/mostafa",
            linktree: "https://linktr.ee/mostafa-works"
        },
        "8": {
            image: "images/artists/ibrahim.jpg",
            facebook: "https://facebook.com/ibrahim",
            instagram: "https://instagram.com/ibrahim",
            tiktok: "https://tiktok.com/@ibrahim",
            youtube: "https://youtube.com/ibrahim",
            linktree: "https://linktr.ee/ZAHRAOUIPROD"
        }
        // أضف البقية هنا...
    };

    const artist = artistsData[artistId];
    if (artist) {
        // تحديث الصورة
        const imgElement = document.getElementById('artist-main-img');
        if (imgElement) imgElement.src = artist.image;

        // تحديث الروابط
        if(artist.facebook) document.getElementById('link-facebook').href = artist.facebook;
        if(artist.instagram) document.getElementById('link-instagram').href = artist.instagram;
        if(artist.tiktok) document.getElementById('link-tiktok').href = artist.tiktok;
        if(artist.youtube) document.getElementById('link-youtube').href = artist.youtube;
        if(artist.linktree) document.getElementById('link-works').href = artist.linktree;
    }
}

    const imgElement = document.getElementById('artist-main-img');
    const fallbackIcon = document.getElementById('fallback-icon');

    // إذا وجدنا العنصر والـ ID، نقوم بتحديث الصورة
    if (imgElement && artistId && artistImages[artistId]) {
        imgElement.src = artistImages[artistId];
        imgElement.onload = function() {
            imgElement.style.display = 'block';
            if (fallbackIcon) fallbackIcon.style.display = 'none';
        };
        // في حالة وجود خطأ في تحميل الصورة (مثلاً الاسم خطأ) يظهر الميكروفون
        imgElement.onerror = function() {
            imgElement.style.display = 'none';
            if (fallbackIcon) fallbackIcon.style.display = 'block';
        };
    }
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && subject && message) {
        const submitBtn = document.querySelector('.contact-form button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'تم الإرسال!';
        submitBtn.disabled = true;

        setTimeout(() => {
            document.querySelector('.contact-form').reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);

        console.log('Form submitted:', { name, email, subject, message });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
