const services = [
  { id: 1, title: "فك وتركيب مكيفات", image: "Images/im1.jpg", description: "تفاصيل الخدمة 1..." },
  { id: 2, title: "توريد وتركيب", image: "Images/im3.jpg", description: "تفاصيل الخدمة 2..." },
  { id: 3, title: "تأسيس نحاس", image: "Images/im4.webp", description: "تفاصيل الخدمة 3..." },
  { id: 4, title: "شباك وصيانة", image: "Images/im5.webp", description: "تفاصيل الخدمة 4..." },
  { id: 5, title: "أجهزة منزلية", image: "Images/im6.webp", description: "تفاصيل الخدمة 5..." },
  { id: 6, title: "صيانة دورية", image: "Images/im7.jpg", description: "تفاصيل الخدمة 6..." },
  { id: 7, title: "تمديد كهرباء", image: "Images/im8.jpg", description: "تفاصيل الخدمة 7..." },
  { id: 8, title: "مشاكل التصريف", image: "Images/im9.jpg", description: "تفاصيل الخدمة 8..." },
  { id: 9, title: "شحن فريون", image: "Images/freon.jpg", description: "تفاصيل الخدمة 9..." },
  { id: 10, title: "نحاس مولر", image: "Images/muller.jpg", description: "تفاصيل الخدمة 10..." },
  { id: 11, title: "صيانة الفنادق", image: "Images/hotel.jpg", description: "تفاصيل الخدمة 11..." },
  { id: 12, title: "الطوارئ", image: "Images/emergency.jpg", description: "تفاصيل الخدمة 12..." }
];

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));
const service = services.find(s => s.id === id);

if (service) {
  document.getElementById("service-title").textContent = service.title;
  document.getElementById("service-image").src = service.image;
  document.getElementById("service-description").textContent = service.description;
} else {
  document.querySelector(".service-details").innerHTML = `
    <h2>الخدمة غير موجودة</h2>
    <p>لم يتم العثور على تفاصيل هذه الخدمة.</p>
    <a href="services.html" class="back-btn">⬅️ الرجوع</a>
  `;
}
