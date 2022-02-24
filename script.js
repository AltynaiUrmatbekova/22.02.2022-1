// document.querySelector('select').addEventListener('input', function() {
//     const value = this.value;
//     document.querySelectorAll('ul').forEach(function(ul) {
// if (value === ul.id) {
//     ul.className = '';
// }
// else { 
//     ul.className = 'hidden';
// }
//     });
// });

// document.querySelector('select').addEventListener('input', function() {
//     document.querySelectorAll('ul').forEach(
//         ul => ul.classlist.toggle('hidden', this.value !== ul.id)
//     );
// });

const articles = [
    {
        id: "article-1",
        title: "Hello world",
        image: "./photo.jpg",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab hic inventore quod repudiandae modi, minus necessitatibus, temporibus, similique eos placeat molestias. Ipsa sunt culpa cumque ipsam eaque explicabo labore!"
    },
    {
        id: "article-2",
        title: "Hello world",
        image: "./photo.jpg",
        body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab hic inventore quod repudiandae modi, minus necessitatibus, temporibus, similique eos placeat molestias. Ipsa sunt culpa cumque ipsam eaque explicabo labore!"
    },
    {
        id: "article-2",
        title: "Hello world",
        image: "./photo.jpg",
        body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab hic inventore quod repudiandae modi, minus necessitatibus, temporibus, similique eos placeat molestias. Ipsa sunt culpa cumque ipsam eaque explicabo labore!"
    },
];
const main = document.querySelector('main');
articles.forEach(article => {
    const articleElement =document.createElement('article');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    
    articleElement.id = article.id;
       h1.textContent = article.title;
       img.src = article.image;
       p.textContent = article.body;

        articleElement.append(h1);
        articleElement.append(img);
        articleElement.append(p);
        main.append(articleElement);
});