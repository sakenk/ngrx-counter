import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  imports: [
    CommonModule
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.sass'
})
export class BookList {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}