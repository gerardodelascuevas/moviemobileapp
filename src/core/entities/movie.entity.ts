export interface Movie{
    id: number; 
    title: string; 
    description: string; 
    realeseDate: Date; 
    poster: string; 
    backdrop: string; 
    rating: number;

}

export interface FullMovie extends Movie {
    genres: string[]; 
    duration: number; 
    budget: number; 
    originalTitle: string; 
    productionCompanies: string[]; 
}