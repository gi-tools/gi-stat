import { CommonModule, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonInput, IonList, IonItem, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-balancing',
  templateUrl: './balancing.page.html',
  styleUrls: ['./balancing.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText,
    DecimalPipe,
    PercentPipe,
  ],
})
export class BalancingPage implements OnInit {
  public title!: string;
  constructor() { }

  public base!: number;
  public atk!: number;
  public cr: number = 100;
  public cd!: number;

  public get critDmg(): number {
    return this.cd ? this.cd / 100 : Number.NaN;
  }

  public get critRate(): number {
    return this.cr ? this.cr / 100 : Number.NaN;
  }

  public get atkTotal(): number {
    return this.atk ? this.atk : Number.NaN;
  }

  public get atkBase(): number {
    return this.base ? this.base : Number.NaN;
  }
  
  public get atkTotalByCritDmg(): number {
    return this.critDmg && this.atkBase ? ((this.critDmg + 1) * 0.75 * this.atkBase) : Number.NaN;
  }

  public get critDmgByAtkTotal(): number {
    return this.atkTotal && this.atkBase ? ((this.atkTotal / this.atkBase) / 0.75 - 1) : Number.NaN;
  }

  public get atkBaseAvg(): number {
    return this.critRate && this.atkBase ? (this.atkBase / this.critRate) : Number.NaN;
  }

  public get critDmgAvg(): number {
    return this.critRate && this.critDmg ? (this.critDmg * this.critRate) : Number.NaN;
  }

  public get atkTotalByCritAvg(): number {
    return this.critDmgAvg && this.atkBaseAvg ? ((this.critDmgAvg + 1) * 0.75 * this.atkBaseAvg) : Number.NaN;
  }

  public get critDmgByAtkAvg(): number {
    return this.atkTotal && this.atkBaseAvg ? (((this.atkTotal / this.atkBaseAvg) / 0.75 - 1) / this.critRate) : Number.NaN;
  }

  public getCompareClass(a: number, b: number): string {
    return a < b ? 'danger' : 'success';
  }

  ngOnInit() {
    this.title = 'Balancing';
  }
}
