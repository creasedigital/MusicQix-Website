// Map Section
var map;
function initMap() {
  const location = { lat: 6.5973, lng: 3.3904 }
  const map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 8
  });
  const marker = new google.maps.Marker({ position: location, map })
}

// Sticky menu background
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.getElementById('navbar').style.opacity = 0.9
  } else {
    document.getElementById('navbar').style.opacity = 1
  }
})

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    },
      1500
    )
  }
})
