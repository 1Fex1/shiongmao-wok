const translations = {
  en: {
    home: "Home",
    menu: "Menu",
    comingSoon: "Coming Soon !",
    title: "SHIONGMAO WOK MENU",
    subtitle: "- Discover Our Cuisines",
    cartTitle: "Shopping Cart",
    emptyCart: "Your cart is empty.",
    totalAmount: "Total Amount:",
    clearAll: "Clear All",
    checkout: "Checkout",
    addToCart: "+ Add To",
    catAll: "ALL",
    catAppetizers: "APPETIZERS",
    catWok: "WOK SPECIALTIES",
    catSushi: "SIGNATURE SUSHI",
    catDesserts: "DESSERTS",
    catDrinks: "DRINKS",
    categories: {
      all: "ALL",
      appetizers: "APPETIZERS",
      wok: "WOK SPECIALTIES",
      sushi: "SIGNATURE SUSHI",
      desserts: "DESSERTS",
      drinks: "DRINKS"
    },
    subtitles: {
      all: "",
      appetizers: "Fresh Beginnings",
      wok: "Made to Wok",
      sushi: "Art on a Plate",
      desserts: "Sweet Finishes",
      drinks: "Cold Refreshments"
    }
  },
  ar: {
    home: "الرئيسية",
    menu: "القائمة",
    comingSoon: "قريباً !",
    title: "قائمة شيونغماو ووك",
    subtitle: "- اكتشف مأكولاتنا",
    cartTitle: "سلة التسوق",
    emptyCart: "سلة التسوق فارغة.",
    totalAmount: "المبلغ الإجمالي:",
    clearAll: "مسح الكل",
    checkout: "الدفع",
    addToCart: "+ أضف إلى السلة",
    catAll: "الكل",
    catAppetizers: "المقبلات",
    catWok: "تخصصات الووك",
    catSushi: "السوشي المميز",
    catDesserts: "الحلويات",
    catDrinks: "المشروبات",
    categories: {
      all: "الكل",
      appetizers: "المقبلات",
      wok: "تخصصات الووك",
      sushi: "السوشي المميز",
      desserts: "الحلويات",
      drinks: "المشروبات"
    },
    subtitles: {
      all: "",
      appetizers: "بدايات طازجة",
      wok: "صنع في الووك",
      sushi: "فن على طبق",
      desserts: "نهايات حلوة",
      drinks: "مرطبات باردة"
    }
  }
};

const menuItems = [
  { id: 1, name: "Dragon Sushi Roll", nameAr: "دراجون سوشي رول", price: 15.00, category: "sushi", desc: "Crispy tempura shrimp, avocado, and spicy mayo topping.", descAr: "جمبري تمبورا مقرمش، أفوكادو، مع تغطية المايونيز الحار.", image: "images/common.png", isSpecial: false },
  { id: 2, name: "Wok Chicken Noodles", nameAr: "نودلز دجاج ووك", price: 12.50, category: "wok", desc: "Savory hot egg noodles tossed with tender chicken and fresh vegetables.", descAr: "نودلز البيض الساخنة اللذيذة مع الدجاج الطري والخضروات الطازجة.", image: "images/Bestfood.png", isSpecial: true }, 
  { id: 3, name: "Family Wok Combo", nameAr: "كومبو الووك العائلي", price: 35.00, category: "wok", desc: "An oversized family sharing platter featuring our finest signature wok flavors.", descAr: "طبق عائلي كبير للمشاركة يضم أفضل نكهات الووك المميزة لدينا.", image: "images/common.png", isSpecial: false },
  { id: 4, name: "Dynamite Shrimp", nameAr: "دايناميت شرمب", price: 9.00, category: "appetizers", desc: "Crispy fried shrimp coated in a spicy, creamy dynamite glaze.", descAr: "روبيان مقلي مقرمش مغطى بصلصة الدايناميت الكريمية الحارة.", image: "images/common.png", isSpecial: false },
  { id: 5, name: "Strawberry Mojito", nameAr: "موهيتو الفراولة", price: 4.50, category: "drinks", desc: "An ice-cold, refreshing blend of fresh strawberries, mint, and lime.", descAr: "مزيج منعش ومثلج من الفراولة الطازجة والنعناع والليمون.", image: "images/common.png", isSpecial: false },
  { id: 101, name: "Dragon Wok", nameAr: "دراجون ووك", price: 145.00, category: "wok", desc: "Thick noodles tossed in the wok with tender beef strips, colorful bell peppers, and hot Asian chili powder.", descAr: "نودلز سميكة مقلبة في الووك مع شرائح لحم البقر الطرية، الفلفل الملون، ومسحوق الفلفل الآسيوي الحار.", image: "images/Bestfood.png", isSpecial: true },
  { id: 102, name: "Dynamite Shrimp Wok", nameAr: "ووك دايناميت شرمب", price: 165.00, category: "wok", desc: "Soft noodles topped with crispy dynamite shrimp, a spicy creamy glaze, and fresh sautéed vegetables.", descAr: "نودلز طرية تعلوها روبيان دايناميت مقرمش، صلصة كريمية حارة، وخضروات سوتيه طازجة.", image: "images/Bestfood.png", isSpecial: true },
  { id: 103, name: "Crunchy Vegetable Spring Rolls", nameAr: "سبرينج رولز الخضار المقرمشة", price: 65.00, category: "appetizers", desc: "Crispy pastry rolls filled with seasoned Asian vegetables, served with a sweet chili dipping sauce.", descAr: "رقائق عجين مقرمشة محشوة بالخضروات الآسيوية المتبلة، تقدم مع صلصة الفلفل الحلو.", image: "images/common.png", isSpecial: false },
  { id: 104, name: "Crunchy Crab Salad", nameAr: "سلطة الكابوريا المقرمشة", price: 95.00, category: "appetizers", desc: "Shredded crab sticks with fresh cucumber and carrots, topped with tobiko and spicy Japanese mayo.", descAr: "أصابع كابوريا مبشورة مع الخيار والجزر الطازج، تعلوها توبيكو ومايونيز ياباني حار.", image: "images/common.png", isSpecial: false },
  { id: 105, name: "Spicy Salmon Volcano Roll", nameAr: "سبايسي سالمون فولكانو رول", price: 180.00, category: "sushi", desc: "Sushi roll filled with fresh salmon and avocado, topped with spicy minced salmon and black sesame seeds.", descAr: "رول سوشي محشو بالسلمون الطازج والأفوكادو، يعلوه سلمون مفروم حار وسمسم أسود.", image: "images/common.png", isSpecial: false },
  { id: 106, name: "Japanese Ice Cream Mochi", nameAr: "موتشي الآيس كريم الياباني", price: 85.00, category: "desserts", desc: "Three pieces of traditional Japanese mochi filled with vanilla, matcha, and strawberry ice cream.", descAr: "ثلاث قطع من الموتشي الياباني التقليدي المحشو بآيس كريم الفانيليا والماتشا والفراولة.", image: "images/common.png", isSpecial: false },
  { id: 107, name: "Iced Matcha Latte", nameAr: "آيسد ماتشا لاتيه", price: 55.00, category: "drinks", desc: "Authentic Japanese matcha whisked with cold milk and ice, lightly and organically sweetened.", descAr: "ماتشا يابانية أصلية مخفوقة مع الحليب البارد والثلج، محلاة بشكل خفيف وعضوي.", image: "images/common.png", isSpecial: false }
];

let currentCategory = 'all'; 
let cart = JSON.parse(localStorage.getItem('shiongmao_cart')) || [];
let currentLang = localStorage.getItem('shiongmao_lang') || 'en';

window.toggleLanguage = function() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('shiongmao_lang', currentLang);
  applyTranslations();
};

function applyTranslations() {
  const langData = translations[currentLang];
  const htmlTag = document.documentElement;
  
  htmlTag.lang = currentLang;
  htmlTag.dir = 'ltr'; 

  const desktopBtn = document.getElementById('desktop-lang-btn');
  if (desktopBtn) desktopBtn.innerText = currentLang === 'en' ? 'العربية' : 'English';

  const mobileBtn = document.getElementById('mobile-lang-btn');
  if (mobileBtn) mobileBtn.innerText = currentLang === 'en' ? 'العربية' : 'EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) el.innerText = langData[key];
  });

  if (document.getElementById('menu-sections')) {
    renderMenuGrid();
  }
  updateCartUI();
}

window.openCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    overlay.classList.remove('hidden');
    drawer.classList.remove('-translate-x-full');
  }
};

window.closeCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    overlay.classList.add('hidden');
    drawer.classList.add('-translate-x-full');
  }
};

window.addToCart = function(id) {
  const item = menuItems.find(p => p.id === id);
  if (!item) return;

  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      nameAr: item.nameAr,
      price: item.price,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  const alertName = currentLang === 'ar' ? item.nameAr : item.name;
  const alertMsg = currentLang === 'ar' ? `تمت إضافة "${alertName}" للسلة!` : `Added "${alertName}" to cart!`;
  showToast(alertMsg);
};

window.changeQty = function(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
};

window.clearCart = function() {
  cart = [];
  saveCart();
  updateCartUI();
};

function saveCart() {
  localStorage.setItem('shiongmao_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const confirmBtn = document.getElementById('cart-confirm-btn');
  const langData = translations[currentLang];

  let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartCount) {
    cartCount.innerText = totalItems;
    if (totalItems > 0) {
      cartCount.classList.remove('scale-0');
      cartCount.classList.add('scale-100');
    } else {
      cartCount.classList.remove('scale-100');
      cartCount.classList.add('scale-0');
    }
  }

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<div class="text-center py-12 text-brand-grey/30 text-sm">${langData.emptyCart}</div>`;
    } else {
      cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center py-3 border-b border-white/5';
        const displayItemName = currentLang === 'ar' ? item.nameAr : item.name;
        div.innerHTML = `
          <div>
            <h4 class="text-white text-xs font-medium text-left">${displayItemName}</h4>
            <span class="text-[#E6C9A1] text-xs font-bold block text-left">${item.price.toFixed(2)} EGP</span>
          </div>
          <div class="flex items-center gap-2.5 bg-[#1C1D22] border border-white/5 rounded-xl p-1">
            <button onclick="changeQty(${index}, -1)" class="w-5 h-5 rounded-lg text-white/60 hover:text-white transition text-xs flex items-center justify-center">-</button>
            <span class="text-white text-xs font-bold w-4 text-center">${item.qty}</span>
            <button onclick="changeQty(${index}, 1)" class="w-5 h-5 rounded-lg text-white/60 hover:text-white transition text-xs flex items-center justify-center">+</button>
          </div>
        `;
        cartItemsContainer.appendChild(div);
      });
    }
  }

  if (cartTotal) cartTotal.innerText = `${totalPrice.toFixed(2)} EGP`;

  if (confirmBtn) {
    if (cart.length > 0) {
      confirmBtn.classList.remove('opacity-40', 'pointer-events-none');
    } else {
      confirmBtn.classList.add('opacity-40', 'pointer-events-none');
    }
  }
}

window.goToCheckout = function() {
  if (cart.length > 0) {
    window.location.href = 'checkout.html';
  }
};

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.innerText = message;
    toast.classList.remove('opacity-0', 'translate-y-10');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-10');
    }, 2500);
  }
}

function createCardHTML(item) {
  const btnText = translations[currentLang].addToCart;
  const itemName = currentLang === 'ar' ? item.nameAr : item.name;
  const itemDesc = currentLang === 'ar' ? item.descAr : item.desc;

  if (item.isSpecial) {
    return `
      <div class="menu-card" style="background-image: url('images/coverbest.png');">
        <div class="best-seller-badge">
          <img src="images/best.png" alt="Best Seller">
        </div>
        <div class="w-full h-full flex flex-col justify-between pt-2">
          <div>
            <div class="w-full h-[135px] overflow-hidden mb-3 rounded-xl">
              <img src="${item.image}" alt="${itemName}" class="product-img">
            </div>
            <div class="space-y-1 mb-2 px-1 text-left">
              <h4 class="text-[14px] font-bold text-white line-clamp-1 leading-snug">${itemName}</h4>
              <p class="text-[11px] text-brand-grey/60 line-clamp-3 leading-relaxed h-[45px] overflow-hidden">${itemDesc}</p>
            </div>
          </div>
          <div class="flex justify-between items-center pt-2 border-t border-white/5 px-1">
            <span class="text-[#E6C9A1] text-[13px] font-bold">${item.price.toFixed(2)} EGP</span>
            <button onclick="addToCart(${item.id})" class="px-3 py-1.5 bg-brand-btn hover:bg-brand-btn/90 text-white rounded-lg text-[11px] font-bold transition-all">
              ${btnText}
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="menu-card" style="background-image: url('images/covercommon.png');">
        <div class="w-full h-full flex flex-col justify-between">
          <div>
            <div class="w-full h-[135px] overflow-hidden mb-3 rounded-xl">
              <img src="${item.image}" alt="${itemName}" class="product-img">
            </div>
            <div class="space-y-1 mb-2 px-1 text-left">
              <h4 class="text-[14px] font-bold text-white line-clamp-1 leading-snug">${itemName}</h4>
              <p class="text-[11px] text-brand-grey/50 line-clamp-3 leading-relaxed h-[45px] overflow-hidden">${itemDesc}</p>
            </div>
          </div>
          <div class="flex justify-between items-center pt-2 border-t border-white/5 px-1">
            <span class="text-[#E6C9A1] text-[13px] font-bold">${item.price.toFixed(2)} EGP</span>
            <button onclick="addToCart(${item.id})" class="px-3 py-1.5 bg-[#1C1D22] hover:bg-brand-btn text-brand-frame hover:text-white border border-brand-frame/20 hover:border-transparent rounded-lg text-[11px] font-bold transition-all">
              ${btnText}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

window.renderMenuGrid = function(filterCategory = currentCategory) { 
  currentCategory = filterCategory; 
  const container = document.getElementById('menu-sections'); 
  if (!container) return; 
  
  container.innerHTML = ''; 

  const tabButtons = document.querySelectorAll('.tab-btn'); 
  tabButtons.forEach(btn => { 
    btn.classList.remove('active-tab'); 
    if (btn.getAttribute('onclick').includes(`'${filterCategory}'`)) { 
      btn.classList.add('active-tab'); 
    }
  });

  if (filterCategory === 'all') { 
    if (menuItems.length === 0) { 
      container.innerHTML = '<p class="text-center text-white/50 py-16 text-lg font-medium">Sorry, no items available.</p>'; 
      return; 
    }
    const grid = document.createElement('div'); 
    grid.className = 'menu-grid'; 
    menuItems.forEach(item => { 
      grid.innerHTML += createCardHTML(item); 
    });
    container.appendChild(grid); 
  } else { 
    const catItems = menuItems.filter(item => item.category === filterCategory); 
    if (catItems.length === 0) { 
      container.innerHTML = '<p class="text-center text-white/50 py-16 text-lg font-medium">Sorry, no items available in this section.</p>'; 
      return; 
    }

    const sectionWrapper = document.createElement('div'); 
    sectionWrapper.className = 'menu-section-group'; 

    const sectionHeader = document.createElement('div'); 
    sectionHeader.className = 'category-header-title'; 
    sectionHeader.innerHTML = `
      <h2>${translations[currentLang].categories[filterCategory]} <span class="separator">—</span> <span class="subtitle">${translations[currentLang].subtitles[filterCategory]}</span></h2>
    `; 
    sectionWrapper.appendChild(sectionHeader); 

    const grid = document.createElement('div'); 
    grid.className = 'menu-grid'; 
    catItems.forEach(item => { 
      grid.innerHTML += createCardHTML(item); 
    });

    sectionWrapper.appendChild(grid); 
    container.appendChild(sectionWrapper); 
  }
};

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});