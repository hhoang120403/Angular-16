import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged = new EventEmitter<string>();

  // Optional 2nd argument of @ViewChild
  // read: Use it to read the difference token from the queried elements.
  // static: Determines when the query is resolved.
  //       true: is when the view initialized (before the first change detection run) for the first time.
  //       false: is when the view is checked (after each change detection run).
  @ViewChild('searchInput', { static: true })
  searchInputEl: ElementRef<HTMLInputElement> | null = null;

  onSearchTextChanged() {}

  updateSearchText() {
    // this.searchText = event.target.value;
    this.searchText = this.searchInputEl?.nativeElement.value || '';
    this.searchTextChanged.emit(this.searchText);
  }
}
