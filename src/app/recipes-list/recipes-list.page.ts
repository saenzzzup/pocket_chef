import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';

import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {

  public recipes = [];

  constructor(
    private platform: Platform,
    private loadingController: LoadingController,
    private recipesService: RecipesService,
  ) {
    this.platform.ready().then( () => {
      this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Cargando recetas...',
        duration: 2000
      }).then( (loadingElement) => {
        loadingElement.present();
        setTimeout( () => {
          this.recipesService.getRecipes('fake.url.com').subscribe( data => {
            this.recipes = data;
          });
        }, 2000);
      });
    });
  }

  ngOnInit() {
  }

}
