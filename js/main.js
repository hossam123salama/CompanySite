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
    document.getElementById("navbar").classList.toggle("show");
  }

