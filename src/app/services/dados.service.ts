import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  /* Serviço para armazenar dados de forma temporária (enquanto o programa estiver rodando) */

  // os dados serão armazenados num array
  private dados: any = [];

  constructor() { }

  // um serviço é composto por uma chave (index) do tipo string neste caso, e os dados propriamente ditos, que retornará um valor boolean
  // 'any' diz que pode ser armazenado qualquer tipo de dado
  setDados(index: string, dados: any): boolean{
    if(index){
      // armazena os dados no array
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }

  getDados(index: string): any {
    if(index){
      return this.dados[index];
    } else {
      return null;
    }
  }

  deleteDados(index: string): boolean {
    return delete this.dados[index];
  }
}
