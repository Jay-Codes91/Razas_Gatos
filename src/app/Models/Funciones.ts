export interface IGetGatosHeader{
    getNomGatos(): void;
    buscar(id: any): void;
}

export interface IGetAllGatos{
    getAllGatos(): void;
}

export interface IGetUnGato{
    getUnGato(nom: string): void;
}