class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addbook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const books = [];
    const book = {
      title: title.value,
      author: author.value,
    };

    books.push(book);
    if (JSON.parse(window.localStorage.getItem('bookList')) === null) {
        window.localStorage.setItem('bookList', JSON.stringify(books));
    } else {
      JSON.parse(localStorage.getItem('bookList'));
      books.push(book);
      window.localStorage.setItem('bookList', JSON.stringify(books));
    }
  }

  static remove(title) {
    const books = JSON.parse(window.localStorage.getItem('bookList'));
    books.filter((book) => book.title !== title);
    window.localStorage.setItem('bookList', JSON.stringify('book'));
  }

  static showBooks() {
    const booksUl = document.getElementById('all-books');
    const li = document.createElement('li');
    li.setAttribute('class', 'listed-bk');
    const span = document.createElement('span');
    span.setAttribute('class', 'li-item');
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    const books = JSON.parse(window.localStorage.getItem('bookList'));
    for (let i = 0; i <= books.length; i += 1) {
      span.innerHTML += `<q>${books[i].title}<q> by ${books[i].author}`;
      li.append(span, remove);
      booksUl.append(li);
    }
  }
}

document.getElementById('add-btn').onclick = () => {
  Book.addbook();
  Book.showBooks();
};
