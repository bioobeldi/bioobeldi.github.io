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
    "p-bvn": "Discover the ancestral secret of beauty and well-being with our exquisite selection of olive and argan oils. Immerse yourself in an unforgettable sensory experience, where tradition and quality meet to enhance your daily life. Appreciated for thousands of years for its nourishing benefits and delicate flavors, our extra virgin olive oil comes from the sunny lands of the Mediterranean. Carefully pressed from ripe olives, this precious oil is packed with antioxidants and essential fatty acids to pamper your body inside and out. From refined cuisine to your beauty ritual, our olive oil promises an incomparable gustatory and cosmetic experience. A true Moroccan treasure, argan oil is a beauty secret handed down from generation to generation. Hand-extracted from the fruit of the argan tree, this rich, luxurious oil is renowned for its moisturizing, regenerating and anti-aging properties. Treat your skin and hair to nature's best with our pure, authentic argan oil. A true elixir that transports you to the heart of Morocco's enchanting landscapes. Our commitment to your satisfaction Our passion for authenticity and quality is reflected in every one of our products",
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
    "p-bvn": "Découvrez le secret ancestral de la beauté et du bien-être avec notre sélection exquise d'huiles d'olive et d'argan. Plongez dans une expérience sensorielle inoubliable, où tradition et qualité se rencontrent pour sublimer votre vie quotidienne. Appréciée depuis des millénaires pour ses bienfaits nourrissants et ses saveurs délicates, notre huile d'olive extra vierge provient des terres ensoleillées de la Méditerranée. Pressée avec soin à partir d'olives mûres à souhait, cette précieuse huile regorge d'antioxydants et d'acides gras essentiels pour choyer votre corps de l'intérieur comme de l'extérieur. De la cuisine raffinée à votre rituel beauté, notre huile d'olive promet une expérience gustative et cosmétique incomparable. Véritable trésor marocain, l'huile d'argan est un secret de beauté transmis de génération en génération. Extraite à la main des fruits de l'arganier, cette huile riche et luxueuse est réputée pour ses propriétés hydratantes, régénérantes et anti-âge. Offrez à votre peau et à vos cheveux le meilleur de la nature avec notre huile d'argan pure et authentique. Un véritable élixir qui vous transporte au cœur des paysages envoûtants du Maroc. Nos engagements pour votre satisfaction Chez nous, notre passion pour l'authenticité et la qualité se reflète dans chacun de nos produits. Nous sélectionnons rigoureusement les ingrédients les plus fins, en privilégiant les méthodes traditionnelles pour préserver toutes les vertus naturelles de nos huiles. De la ferme à votre foyer, nous nous engageons à vous offrir une expérience d'exception, aussi pure que nos huiles. Explorez notre collection et laissez-vous séduire par les bienfaits de l'huile d'olive et de l'huile d'argan. Transformez votre quotidien en une aventure sensorielle et bienfaisante",
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
    "p-bvn": "اكتشف سر الجمال والرفاهية مع مجموعتنا الرائعة من زيوت الزيتون والأركان. انغمس في تجربة حسية لا تُنسى ، حيث تلتقي التقاليد والجودة لتعزيز حياتك اليومية. نقدر منذ آلاف السنين لفوائده المغذية ونكهاته اللذيذة ، زيت الزيتون البكر الممتاز لدينا يأتي من الأراضي المشمسة في البحر الأبيض المتوسط. يتم عصر هذا الزيت الثمين بعناية من الزيتون الناضج تمامًا ، وهو مليء بمضادات الأكسدة والأحماض الدهنية الأساسية لتدليل جسمك من الداخل والخارج. من المأكولات الفاخرة إلى طقوس الجمال الخاصة بك ، يعدك زيت الزيتون لدينا بمذاق لا مثيل له وتجربة تجميلية. كنز مغربي حقيقي ، زيت الأرغان هو سر جمال تنتقل من جيل إلى جيل. يتم استخلاصه يدويًا من ثمار شجرة الأرغان ، ويشتهر هذا الزيت الغني والفاخر بخصائصه المرطبة والتجديد ومقاومة الشيخوخة. عالجي بشرتك وشعرك بأفضل ما في الطبيعة بزيت الأرجان النقي والأصلي. إكسير حقيقي ينقلك إلى قلب المناظر الطبيعية الساحرة في المغرب. التزاماتنا بإرضائك معنا ينعكس شغفنا بالأصالة والجودة في كل منتج من منتجاتنا. نختار بدقة أفضل المكونات ، ونفضل الطرق التقليدية للحفاظ على جميع المزايا الطبيعية لزيوتنا. من المزرعة إلى منزلك ، نحن ملتزمون بتزويدك بتجربة استثنائية ، نقية مثل زيوتنا. اكتشف مجموعتنا واسمح لنفسك بالإغراء بفوائد زيت الزيتون وزيت الأرغان. حول حياتك اليومية إلى مغامرة حسية ومفيدة",
    "h1imgbvn": "مرحبا بكم في عالمنا المتميز بالجودة", 
    "product-olive-oil": "زيت الزيتون",
    "product-argan-oil": "زيت الأركان",
    "product-amlou": "آملو",
    "h1formulaire": "أحجز طلبا",
    "label-phone": "الهاتف:",
    "label-email": "البريد الإلكتروني:",
    "label-message": "الرسالة:",
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
