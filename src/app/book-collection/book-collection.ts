import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-collection',
  imports: [
    CommonModule
  ],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.sass'
})
export class BookCollection {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}