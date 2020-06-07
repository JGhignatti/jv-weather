import { createAction, props } from '@ngrx/store';

import { Bookmark } from 'src/app/shared/models/bookmark.model';

export const removeBookmark = createAction(
  '[Bookmarmark] Remove Bookmark',
  props<{ id: number }>(),
);

export const toggleBookmarById = createAction(
  '[Bookmarks] Toggle Bookmarks By Id',
  props<{ id: number }>(),
);

export const updateBookmarksList = createAction(
  '[Bookmarks] Update Bookmarks List',
  props<{ list: Bookmark[] }>(),
);
