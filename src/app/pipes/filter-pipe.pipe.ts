import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../models/product/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText : string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() :"" // filterText varsa onu küçük harfe çevir.Yoksa bişey yapma.
    return filterText?value.filter((p:Product) => p.productName.toLocaleLowerCase().indexOf(filterText)!==-1) : value ; // valueleri yani var olan datadaki isimi de küçük harflere çeviriyoruz.
  }

}
