import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { Alumnos } from '../mock-alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumno = Alumnos;
  selectedAlumno: Alumno;
  

constructor() { }

  ngOnInit() {
  }
  onSelect(alumno: Alumno): void { this.selectedAlumno = alumno;

}
}