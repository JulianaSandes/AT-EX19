export interface IAtores{
  nome: string;
  DataNascimento: string;
  serieParticipa: string;
  classificacao: number;
  foto: string;
  generos: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
