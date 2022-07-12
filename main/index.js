import Book from '../modules/books.js';
import { displayBooks } from '../modules/bookList.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Date();
  const book = new Book(title, author, id);
  book.newBook();
  if (title && author) {
    displayBooks(book.title, book.author, book.id);
  }
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

const list = document.getElementById('all-book');
const add = document.querySelector('.form-section');
const contacts = document.getElementById('contacts');
const listLink1 = document.getElementById('con-link1');
const listLink2 = document.getElementById('con-link2');
const listLink3 = document.getElementById('con-link3');

listLink1.addEventListener('click', () => {
  list.classList.remove('show');
  listLink1.classList.add('active');
  contacts.classList.add('show');
  listLink3.classList.remove('active');
  listLink2.classList.remove('active');
  add.classList.add('show');
});

listLink2.addEventListener('click', () => {
  listLink2.classList.add('active');
  add.classList.remove('show');
  list.classList.add('show');
  listLink1.classList.remove('active');
  contacts.classList.add('show');
  listLink3.classList.remove('active');
});

listLink3.addEventListener('click', () => {
  contacts.classList.remove('show');
  listLink3.classList.add('active');
  list.classList.add('show');
  listLink1.classList.remove('active');
  listLink2.classList.remove('active');
  add.classList.add('show');
});

const date = document.getElementById('date');
const shownDate = [Date().split(' ').splice(1, 4).join(' ')];
date.append(shownDate);