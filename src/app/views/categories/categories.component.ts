import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
  categories: Category[];

  @Output()
  selectCategory = new EventEmitter<Category>();

  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    // this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  // tslint:disable-next-line:typedef
  showTasksByCategory(category: Category) {
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;

    this.selectCategory.emit(this.selectedCategory);
  }
}
