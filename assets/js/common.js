function navbar(activePage = 'index.html') {
  const links = siteData.navLinks
    .map((link) => `<a href="${link.href}" class="${activePage === link.href ? 'text-teal-700' : 'text-slate-600'} text-sm font-medium transition hover:text-slate-900">${link.label}</a>`)
    .join('');

  return `<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
      <a href="index.html" class="text-xl font-bold tracking-tight text-slate-900">${siteData.businessName}</a>
      <nav class="hidden items-center gap-8 md:flex">${links}</nav>
      <a href="contact.html#booking" class="hidden rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 md:inline-flex">Book Now</a>
      <button id="menu-toggle" class="rounded-md p-2 text-slate-700 md:hidden" aria-label="Toggle navigation" aria-expanded="false">☰</button>
    </div>
    <nav id="mobile-nav" class="hidden border-t border-slate-200 bg-white px-4 py-4 md:hidden">
      <div class="flex flex-col gap-4">${links}<a href="contact.html#booking" class="rounded-full bg-teal-700 px-5 py-2 text-center text-sm font-semibold text-white">Book Now</a></div>
    </nav>
  </header>`;
}

function footer() {
  const links = siteData.navLinks.map((link) => `<a href="${link.href}" class="text-sm text-slate-500 transition hover:text-slate-900">${link.label}</a>`).join('');
  const socials = siteData.socials.map((social) => `<a href="${social.url}" class="text-sm text-slate-500 hover:text-slate-900">${social.label}</a>`).join('');
  const hours = siteData.hours.slice(0, 3).map(([day, value]) => `<p class="text-sm text-slate-500">${day}: ${value}</p>`).join('');

  return `<footer class="mt-20 border-t border-slate-200 bg-slate-50">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
      <div>
        <h3 class="text-lg font-semibold text-slate-900">${siteData.businessName}</h3>
        <p class="mt-3 text-sm text-slate-500">Reusable website template for modern appointment-based service businesses.</p>
      </div>
      <div><h4 class="font-semibold text-slate-900">Navigation</h4><div class="mt-3 flex flex-col gap-2">${links}</div></div>
      <div><h4 class="font-semibold text-slate-900">Contact</h4><p class="mt-3 text-sm text-slate-500">${siteData.phone}<br/>${siteData.email}<br/>${siteData.address}</p></div>
      <div><h4 class="font-semibold text-slate-900">Hours</h4><div class="mt-3 space-y-1">${hours}</div><div class="mt-4 flex gap-3">${socials}</div></div>
    </div>
    <div class="border-t border-slate-200 py-4 text-center text-sm text-slate-500">© ${new Date().getFullYear()} ${siteData.businessName}. All rights reserved.</div>
  </footer>`;
}

function openingHours() {
  return `<div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 class="text-lg font-semibold text-slate-900">Opening Hours</h3>
      <ul class="mt-4 space-y-2">
        ${siteData.hours.map(([day, value]) => `<li class="flex justify-between text-sm text-slate-600"><span>${day}</span><span>${value}</span></li>`).join('')}
      </ul>
    </div>`;
}

function initLayout(activePage) {
  document.getElementById('site-header').innerHTML = navbar(activePage);
  document.getElementById('site-footer').innerHTML = footer();
  const toggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('hidden');
    });
  }
}

function injectServices(selector, limit = services.length) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = services.slice(0, limit).map(serviceCard).join('');
}

function injectTeam(selector, limit = teamMembers.length) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = teamMembers.slice(0, limit).map(teamCard).join('');
}

function injectTestimonials(selector) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = testimonials.map(testimonialCard).join('');
}

function injectGallery(selector, limit = galleryImages.length) {
  const target = document.querySelector(selector);
  if (!target) return;

  target.innerHTML = galleryImages.slice(0, limit).map((image, index) => `<button class="gallery-item overflow-hidden rounded-2xl" data-image="${image}" aria-label="Open gallery image ${index + 1}"><img src="${image}" alt="Portfolio sample ${index + 1}" class="h-64 w-full object-cover" loading="lazy"/></button>`).join('');
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const image = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !image || !closeBtn) return;

  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('.gallery-item');
    if (!button) return;
    image.src = button.dataset.image;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });

  function closeLightbox() {
    modal.classList.add('hidden');
    image.src = '';
    document.body.classList.remove('overflow-hidden');
  }

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}
