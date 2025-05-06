import { RickMortyI, RickMortyModelI } from "../../app/interfaces/rick-morty.interface";

export class RickMorty implements RickMortyModelI{

  constructor(public websnap: RickMortyI) {
    this.websnap.isLiked = false;
  }

}