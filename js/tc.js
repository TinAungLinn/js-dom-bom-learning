// Variables

fonts = [
  "65Art House",
  "70Art House",
  "Adobe Heiti Std",
  "Adobe Caslon Pro",
  "Algerian",
  "Bauhaus 93",
];

//Selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText");
const synth = window.speechSynthesis;

const listen = () => {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToText.classList.add("active");
    speechToText.innerHTML = `
    <div class="spinner-border text-white spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    `;
  });

  recognition.addEventListener("end", () => {
    speechToText.classList.remove("active");
    speechToText.innerHTML = `
    <i class=" bi bi-mic"></i>
    `;
  });

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    text.value += transcript;
  };
};

const speak = (text) => {
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
  utterThis.addEventListener("start", () => {
    textToSpeech.classList.add("active");
  });
  utterThis.addEventListener("end", () => {
    textToSpeech.classList.remove("active");
  });
};

fonts.forEach((font) => {
  fontFamily.append(new Option(font, font));
});

// Action
//text ထဲမှာစာရေးတာနဲ့‌ output မှာတစ်ခါတည်းပြ

text.addEventListener("keyup", (event) => {
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
  output.style.fontFamily = fontFamily.value;
});

textToSpeech.addEventListener("click", () => {
  speak(text.value);
});

speechToText.addEventListener("click", listen);
