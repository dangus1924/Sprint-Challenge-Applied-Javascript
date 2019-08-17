/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator() {
  const carousel = document.createElement('div')
  const carouselLeftDiv = document.createElement('left-button')
  const carouselRightDiv = document.createElement('right-button')
  const mountainIMG = document.createElement('img')
  const computerIMG = document.createElement('img')
  const treeIMG = document.createElement('img')
  const turntableIMG = document.createElement('img')

  //class list
  carouselLeftDiv.classList.add('left-button')
  carouselLeftDiv.textContent = '<'
  carouselRightDiv.classList.add('right-button')
  carouselRightDiv.textContent = '>'

  //append
  carousel.appendChild()

  return carousel
}