/**
 * GAIA 2.0 - Gallery & Lightbox Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentIndex = 0;
  let visibleItems = Array.from(galleryItems);

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => { item.style.opacity = '1'; }, 50);
        } else {
          item.style.display = 'none';
        }
      });

      visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  // Open Lightbox
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
      currentIndex = visibleItems.indexOf(item);
      openLightbox(item);
    });
  });

  function openLightbox(item) {
    if (!lightbox || !item) return;
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-title')?.textContent || '';
    const desc = item.getAttribute('data-desc') || '';

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="color: #94a3b8; font-size: 0.9rem;">${desc}</span>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function showPrev() {
    if (visibleItems.length === 0) return;
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(visibleItems[currentIndex]);
  }

  function showNext() {
    if (visibleItems.length === 0) return;
    currentIndex = (currentIndex + 1) % visibleItems.length;
    openLightbox(visibleItems[currentIndex]);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
});
