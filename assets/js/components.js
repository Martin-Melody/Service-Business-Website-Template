const siteData = {
  businessName: 'LuxeService',
  phone: '(555) 014-7823',
  email: 'hello@luxeservice.com',
  address: '245 Market Street, Suite 200, Your City',
  socials: [
    { label: 'Instagram', url: '#' },
    { label: 'Facebook', url: '#' },
    { label: 'TikTok', url: '#' }
  ],
  navLinks: [
    { href: 'index.html', label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'about.html', label: 'About' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'contact.html', label: 'Contact' }
  ],
  hours: [
    ['Monday', '9:00 AM - 6:00 PM'],
    ['Tuesday', '9:00 AM - 7:00 PM'],
    ['Wednesday', '9:00 AM - 7:00 PM'],
    ['Thursday', '9:00 AM - 8:00 PM'],
    ['Friday', '9:00 AM - 8:00 PM'],
    ['Saturday', '10:00 AM - 6:00 PM'],
    ['Sunday', 'Closed']
  ]
};

const services = [
  { name: 'Signature Service', description: 'Personalized session tailored to your style and goals.', price: '$55+', duration: '45 min', category: 'Popular' },
  { name: 'Premium Service', description: 'A complete experience with enhanced care and detail.', price: '$85+', duration: '75 min', category: 'Popular' },
  { name: 'Express Service', description: 'Quick refresh for clients with busy schedules.', price: '$35+', duration: '30 min', category: 'Essentials' },
  { name: 'Specialty Treatment', description: 'Targeted treatment for long-lasting results and comfort.', price: '$95+', duration: '90 min', category: 'Treatments' },
  { name: 'Consultation Session', description: 'Professional advice and recommendations before booking.', price: '$25', duration: '20 min', category: 'Essentials' },
  { name: 'Event Package', description: 'Bundled services designed for events and special occasions.', price: '$150+', duration: '120 min', category: 'Packages' }
];

const teamMembers = [
  { name: 'Jordan Lee', role: 'Senior Specialist', bio: 'Known for precise technique and personalized client care.', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80' },
  { name: 'Avery Morgan', role: 'Service Expert', bio: 'Focused on natural, modern looks and premium experiences.', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80' },
  { name: 'Riley Chen', role: 'Client Experience Lead', bio: 'Creates comfortable, welcoming appointments for every guest.', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80' }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80'
];

const testimonials = [
  { quote: 'Booking was easy and the service quality was outstanding. I left feeling amazing.', name: 'Taylor M.', rating: 5 },
  { quote: 'The team is professional, friendly, and incredibly skilled. Highly recommend for busy professionals.', name: 'Samira K.', rating: 5 },
  { quote: 'A premium experience from start to finish. Great communication and excellent results.', name: 'Chris R.', rating: 5 }
];

function starRating(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function serviceCard(service) {
  return `<article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
    <p class="text-sm font-medium text-teal-700">${service.category}</p>
    <h3 class="mt-3 text-xl font-semibold text-slate-900">${service.name}</h3>
    <p class="mt-3 text-slate-600">${service.description}</p>
    <div class="mt-6 flex items-center justify-between">
      <div>
        <p class="text-lg font-semibold text-slate-900">${service.price}</p>
        <p class="text-sm text-slate-500">${service.duration}</p>
      </div>
      <a href="contact.html#booking" class="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800">Book</a>
    </div>
  </article>`;
}

function teamCard(member) {
  return `<article class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
    <img src="${member.image}" alt="${member.name}" class="h-60 w-full rounded-xl object-cover" loading="lazy" />
    <h3 class="mt-4 text-xl font-semibold text-slate-900">${member.name}</h3>
    <p class="text-teal-700">${member.role}</p>
    <p class="mt-2 text-slate-600">${member.bio}</p>
    <div class="mt-4 flex gap-3 text-sm font-medium">
      <a href="#" class="text-slate-500 hover:text-slate-900">LinkedIn</a>
      <a href="#" class="text-slate-500 hover:text-slate-900">Instagram</a>
    </div>
  </article>`;
}

function testimonialCard(item) {
  return `<article class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <p class="text-amber-500" aria-label="${item.rating} out of 5 stars">${starRating(item.rating)}</p>
    <blockquote class="mt-3 text-slate-700">“${item.quote}”</blockquote>
    <p class="mt-4 text-sm font-semibold text-slate-900">— ${item.name}</p>
  </article>`;
}
