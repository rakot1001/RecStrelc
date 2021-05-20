'use strict';

const newsPaper = {
  title: 'FC daily',
  articles: ['Test1','Heading','String1','Article1'],

  showArticles() {
    this.articles.forEach(function logItem(currentArticle, index){
      console.log(`${this.title} => ${index + 1}: ${currentArticle}`); 
    });
  },
};

newsPaper.showArticles();
