import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  p1 = new Produto('Computador HP', 2000, 0.10, 3, "2021-05-30")
  constructor() { }

  ngOnInit(): void {
  }

}
