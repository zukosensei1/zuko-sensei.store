window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

const links = document.querySelectorAll('.menu a');
const glow = document.getElementById('glow');

window.addEventListener('mousemove', (e) => {
    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }
});


window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section, .page-block');
    
    
    const scrollPosition = window.scrollY + (window.innerHeight / 3);

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        const text = link.innerText.trim();
        
       
        if (current === "home-section" && text === "Giriş") link.classList.add('active');
        if (current === "about-section" && text === "Hakkımızda") link.classList.add('active');
        if (current === "kapsam-section" && text === "Neler Yapıyoruz") link.classList.add('active');
        if (current === "avantajlar-section" && text === "Neden Biz") link.classList.add('active');
    });
});


links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const text = link.innerText.trim();
        let id = "";

        if (text === "Giriş") id = "home-section";
        else if (text === "Hakkımızda") id = "about-section";
        else if (text === "Neler Yapıyoruz") id = "kapsam-section";
        else if (text === "Neden Biz") id = "avantajlar-section";
        
        const target = document.getElementById(id);
        if (target) {
            
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    });
});


const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

const originalTitle = document.title;
const hiddenTitle = "V8R";

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = hiddenTitle;
    } else {
        document.title = originalTitle;
    }
});


document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const validSections = [
    "home-section",
    "about-section",
    "kapsam-section",
    "avantajlar-section"
];

function handleRoute() {
    const hash = window.location.hash.replace("#", "");

t
    document.querySelectorAll(".page-block").forEach(sec => {
        sec.style.display = "none";
    });


    if (validSections.includes(hash) || hash === "") {
        const targetId = hash || "home-section";
        const target = document.getElementById(targetId);

        if (target) {
            target.style.display = "flex";
            target.scrollIntoView({ behavior: "smooth" });
            return;
        }
    }


    const notFound = document.getElementById("notfound-section");
    if (notFound) {
        notFound.style.display = "flex";
    }
}


window.addEventListener("hashchange", handleRoute);
let lines = 0;
const maxLines = 0;
const text = "";
const interval = setInterval(() => {
  console.log(""); 
  console.log(
    "%c" + text,
    "color:red;font-size:20px;font-weight:900;font-family:monospace;text-shadow:0 0 10px red;"
  );
  lines++;
  if (lines >= maxLines) {
    clearInterval(interval);
  }
}, 200);
