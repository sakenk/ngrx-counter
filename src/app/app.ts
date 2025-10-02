import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounter } from './my-counter/my-counter';
import { BookList } from './book-list/book-list';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AsyncPipe,
    MyCounter,
    BookList
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  
  private booksService = inject(GoogleBooksService);
  private store: Store = inject(Store);
  
  bookCollection$ = this.store.select(selectBookCollection);
  books$ = this.store.select(selectBooks);
  
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAddToCollection(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
}
