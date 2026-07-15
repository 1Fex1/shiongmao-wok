const checkoutTranslations = {
  en: {
    back: "← Back to Menu",
    cartTitle: "Your Cart Items",
    totalAmount: "Total Amount:",
    deliveryTitle: "Delivery & Order Details",
    dineIn: "Dine-in / Pickup",
    dineInSub: "Pay cash at restaurant",
    delivery: "Online Delivery",
    deliverySub: "Vodafone Cash / InstaPay",
    nameLbl: "Full Name",
    namePlh: "Your full name",
    phoneLbl: "Phone Number",
    tableLbl: "Table Number (Optional)",
    tablePlh: "Enter table number if inside",
    addressLbl: "Delivery Address",
    addressPlh: "Building, Street, Area...",
    methodLbl: "Select Transfer Method:",
    confirmBtn: "Place Order & Confirm",
    errName: "Please enter your full name correctly.",
    errPhone: "Please enter a valid Egyptian phone number (e.g., 01001234567).",
    errAddress: "Please enter your detailed delivery address.",
    mTitle: "Order Confirmed!",
    mDesc: "Thank you for choosing Shiongmao Wok! Your order has been securely placed and is being prepared.",
    mRef: "Your Order Reference",
    mHome: "Back to Home"
  },
  ar: {
    back: "← العودة للقائمة",
    cartTitle: "الأصناف في سلتك",
    totalAmount: "المبلغ الإجمالي:",
    deliveryTitle: "تفاصيل التوصيل والطلب",
    dineIn: "تناول في المطعم / استلام",
    dineInSub: "الدفع نقداً في المطعم",
    delivery: "توصيل أونلاين",
    deliverySub: "فودافون كاش / إنستا باي",
    nameLbl: "الاسم بالكامل",
    namePlh: "أدخل اسمك بالكامل",
    phoneLbl: "رقم الهاتف",
    tableLbl: "رقم الطاولة (اختياري)",
    tablePlh: "أدخل رقم الطاولة إذا كنت داخل المطعم",
    addressLbl: "عنوان التوصيل بالتفصيل",
    addressPlh: "المبنى، الشارع، المنطقة...",
    methodLbl: "اختر طريقة التحويل:",
    confirmBtn: "تأكيد وإرسال الطلب",
    errName: "يرجى إدخال الاسم بالكامل بشكل صحيح.",
    errPhone: "يرجى إدخال رقم هاتف مصري صحيح (مثال: 01001234567).",
    errAddress: "يرجى إدخال عنوان التوصيل بالتفصيل.",
    mTitle: "تم تأكيد طلبك!",
    mDesc: "شكراً لاختيارك شيونغماو ووك! تم تقديم طلبك بأمان وجاري تحضيره الآن.",
    mRef: "رقم مرجع الطلب الخاص بك",
    mHome: "العودة للرئيسية"
  }
};

const currentLang = localStorage.getItem('shiongmao_lang') || 'en';
const langData = checkoutTranslations[currentLang];

document.documentElement.lang = currentLang;
document.documentElement.dir = 'ltr'; 

document.getElementById('back-link').innerText = langData.back;
document.getElementById('cart-title-txt').innerText = langData.cartTitle;
document.getElementById('total-title-txt').innerText = langData.totalAmount;
document.getElementById('section-delivery-title').innerText = langData.deliveryTitle;
document.getElementById('label-type-dine').innerText = langData.dineIn;
document.getElementById('sub-type-dine').innerText = langData.dineInSub;
document.getElementById('label-type-deliv').innerText = langData.delivery;
document.getElementById('sub-type-deliv').innerText = langData.deliverySub;
document.getElementById('lbl-name').innerText = langData.nameLbl;
document.getElementById('cust-name').placeholder = langData.namePlh;
document.getElementById('lbl-phone').innerText = langData.phoneLbl;
document.getElementById('lbl-table').innerText = langData.tableLbl;
document.getElementById('cust-table').placeholder = langData.tablePlh;
document.getElementById('lbl-address').innerText = langData.addressLbl;
document.getElementById('cust-address').placeholder = langData.addressPlh;
document.getElementById('lbl-method').innerText = langData.methodLbl;
document.getElementById('submit-order-btn').innerText = langData.confirmBtn;

document.getElementById('modal-title').innerText = langData.mTitle;
document.getElementById('modal-desc').innerText = langData.mDesc;
document.getElementById('modal-ref-lbl').innerText = langData.mRef;
document.getElementById('modal-home-btn').innerText = langData.mHome;

const cartData = localStorage.getItem('shiongmao_cart');
const summaryItems = document.getElementById('summary-items');
const summaryTotal = document.getElementById('summary-total');

if (cartData) {
  const cart = JSON.parse(cartData);
  let total = 0;

  if (cart.length === 0) window.location.href = 'menu.html'; 

  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'flex justify-between items-center py-3 border-b border-white/5 last:border-0';
    const displayName = currentLang === 'ar' ? item.nameAr : item.name;
    div.innerHTML = `
      <div class="flex items-center gap-3 text-left">
        <span class="bg-white/5 border border-[#E6C9A1]/20 text-[#E6C9A1] w-6 h-6 flex items-center justify-center rounded-lg text-xs font-bold">${item.qty}x</span>
        <span class="text-sm font-medium text-white/90">${displayName}</span>
      </div>
      <span class="text-[#E6C9A1] font-bold text-sm">${(item.price * item.qty).toFixed(2)} EGP</span>
    `;
    summaryItems.appendChild(div);
  });
  summaryTotal.innerText = `${total.toFixed(2)} EGP`;
} else {
  window.location.href = 'menu.html';
}

function toggleFormFields() {
  const isOnline = document.querySelector('input[name="order_type"][value="online"]').checked;
  document.getElementById('cash-fields').classList.toggle('hidden', isOnline);
  document.getElementById('online-fields').classList.toggle('hidden', !isOnline);
  document.getElementById('error-msg').classList.add('hidden');
}

function submitOrder(e) {
  e.preventDefault();
  const errorDiv = document.getElementById('error-msg');
  errorDiv.classList.add('hidden'); 

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const isOnline = document.querySelector('input[name="order_type"][value="online"]').checked;
  
  const phoneRegex = /^01[0125][0-9]{8}$/;

  if (name.length < 3) {
    showError(langData.errName);
    return;
  }

  if (!phoneRegex.test(phone)) {
    showError(langData.errPhone);
    return;
  }

  if (isOnline) {
    const address = document.getElementById('cust-address').value.trim();
    if (address.length < 5) {
      showError(langData.errAddress);
      return;
    }
  }

  const orderRef = "SW-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('order-ref-number').innerText = "#" + orderRef;

  const modal = document.getElementById('success-modal');
  const modalContent = document.getElementById('success-modal-content');
  modal.classList.remove('hidden');
  
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
  }, 10);
  
  localStorage.removeItem('shiongmao_cart');
}

function showError(msg) {
  const errorDiv = document.getElementById('error-msg');
  errorDiv.innerText = msg;
  errorDiv.classList.remove('hidden');
}

function closeSuccessAndRedirect() {
  window.location.href = 'index.html';
}