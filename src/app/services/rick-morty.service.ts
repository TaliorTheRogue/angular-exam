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
    {
      "characters": "https://rickandmortyapi.com/api/character",
      "locations": "https://rickandmortyapi.com/api/location",
      "episodes": "https://rickandmortyapi.com/api/episode"
    }
  ];

  getRickMortyCharacterList(): RickMortyI[] {
    return this.rickmortys.characters;
  }

  getRickMortyLocationList() : RickMortyI[] {
    return this.rickmortys.locations;
  }

  getRickMortyEpisodeList() : RickMortyI[] {
    return this.rickmortys.episodes;
  }

  getRickMortyByID(rickMortyId: number): RickMortyI|undefined{
    const rickMortySnap = this.rickmortys.find(rickMorty => rickMorty.id === rickMortyId);
    if(!rickMortySnap) return undefined;
    return rickMortySnap;
  }

}