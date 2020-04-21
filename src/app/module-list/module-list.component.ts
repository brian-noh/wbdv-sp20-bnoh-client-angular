import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  courseId = ''
  moduleId = ''
  modules = [
    {_id: '123', title: 'module 1'},
    {_id: '234', title: 'module 2'},
    {_id: '345', title: 'module 3'}
  ];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
    })
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/courses/${this.courseId}/modules`)
      .then(response => response.json())
      .then(modules => this.modules = modules);
  }

}
