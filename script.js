fetch("./sentence.json")
  .then((response) => response.json())
  .then((data) => {
    window.allSentences = data.sentence;
  })
  .catch((error) => console.error("Error loading sentences:", error));

const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");
const emptyContainer = document.getElementById("emptyContainer");
const sentenceDisplay = document.getElementById("sentenceDisplay");

fileInput.addEventListener("change", onFileChange);

function onFileChange(e) {
  if (e.target.files && e.target.files[0]) {
    const imageUrl = URL.createObjectURL(e.target.files[0]);

    previewImage.src = imageUrl;
    previewImage.style.display = "block";

    emptyContainer.style.display = "none";

    const randomSentence = getRandomSentence();
    sentenceDisplay.textContent = randomSentence;
  }
}

function getRandomSentence() {
  if (window.allSentences && window.allSentences.length > 0) {
    return window.allSentences[
      Math.floor(Math.random() * window.allSentences.length)
    ];
  }
  return "สวยมากกกก";
}
