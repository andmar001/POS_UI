import { Component, OnInit } from '@angular/core';
import { CustomTitleService } from '@shared/services/custom-title.service';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { CategoryService } from 'src/app/services/category.service';
import { componentSettings } from './category-list-config';
import { CategoryApi } from 'src/app/responses/category/category.response';

@Component({
  selector: 'vex-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  animations: [
    stagger40ms,
    scaleIn400ms,
    fadeInUp400ms
  ]
})
export class CategoryListComponent implements OnInit {

  component;

  constructor(
    cutomTitle: CustomTitleService,
    public _categoryService: CategoryService
  ){
    cutomTitle.set('Categorias')
  }

  ngOnInit(): void {
    this.component = componentSettings
  }

  rowClick( e:any ){
    let action = e.action
    let category = e.row

    switch (action) {
      case 'edit':
        this.CategoryEdit(category)
        break;
      case 'delete':
        this.CategoryRemove(category)
        break;
    }
    return false
  }

  CategoryEdit( row:CategoryApi ){

  }

  CategoryRemove( category:any ){

  }

}
