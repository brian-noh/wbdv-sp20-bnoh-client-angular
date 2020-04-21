import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  courseId = ''
  lessonId = ''
  moduleId = ''
  lessons = [
    {_id: '123', title: 'Lesson 1'},
    {_id: '234', title: 'Lesson 2'},
    {_id: '345', title: 'Lesson 3'}
  ]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/modules/${this.moduleId}/lessons`)
        .then(response => response.json())
        .then(lessons => this.lessons = lessons);
    });
  }

}
