import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      {
        next: data => {
          this.skill = data;
        }, error: err =>{
          alert("Error al modificar Skill");
          this.router.navigate([''])
        }
      }
    )
  }
  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id,this.skill).subscribe(
      {
        next: data =>{
          this.router.navigate(['']);
        },error: err =>{
          alert("Error al modificar skill");
          this.router.navigate([''])
        }
      }
    )
  }

}