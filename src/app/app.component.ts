import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories;
  currentCategory;


  constructor(private catalogueService: CatalogueService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.catalogueService.getResource("/categories")
      .subscribe(data => {
        this.categories = data;
      }, error => {
        console.log(error);
      })
  }

  getProductsByCat(c) {
    this.currentCategory = c;
    this.router.navigateByUrl('/products/2/' + c.id);
  }

  onSelectedProducts() {
    this.currentCategory = undefined;
    this.router.navigateByUrl('/products/1/0');
  }
}
