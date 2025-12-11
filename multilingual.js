const translations = {
  en: {
    title: "Hospital Information",
    directions_title: "Directions"
  },
  hi: {
    title: "अस्पताल जानकारी",
    directions_title: "दिशाएँ"
  },
  kn: {
    title: "ಆಸ್ಪತ್ರೆ ಮಾಹಿತಿ",
    directions_title: "ದಿಕ್ಕುಗಳು"
  }
};

function setLanguage(lang) {
    document.getElementById("page_title").innerText = translations[lang].title;
    document.getElementById("dir_title").innerText = translations[lang].directions_title;
}