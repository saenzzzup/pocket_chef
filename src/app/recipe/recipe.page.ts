import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../service/recipes.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  public id: string;
  public recipe: any;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private recipesService: RecipesService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipeData(this.id).subscribe( data => {
      this.recipe = data;
    });
  }

}
