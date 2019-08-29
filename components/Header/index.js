// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())

function Header() {
    const headerDiv = document.createElement('div')
    const headerDateSpan = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const headerTempSpan = document.createElement('span')

    headerDateSpan.textContent = 'MARCH 28, 2019'
    headerH1.textContent = 'Lambda Times';
    headerTempSpan.textContent = '98°';

    // classList
    headerDiv.classList.add('header')
    headerDateSpan.classList.add('date')
    headerTempSpan.classList.add('temp')

    headerDiv.appendChild(headerDateSpan);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerTempSpan)

    return headerDiv
}
