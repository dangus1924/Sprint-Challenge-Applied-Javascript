// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (res => {
    console.log(res.data);
    res.data.articles.bootstrap.forEach(article => cardCreator(article))
    res.data.articles.javascript.forEach(article => cardCreator(article))
    res.data.articles.jquery.forEach(article => cardCreator(article))
    res.data.articles.node.forEach(article => cardCreator(article))
    res.data.articles.technology.forEach(article => cardCreator(article))
});

const cardCreator = (obj) => {
    const cardContainer = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const imgDivIMG = document.createElement('img');
    const authorSpan = document.createElement('span');

    //class list
    cardContainer.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    

    headlineDiv.textContent = obj.headline;
    imgDivIMG.src = obj.authorPhoto;
    authorSpan.textContent = `By ${obj.authorName}`;

    

     cardsContainer.appendChild(cardContainer);
    
}