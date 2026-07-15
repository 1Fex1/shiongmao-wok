function initMobileNav() {
  const btn = document.getElementById("mobile-nav-btn");
  const menu = document.getElementById("mobile-nav-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => menu.classList.toggle("hidden"));
}

function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  const useMotion = typeof window.Motion !== "undefined" && window.Motion.animate;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        if (useMotion) {
          window.Motion.animate(
            el,
            { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
            { duration: 0.7, easing: [0.22, 1, 0.36, 1] }
          );
        } else {
          el.classList.add("reveal-fallback");
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => {
    el.style.opacity = useMotion ? "0" : "";
    io.observe(el);
  });
}

function initReservationForm() {
  const form = document.getElementById("reservation-form");
  const successMsg = document.getElementById("reservation-success");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.classList.remove("hidden");
    form.reset();
    setTimeout(() => successMsg.classList.add("hidden"), 5000);
  });
}

const homeTranslations = {
  en: {
    navHome: "Home",
    navMenu: "Menu",
    comingSoon: "Coming Soon !",
    heroTitle1: "SHIONGMAO",
    heroTitle2: "- Japanese Tradition, <br>Wok Perfected.",
    heroDesc: "Experience within the part of originative sushi muxehg, Parrfion wetris ummest of erandal nonedlarations and bustonn uncompamishing dedications.",
    ourMenuBtn: "Our Menu",
    topRated: "Top Rated Dishes",
    wokDishesTitle: "Wok Dishes",
    wokDishesDesc: "Susté strom rellued soo deshus tuu saturn ndlfr artexcait biet with siltimate inpresentation.",
    learnMore: "LEARN MORE",
    artTitle: "Art of Shiongmao Wok",
    artDesc1: "The autisonioe of srmeacious deredol processoving ingredients, entertitury, and flavors and precelant pramurants.",
    artDesc2: "Einangmue section of neroch notioon favoration and yeictan oveta courreentely to cnagnition and smellous contclion.",
    galleryTag: "GALLERY",
    storyTitle: "Our Visual Story",
    storyDesc1: "A glimpse into the meticulous craft of our master chefs, capturing the precise moment where premium ingredients transcend into culinary art.",
    storyDesc2: "Every dish is a testament to timeless Japanese techniques, framed perfectly to elevate both taste and visual ambiance."
  },
  ar: {
    navHome: "الرئيسية",
    navMenu: "القائمة",
    comingSoon: "قريباً !",
    heroTitle1: "شيونغماو",
    heroTitle2: "- التقاليد اليابانية، <br>وإتقان الووك.",
    heroDesc: "اكتشف الطعم الأصلي وتجربة السوشي الفريدة، مع التزامنا الثابت بتقديم أعلى مستويات الجودة والتفاني في إعداد أطباقنا.",
    ourMenuBtn: "قائمتنا",
    topRated: "الأطباق الأعلى تقييماً",
    wokDishesTitle: "أطباق الووك",
    wokDishesDesc: "استمتع بأشهى أطباق الووك المحضرة بعناية لتُقدم لك تجربة تذوق مثالية بأفضل المكونات.",
    learnMore: "اكتشف المزيد",
    artTitle: "فن شيونغماو ووك",
    artDesc1: "عملية دقيقة ومتقنة في اختيار المكونات، لضمان نكهات فريدة وتقديم استثنائي في كل طبق.",
    artDesc2: "تشكيلة مميزة من النكهات التي تُحضر بعناية لترضي حواسك وتمنحك تجربة طعام لا تُنسى.",
    galleryTag: "المعرض",
    storyTitle: "قصتنا المصورة",
    storyDesc1: "لمحة عن براعة طهاتنا المتميزين، حيث نلتقط اللحظة الدقيقة التي تتحول فيها المكونات الفاخرة إلى فن طهي حقيقي.",
    storyDesc2: "كل طبق هو شهادة على التقنيات اليابانية الخالدة، مصمم بدقة للارتقاء بكل من المذاق والجو العام."
  }
};

let currentHomeLang = localStorage.getItem('shiongmao_lang') || 'en';

window.toggleLanguage = function() {
  currentHomeLang = currentHomeLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('shiongmao_lang', currentHomeLang);
  applyHomeTranslations();
};

function applyHomeTranslations() {
  const langData = homeTranslations[currentHomeLang];
  document.documentElement.lang = currentHomeLang;
  document.documentElement.dir = 'ltr'; 

  const desktopBtn = document.getElementById('desktop-lang-btn');
  if (desktopBtn) desktopBtn.innerText = currentHomeLang === 'en' ? 'العربية' : 'English';

  const mobileBtn = document.getElementById('mobile-lang-btn');
  if (mobileBtn) mobileBtn.innerText = currentHomeLang === 'en' ? 'العربية' : 'EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) {
      el.innerHTML = langData[key]; 
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initReservationForm();
  applyHomeTranslations(); 
});
