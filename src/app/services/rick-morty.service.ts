import { inject, Injectable } from "@angular/core";
import { RickMortyI } from "@/interfaces/rick-morty.interface";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class RickMortyService {
  private rickMortyApiUrl = "https://rickandmortyapi.com/api";
  private http = inject(HttpClient);

  rickmortys: RickMortyI[] = [
  ];

  getRickMortyList(): RickMortyI[] {
    return this.rickmortys;
  }

  getRickMortyByID(rickMortyId: number): RickMortyI|undefined{
    const rickMortySnap = this.rickmortys.find(rickMorty => rickMorty.id === rickMortyId);
    if(!rickMortySnap) return undefined;
    return rickMortySnap;
  }

}