class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static books() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = this.books();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static remove(title) {
    const books = this.books();
    books.splice(title, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static showBooks() {
    const books = this.books();
    const booksUl = document.getElementById('all-books');
    const li = document.createElement('li');
    li.setAttribute('class', 'listed-bk');
    const span = document.createElement('span');
    span.setAttribute('class', 'li-item');
    const remove = document.createElement('button');
    remove.textContent = 'Remove';

    for (let i = 0; i <= books.length; i += 1) {
      span.innerHTML += `<q>${books[i].title}<q> by ${books[i].author}`;
      li.append(span, remove);
      booksUl.append(li);
    }
  }
}

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  Book.addBook(book);
  Book.showBooks();
});
