import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cadastro de Clientes';
  nome = '';
  vetor = ['tv',' sofá',' computador', ' som', ' cama', ' ventilador'];
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome ='';
  }
  remover(x: number){
    this.vetor.splice(x,1);
  }
}
