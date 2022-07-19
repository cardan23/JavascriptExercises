// Exercise 05

// Constructor functions exercise

//1. Constructor function pattern
function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

//checking result in console
let post = new BlogPost('Techcrunch', 'some info here', 'Michael Arrington');
console.log(post);