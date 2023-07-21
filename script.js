// JavaScript complet pour le comportement du menu mobile
const links = document.querySelectorAll('nav li');

icons.addEventListener("click",() => {
  nav.classList.toggle("active")
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  })
});
const translations = {
  en: {
    "engage": "Our commitment to your satisfaction",
    "p-bvn": "Discover the ancestral secret of beauty and well-being with our exquisite selection of olive and argan oils. Immerse yourself in an unforgettable experience, where tradition and quality meet to enhance your daily life. Appreciated for thousands of years for its nourishing benefits and delicate flavors, our extra-virgin olive oil comes from the sun-drenched lands of the Souss region in central Morocco, which encompasses a large part of the valley of the river of the same name, the Souss River or Oued Souss, and runs alongside the ocean, giving it a freshness and cooler climate. All these conditions make the region one of the most agricultural in the country. Our oils come from Aourir, renowned for its vast agricultural holdings of various plantations thanks to the favorable climate.",
    "h1imgbvn": "Welcome to our world of excellence",
    "product-olive-oil": "olive oil",
    "product-argan-oil": "argan oil",
    "product-amlou": "amlou",
    "h1formulaire": "Pass your order",
    "label-phone": "Phone:",
    "label-email": "Email:",
    "label-message": "Message:",
    "label-submit": "Submit",
    "placeholder-phone": "Enter your phone number",
    "placeholder-email": "Enter your email",
    "placeholder-message": "Example: I want 1 liter of Argan oil and 1kg of Amlou to be delivered to Agadir.",
  },
  fr: {
    "engage": "Nos engagements pour votre satisfaction",
    "p-bvn": "Découvrez le secret ancestral de la beauté et du bien-être avec notre sélection exquise d'huiles d'olive et d'argan. Plongez dans une expérience inoubliable, où tradition et qualité se rejoignent pour améliorer votre quotidien. Appréciée depuis des millénaires pour ses vertus nourrissantes et ses saveurs délicates, notre huile d'olive extra vierge provient des terres ensoleillées de la région du Souss, au Maroc central, qui englobe une grande partie de la vallée de la rivière du même nom, Oued Souss, et longe l'océan, ce qui lui confère fraîcheur et climat plus tempéré. Toutes ces conditions font de cette région l'une des plus agricoles du pays. Nos huiles proviennent d'Aourir, réputée pour ses vastes exploitations agricoles de plantations diverses grâce à un climat favorable.",
    "h1imgbvn": "Bienvenue dans notre univers d'excellence",
    "product-olive-oil": "huile d'olive",
    "product-argan-oil": "huile d'argan",
    "product-amlou": "amlou",
    "h1formulaire": "Passer une commande",
    "label-phone": "Téléphone :",
    "label-email": "Email :",
    "label-message": "Message :",
    "label-submit": "Envoyer",
    "placeholder-phone": "Entrez votre numéro de téléphone",
    "placeholder-email": "Entrez votre email",
    "placeholder-message": "Exemple : Je veux 1 litre de l'huile d'Argan, et 1kg de Amlou, livrer à Agadir",
  },
  ar: {
    "engage": "إلتزاماتنا لإرضائكم",
    "p-bvn": " آكتشف سرجدودنا فالجمال والرفاهية مع مجموعتنا الرائعة من زيوت الزيتون والأركان. انغمس في تجربة لا تُنسى ، حيث تلتقي التقاليد والجودة لتحسين حياتك اليومية. يعرف زيت الزيتون و زيت الأرڭان لآلاف السنين بفوائده المغذية ونكهاته الرقيقة ، وهو يأتي من الأراضي المشمسة في منطقة سوس في وسط المغرب ، والتي تضم جزءًا كبيرًا من واحة سوس التي يعبرها واد سوس ، وتمتد الجهة على طول المحيط ، مما يمنحها مناخًا معتدلا و مناسبا للعديد من الزراعات. تأتي زيوتنا من أورير ، المشهورة بمناطقها الزراعية الشاسعة و اللتي تنتج زراعة مختلفة و ذات جودة عالمية",
    "h1imgbvn": "مرحبا بكم في عالمنا المتميز بالجودة", 
    "product-olive-oil": "زيت الزيتون",
    "product-argan-oil": "زيت الأركان",
    "product-amlou": "آملو",
    "h1formulaire": "أحجز طلبا",
    "label-phone": ": الهاتف",
    "label-email": ": البريد الإلكتروني",
    "label-message": ": الرسالة",
    "label-submit": "إرسال",
    "placeholder-phone": "أدخل رقم هاتفك",
    "placeholder-email": "أدخل بريدك الإلكتروني",
    "placeholder-message": "مثال: السلام عليكم، ممكن 1 لتر من زيت الأركان ، و 1 كيلو من أملو ، التسليم إلى بني ملال",
  },
};

function changeLanguage() {
  const selectedLang = document.getElementById("lang-select").value;

  for (const key in translations[selectedLang]) {
    const element = document.getElementById(key);
    if (element) {
      // Vérifier si l'élément est un champ de formulaire avec l'attribut "placeholder"
      if (element.placeholder !== undefined) {
        element.placeholder = translations[selectedLang][key];
      } else {
        element.textContent = translations[selectedLang][key];
      }
    }
  }

  // Mettre à jour spécifiquement les placeholders du formulaire
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (phoneInput && emailInput && messageInput) {
    phoneInput.placeholder = translations[selectedLang]["placeholder-phone"];
    emailInput.placeholder = translations[selectedLang]["placeholder-email"];
    messageInput.placeholder = translations[selectedLang]["placeholder-message"];
  }

  // Sauvegarder la langue sélectionnée dans le localStorage
  localStorage.setItem("selectedLang", selectedLang);
}

// Vérifier si la langue a déjà été sélectionnée et la récupérer depuis le localStorage
const storedLang = localStorage.getItem("selectedLang");
if (storedLang) {
  // Sélectionner la langue précédemment choisie dans le sélecteur
  document.getElementById("lang-select").value = storedLang;
}

// Appel initial pour mettre à jour la langue par défaut
changeLanguage();
