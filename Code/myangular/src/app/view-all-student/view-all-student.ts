import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Studdent } from '../../model/student.model';

@Component({
  selector: 'app-view-all-student',
  imports: [],
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit{
  students: Student[] = [];

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadAllStudrnt(){}

}
