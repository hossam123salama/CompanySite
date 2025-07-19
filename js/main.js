// Scroll to top (لو عايز تضيفه)
window.addEventListener('scroll', function () {
  const topBtn = document.getElementById('scrollTopBtn');
  if (topBtn) {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  }
  
  // إغلاق القائمة الجانبية عند التمرير في الموبايل
  const navbar = document.getElementById('navbar');
  if (navbar && navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', function(event) {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.querySelector('.toggle-btn');
  
  if (navbar && navbar.classList.contains('show')) {
    // إذا تم النقر خارج القائمة وزر التبديل
    if (!navbar.contains(event.target) && !toggleBtn.contains(event.target)) {
      navbar.classList.remove('show');
    }
  }
});

// إغلاق القائمة عند تغيير حجم النافذة
window.addEventListener('resize', function() {
  const navbar = document.getElementById('navbar');
  if (navbar && navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
});

function hideFloatingButtons() {
  const buttons = document.getElementById("floating-buttons");
  if (buttons) {
    buttons.style.display = "none";
  }
}

 function showContactButtons() {
    document.getElementById("contactButtons").style.display = "flex";
    document.getElementById("toggleMessageBtn").style.display = "none";
  }

  function hideContactButtons() {
    document.getElementById("contactButtons").style.display = "none";
    document.getElementById("toggleMessageBtn").style.display = "block";
  }

  function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
  }
  
  // إغلاق القائمة عند النقر على أي رابط
  document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        if (navbar && navbar.classList.contains('show')) {
          navbar.classList.remove('show');
        }
      });
    });
  });


  


