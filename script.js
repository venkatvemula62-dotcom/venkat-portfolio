// smooth scroll only for in-page anchor links (#...)
document.querySelectorAll('.sidebar-nav a').forEach(a => {
  const href = a.getAttribute('href') || '';
  if (!href.startsWith('#')) return; // ignore external links (e.g., resume.html)

  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // offset if you have a fixed header — currently not needed, but left here for future
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


