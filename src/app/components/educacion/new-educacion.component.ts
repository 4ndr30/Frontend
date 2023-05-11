import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private EducacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const expe = new Educacion(this.nombreE, this.descripcionE);
    this.EducacionS.save(expe).subscribe(data=>{
      alert("Educacion agregada");
      this.router.navigate([''])
    }, err =>{
      alert("Fallo");
      this.router.navigate([''])
    }
    )
  }

}
