import sayHi from './modules/test.js';

sayHi();

const articleSection = document.querySelector('#articles-container');

function addArticle(){
  const articleTemplate = document.querySelector('#article');
  const articleTemplateClone = articleTemplate.content.cloneNode(true);
  articleSection.append(articleTemplateClone);
}

for(let i = 0; i < 8; i++){
  addArticle();
}