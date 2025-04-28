import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  // imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = "Mens wear";



  updateSearchText(event : any){
    this.searchText = event.target.value;

    console.log("searchtextLog>", event.target.value);



  }

}
