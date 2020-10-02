import { Injectable } from '@angular/core';
import {Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  getRecipes(url: string): Observable<number[]> {
    let testData = [];
    for (let index = 0; index < 15; index++) {
      testData.push('chile_en_nogada');
    }
    return of(testData);
  }

  getRecipeData(id: string): Observable<any> {
    let testData = {
      name: 'Chile en Nogada',
      intro: 'No esperes hasta septiembre para disfrutar... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, vitae ipsam?',
      ingredients: [
        '6 chiles poblanos, asados, pelados y desvenados',
        '1/2 kg de carne molida (la mitad de res y la mitad de cerdo)',
        '1/2 cebolla picada',
        '1/2 taza de puré de jitomate',
        '3 cdas. de almendras picadas',
        '3 cdas. de piñones',
        '1 durazno pelado y picado en cubos',
        '3 cdas. de pasas',
        '1 pera pelada y picada en cubos',
        '1 plátano macho picado en cubos',
        '4 cdas. de aceite',
        '1 taza de harina',
        '4 claras de huevo',
        'Aceite para freír',
        'Para la salsa',
        '100 g de nueces de Castilla peladas',
        '50 g de queso de cabra',
        '1/2 litro de leche',
        '1/4 de taza de oporto',
        'Para servir',
        '1 taza de granos de granada china',
        '1/2 taza de perejil'
      ],
      recipe: [
        'En una olla grande calienta el aceite y fríe la cebolla hasta que esté transparente. Agrega el plátano y dóralo un poco, después continúa con la pera y el durazno. Retira de la sartén y reserva.',
        'En otra sartén fríe la carne. Cuando comience a dorar, vierte el puré de jitomate junto con las pasas, almendras y piñones. Cocina a fuego bajo por 15 minutos y adiciona a la preparación anterior.',
        'Bate las claras a punto de nieve y añade las yemas.',
        'Rellena los chiles con el picadillo dulce, pásalos por harina y luego por el huevo. Fríelos en aceite caliente, girándolos para que doren por todos lados. Sácalos y colócalos en papel absorbente hasta que termines y reserva.',
        'Muele las nueces limpias, incorpora el queso y el oporto.',
        'Para servir, coloca un espejo de salsa, luego un chile relleno y baña con más salsa. Termina decorando con la granada y un poco de perejil.'
      ]
    };
    return of(testData);
  }
}
