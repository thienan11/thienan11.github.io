// // const sections = document.querySelectorAll('section');
// const sections = document.querySelectorAll('wrapper');
// const navLi = document.querySelectorAll('li');

// window.addEventListener('scroll', () => {
//   let current = '';
//   sections.forEach( section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (scrollY >= (sectionTop - sectionHeight / 3)) {
//       current = section.getAttribute('id');
//     }
//   })
// })

// navLi.forEach(li => {
//   li.classList.remove('active');
//   if (li.classList.contains(current)){
//     li.classList.add('active')
//   }
// })

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("article[id]");
  const navLinks = document.querySelectorAll("#nav a");

  function highlightNavLink() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`#nav a[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);
});
