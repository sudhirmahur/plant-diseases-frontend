// Future JavaScript logic (e.g., dynamic animations, form handling) can go here
console.log("Welcome to PlantDoctor 🌱");


const uploadInput = document.getElementById("plantImage");
const previewImage = document.getElementById("previewImage");
const previewContainer = document.getElementById("previewContainer");

uploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    previewImage.src = URL.createObjectURL(file);
    previewContainer.classList.remove("hidden");
  }
});
