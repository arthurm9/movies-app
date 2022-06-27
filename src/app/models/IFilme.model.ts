export interface IFilme {
  nome: string;
  dataLancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
  // o '?' faz com que o campo não precise ser preenchido
  pagina?: string;
}
