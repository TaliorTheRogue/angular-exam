export interface RickMortyI{
  id?:number;
  title: string;
  description: string;
  createdDate: Date;
  likes: number;
  image: string;
  isLiked?: boolean;
}

export interface RickMortyModelI{
  websnap?:RickMortyI;
}