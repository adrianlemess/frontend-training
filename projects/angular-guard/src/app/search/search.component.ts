import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public form: FormGroup;
  public users: any[];

  constructor(
    private searchService: SearchService, 
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      search: ''
    });
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(value => {
        this.searchService.getPeopleByName(value.search)
          .subscribe(users => {
            this.users = users;
          });
      });
  }



}
