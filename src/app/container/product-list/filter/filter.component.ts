import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [FormsModule ],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() instock: number = 0;
  @Input() outOfStock: number = 0;

  @Output() selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  onSelectedRadioButtonChanged() {
    
    this.selectedRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
