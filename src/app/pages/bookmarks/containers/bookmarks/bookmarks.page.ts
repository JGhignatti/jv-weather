import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { BookmarksState } from '../../state/bookmarks.reducer';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import * as fromBookmarksSelectors from '../../state/bookmarks.selectors';
import * as fromBookmarksActions from '../../state/bookmarks.actions';

@Component({
  selector: 'jv-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss']
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;

  constructor(private store: Store<BookmarksState>) {
  }

  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarksActions.removeBookmark({ id }));
  }
}
