const galleryImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

const gallery = document.getElementById("gallery-grid");

galleryImages.forEach(file => {
  const img = document.createElement("img");
  img.src = `assets/gallery/${file}`;
  img.alt = "Galerie Bild";
  gallery.appendChild(img);
});
