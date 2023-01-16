import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  // 1. se crea una variable con la api
  urlBase = "https://pokeapi.co/api/v2";


  //2. se crea la variable http de tipo HttpClient en el constructor 
  constructor(private http: HttpClient) {
    // comando para validar
    console.log('Pokedex')
   }

  //  3. se crea una funcion que consulte por medio de get los datos del api
  // 3.1 se declara un indice de tipo string para consultar un dato especifico del api
   getPokemon(index: string){
    // 4. se retorna el valor especifico consultado con el indice desde el api
    return this.http.get<any>(`${this.urlBase}/pokemon/${index}`);
   }
}
