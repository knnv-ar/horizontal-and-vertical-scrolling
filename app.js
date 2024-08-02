const stickySections = [...document.querySelectorAll('.sticky')];
// console.log(stickySections);
let images = [
  // 'http://dr.savee-cdn.com/things/6/4/8dc54f76c3a306e61eb401.webp',
  // 'http://dr.savee-cdn.com/things/6/4/8dbbfa1740c9070b3c6581.webp',
  // 'http://dr.savee-cdn.com/things/6/4/827433587eb3b7a968f00a.webp',
  // 'http://dr.savee-cdn.com/things/6/4/82cc78905b3becf0f56637.webp'
  'assets/art1.webp',
  'assets/art2.jpg',
  'assets/art3.webp',
  'assets/art4.jpg'
]

images.forEach(img => {
  stickySections.forEach(section => {
    let image = document.createElement('img');
    image.src = img;
    section.querySelector('.scroll_section').appendChild(image);
  })
})

window.addEventListener('scroll', (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section');

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}