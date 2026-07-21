import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { AtributoPersonagem, Attribute } from '../../components/attribute/attribute';

@Component({
  selector: 'app-calculo-atributos',
  imports: [Attribute, MatCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  points: number = 0;
  form!: FormGroup;
  isMobile = false;
  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  for: AtributoPersonagem = {};
  des: AtributoPersonagem = {};
  con: AtributoPersonagem = {};
  int: AtributoPersonagem = {};
  sab: AtributoPersonagem = {};
  car: AtributoPersonagem = {};
  sor: AtributoPersonagem = {};

  calculaPontos(event: number) {
    this.points = event;
  }

  ngOnInit(): void {
    this.for = { nome: 'FORÇA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.des = { nome: 'DESTREZA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.con = { nome: 'CONSTITUIÇÃO', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.int = { nome: 'INTELIGÊNCIA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.sab = { nome: 'SABEDORIA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.car = { nome: 'CARISMA', comprado: 0, racial: 0, outros: 0, total: 0 };
    this.sor = { nome: 'SORTE', comprado: 0, racial: 0, outros: 0, total: 0 };

    this.form = this.fb.group({});
  }
}
