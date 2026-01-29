document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');

  const images = [
    "WhatsApp Image 2026-01-02 at 08.58.48 (3).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.48 (5).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (1).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (15).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (16).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (17).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (19).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (2).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (20).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (21).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (22).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (23).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (24).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (25).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (26).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (27).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (28).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (29).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (30).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (31).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (32).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (33).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (34).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (35).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (36).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (37).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (38).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (4).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (40).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (41).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (42).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (43).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (46).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (47).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (48).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (49).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (50).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (51).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (53).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (54).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (55).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (56).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (57).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (58).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (59).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (6).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (60).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (61).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (62).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (65).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (66).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (67).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (68).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (69).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (70).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (71).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (72).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50 (8).jpeg",
"WhatsApp Image 2026-01-02 at 08.58.50.jpeg",

  ];

  images.forEach(file => {
    const img = document.createElement('img');
    img.src = `assets/gallery/${file}`;
    img.alt = "Galerie Bild";

    // Wenn Bild fehlt → nicht anzeigen
    img.onerror = () => {
      img.remove();
    };

    galleryGrid.appendChild(img);
  });

  /* ==========================
     LIGHTBOX SYSTEM
  ========================== */

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const backdrop = document.querySelector('.lightbox-backdrop');

  // Event Delegation für Galerie
  galleryGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      openLightbox(e.target.src);
    }
  });

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
    requestAnimationFrame(() => {
      lightbox.classList.add('active');
    });

    // Scroll sperren
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }, 300);

    document.body.style.overflow = '';
  }

  // Klick außerhalb schließt
  backdrop.addEventListener('click', closeLightbox);

  // ESC schließt
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});