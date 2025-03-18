import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aprendizaje.component.html',
  styleUrls: ['./aprendizaje.component.css']
})
export class AprendizajeComponent {}
