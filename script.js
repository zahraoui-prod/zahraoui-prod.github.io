// ================= HAMBURGER MENU ================= 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند الضغط على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ================= SMOOTH SCROLLING ================= 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================= NAVBAR SCROLL EFFECT ================= 

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.88)';
    }
});

// ================= INTERSECTION OBSERVER ANIMATION ================= 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة جميع العناصر القابلة للحركة
document.querySelectorAll('.service-card, .artist-card, .stat-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ================= LOAD MORE SONGS ================= 

function toggleSongs(btn) {
    const hiddenSongs = document.querySelectorAll('.hidden-songs');
    const isHidden = btn.textContent.includes('عرض');

    hiddenSongs.forEach(song => {
        if (isHidden) {
            song.style.display = 'block';
        } else {
            song.style.display = 'none';
        }
    });

    btn.textContent = isHidden ? 'إخفاء المزيد' : 'عرض المزيد';
}

// ================= ACTIVE LINK HIGHLIGHTING ================= 

function updateActiveLink() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ================= RESPONSIVE CHECK ================= 

function handleResize() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth > 768) {
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    }
}

window.addEventListener('resize', handleResize);

// ================= PAGE LOAD INITIALIZATION ================= 

document.addEventListener('DOMContentLoaded', function () {
    // تحديث الروابط النشطة عند تحميل الصفحة
    updateActiveLink();

    // إضافة تأثيرات على الأزرار
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});
