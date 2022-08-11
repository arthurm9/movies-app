export interface IFilme {
  nome: string;
  dataLancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
  pagina?: string;  // "?" = campo não precisa ser preenchido
}
