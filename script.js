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
    "pprincipal": "We are a group of local producers of Olive oil and Argan oil in the Aourir region near Agadir. We come together to promote our local products and showcase their quality.",
    "h1olive": "Traditionally pressed Olive Oil",
    "h1argan": "Bio traditional Argan Oil",
    "h1amlou": "Amlou",
    "legal": "© 2023 BioBeldi. All right reserved 2023 ",
    "adr": "Abderrahim Bouabid avenue",
    "ville": "Agadir - Morocco",
    "msgSM": "Share your experience with us and our products. Your feedback helps us improve. Do not hesitate to leave a testimonial, a suggestion or a constructive criticism, and leave us a like on our facebook and instagram pages",
    "spanwtsp": "contact us",
    "arganp": "Seasonal Argan Oil",
    "argana": ">> Unique and pure Argan oil <<",
    "zitouna": ">> Traditionally pressed olive oil <<",
    "zitounp": "Souss Aourir Olive Oil",
    "amloup": "Ingredients: Argan Oil, Roasted Almonds and Honey",
    "amloua": ">> Best traditional Amlou spread <<",
    "p2": "Carefully pressed from ripe olives, this precious oil is packed with antioxidants and essential fatty acids to pamper your body inside and out. From refined cuisine to your beauty ritual, our olive oil promises an incomparable and cosmetic experience. A true Moroccan treasure, argan oil is a beauty secret handed down from generation to generation. Hand-extracted from the fruit of the this rich, luxurious oil is renowned for its moisturizing, regenerating and anti-aging properties. Treat your skin and hair to with our pure, authentic argan oil. A true elixir that transports you to the heart of Morocco's of Morocco",
    "p3": "Our passion for authenticity and quality is reflected in every one of our products. We rigorously select the finest ingredients, favoring traditional methods to preserve all the natural virtues of our oils. From the farm to your home, we're committed to offering you an exceptional experience, as pure as our oils. Explore our collection and let yourself be seduced by the benefits of olive oil and argan oil. Transform your everyday life into a sensory adventure",
    "engage": "Our commitment to your satisfaction",
    "p-bvn": "Discover the ancestral secret of beauty and well-being with our selection of olive and argan oils. Immerse yourself in an unforgettable experience, where tradition and quality meet to enhance your daily life. Appreciated for thousands of years for its nourishing benefits and delicate flavors, our traditional olive oil comes from the sun lands of the Souss region in central Morocco, which encompasses a large part of the valley of the river of the same name, the Souss River or Oued Souss. All these conditions make the region one of the most agricultural in the country. Our oils come from Aourir, renowned for its vast agricultural holdings of various plantations thanks to the favorable climate.",
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
    "pprincipal": "Nous sommes un groupe de producteurs locaux d'huile d'olive et d'argan dans la région d'Aourir près d'Agadir. Nous unissons nos efforts pour promouvoir nos produits locaux et faire connaître leur qualité.",
    "h1olive": "Huile d'Olive traditionnelle",
    "h1argan": "Huile traditionnelle et bio d'Argane",
    "h1amlou": "Amlou",
    "legal": "© 2023 BioBeldi. Tous droits réservés.",
    "adr": "Avenue Abderrahim Bouabid",
    "ville": "Agadir - Maroc",
    "msgSM": " Partagez votre expérience avec nous et nos produits. Vos commentaires nous aident à nous améliorer. N'hésitez pas à laisser un témoignage, une suggestion ou une critique constructive, et nous laisser un like sur nos pages facebook et instagram",
    "spanwtsp": "Contactez-nous",
    "arganp": "Huile d'Argan de saison",
    "argana": ">> Huile d'Argan pure et millénaire <<",
    "zitouna": ">> Huile d'olive Traditionnelle <<",
    "zitounp": "Huile d'Olive Souss Aourir",
    "amloup": "Ingrédients : Huile d'Argan, Amandes Grillés et Miel",
    "amloua": ">> Amlou traditionnel à tartiner <<",
    "p2": "Pressée avec soin à partir d'olives mûres à souhait, cette précieuse huile regorge d'antioxydants et d'acides gras essentiels pour choyer votre corps de l'intérieur comme de l'extérieur. De la cuisine raffinée à votre rituel beauté, notre huile d'olive promet une expérience gustative et cosmétique incomparable. Véritable trésor marocain, l'huile d'argan est un secret de beauté transmis de génération en génération. Extraite à la main des fruits de l'arganier, cette huile riche et luxueuse est réputée pour ses propriétés hydratantes, régénérantes et anti-âge. Offrez à votre peau et à vos cheveux le meilleur de la nature avec notre huile d'argan pure et authentique. Un véritable élixir qui vous transporte au cœur des paysages envoûtants du Maroc",
    "p3": " Chez nous, notre passion pour l'authenticité et la qualité se reflète dans chacun de nos produits. Nous sélectionnons rigoureusement les ingrédients les plus fins, en privilégiant les méthodes traditionnelles pour préserver toutes les vertus naturelles de nos huiles. De la ferme à votre foyer, nous nous engageons à vous offrir une expérience d'exception, aussi pure que nos huiles. Explorez notre collection et laissez-vous séduire par les bienfaits de l'huile d'olive et de l'huile d'argan. Transformez votre quotidien en une aventure sensorielle et bienfaisante",
    "engage": "Nos engagements pour votre satisfaction",
    "p-bvn": "Découvrez le secret ancestral de la beauté et du bien-être avec notre sélection d'huiles d'olive et d'argan et d'autres produits. Plongez dans une expérience inoubliable, où tradition et qualité se rejoignent pour améliorer votre quotidien. Appréciée depuis des millénaires pour ses vertus nourrissantes et ses saveurs délicates, notre huile d'olive traditionnellement pressée provient des terres ensoleillées de la région du Souss, au Maroc central, qui englobe une grande partie de la vallée de la rivière du même nom, Oued Souss. Toutes ces conditions font de cette région l'une des plus agricoles du pays. Nos huiles proviennent d'Aourir, réputée pour ses vastes exploitations agricoles de plantations diverses grâce à un climat favorable.",
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
    "pprincipal": "مجموعة من منتجي زيت الزيتون و الأرڭان بمنطقة أورير قرب أڭادير، نحاول تجميع الجهود للترويج لمنتجاتنا المحلية و التعريف بجودتها",
    "h1olive": "زيت الزّيتون معصرة تقليدية",
    "h1argan": "زيت الأرڭَان ٪100 طبيعية",
    "h1amlou": "آملو باللَّوز و الأرڭَان",
    "legal": " بيو بلدي، جميع الحقوق محفوظة 2023 ©",
    "adr": "شارع عبد الرحيم بوعبيد",
    "ville": "أڭادير، المغرب",
    "msgSM": "شارك تجربتك معنا ومع منتجاتنا، لا تتردد في ترك شهادة أو اقتراح أو نقد بنّاء ، واترك لنا إعجابًا على صفحتنا على فيسبوك وإنستجرام ",
    "spanwtsp": "اتصل بنا",
    "arganp": "زيت أرڭان موسمية",
    "argana": ">> زيت أرڭان صافية و حرة <<",
    "zitouna": ">> أفضل زيوت زيتون معصورة تقليديا <<",
    "zitounp": "زيت زيتون سوس أورير",
    "amloup": "زيت الأركان واللوز المحمص والعسل",
    "amloua": ">> أملو تقليدي بأفضل المكونات <<",
    "p2": "يتم عصر هذا الزيت الثمين بعناية من الزيتون الناضج تمامًا ، وهو مليء بمضادات الأكسدة والأحماض الدهنية الأساسية لأجسامنا، سواء للظاهر أو للباطن. من المأكولات الفاخرة إلى طقوس الجمال الخاصة بك ، يعدك زيت الزيتون لدينا بمذاق لا مثيل له وتجربة تجميلية. كنز مغربي حقيقي ، زيت الأرڭان هو سر جمال ينتقل من جيل إلى جيل. يتم استخلاصه يدويًا من ثمار شجرة الأرڭان ، ويشتهر هذا الزيت الغني والفاخر بخصائصه المرطبة والتجديد ومقاومة الشيخوخة. عالج بشرتك وشعرك بأفضل ما في الطبيعة بزيت الأرڭان النقي والأصلي. إكسير حقيقي ينقلك إلى قلب المناظر الطبيعية الساحرة في المغرب",
    "p3": "ينعكس شغفنا بالأصالة والجودة في كل منتج من منتجاتنا. نختار بدقة أفضل المكونات ، ونفضل الطرق التقليدية للحفاظ على جميع المزايا الطبيعية لزيوتنا. من المزرعة إلى منزلك ، نحن ملتزمون بتزويدك بتجربة استثنائية ، نقية مثل زيوتنا. اكتشف مجموعتنا واسمح لنفسك بالإغراء بفوائد زيت الزيتون وزيت الأرغان. حول حياتك اليومية إلى الأفضل",
    "engage": "إلتزاماتنا لإرضائكم",
    "p-bvn": " اكتشف سرجدودنا فالجمال والرفاهية مع مجموعتنا الرائعة من زيوت الزيتون والأركان. انغمس في تجربة لا تُنسى ، حيث تلتقي التقاليد والجودة لتحسين حياتنا اليومية. زيت الزيتون و زيت الأرڭان معروفين لآلاف السنين بفوائدهم المغذية ونكهاتهم اللذيذة، تأتي من الأراضي المشمسة في سهل سوس وسط المغرب، و سهول الأطلس المتوسط في بني ملال، المشهورة بمناطقها الزراعية الشاسعة و اللتي تنتج زراعة مختلفة و ذات جودة عالمية",
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
function changeLanguage(selectedLang) {
  for (const key in translations[selectedLang]) {
    const element = document.getElementById(key);
    if (element) {
      if (element.placeholder !== undefined) {
        element.placeholder = translations[selectedLang][key];
      } else {
        element.textContent = translations[selectedLang][key];
      }
    }
  }

  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (phoneInput && emailInput && messageInput) {
    phoneInput.placeholder = translations[selectedLang]["placeholder-phone"];
    emailInput.placeholder = translations[selectedLang]["placeholder-email"];
    messageInput.placeholder = translations[selectedLang]["placeholder-message"];
  }

  localStorage.setItem("selectedLang", selectedLang);
}

const storedLang = localStorage.getItem("selectedLang");
if (storedLang) {
  document.getElementById("lang-select").value = storedLang;
}

changeLanguage(storedLang); // Appel initial pour mettre à jour la langue par défaut


const navbar = document.getElementById('nav');
const langselect = document.getElementById('lang-select');
let prevScrollPos = window.pageYOffset;
let isNavbarHidden = false;

function handleScroll() {
  // Vérifier la largeur de la fenêtre
  if (window.innerWidth >= 768) {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      if (isNavbarHidden) {
        navbar.style.transform = 'translateY(0)';
        langselect.style.transform = 'translateY(0)';
        isNavbarHidden = false;
      }
    } else {
      if (!isNavbarHidden) {
        navbar.style.transform = 'translateY(-110%)';
        langselect.style.transform = 'translateY(-100vh)';
        isNavbarHidden = true;
      }
    }

    prevScrollPos = currentScrollPos;
  }
}

window.addEventListener('scroll', handleScroll);
