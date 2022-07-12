/* eslint-disable import/no-cycle */
import Book from './books.js';
/* eslint-disable import/prefer-default-export */
export const displayBooks = (title, author, id) => {
  const bookList = document.querySelector('.all-book');
  const items = document.createElement('li');
  items.innerHTML += `
    <div class="title-div"><td><q>${title} </q> by ${author}</td>
    </div>
       `;
  const Rbtn = document.createElement('button');
  Rbtn.textContent = 'Remove';
  Rbtn.className = 'Rbtn';
  items.appendChild(Rbtn);
  bookList.appendChild(items);

  Rbtn.addEventListener('click', () => {
    const book = new Book(title, author, id);
    id = Rbtn.id;
    book.remove();
    items.remove();
  });
};