import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';


import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors'
@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl;

  text: string;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);

    this.store.pipe(select(fromHomeSelectors.selectHomeText)).subscribe(text=> this.text = text);
  }

  doSearch() {
    console.log(this.searchControl.value);
    const text = this.searchControl.value;
    this.store.dispatch(fromHomeActions.changeText({text}));

  }
}