import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : Category[] = [];
  currentCategory : Category;
  emptyCategory : Category;
  //constructorda bir değişken tanımladığımızda publicmiş gibi davranır.Dışardan categoryComponente erişen birinin categoryService de erişmesini istemiyorum.O yüzden private tanımlama yapıyoruz.
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data;
    })
  }

  setCurrentCategory(category : Category){
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category : Category){
   if(category == this.currentCategory){
    return "list-group-item active";
   }
   else{
    return "list-group-item";
   }
  }
  cleanCurrentCategory(){
    this.currentCategory = this.emptyCategory;
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }

    
}
}
