import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})


export class CourseListComponent implements OnInit {

  title = 'Course List Component'
  newCourseTitle = ''
  courses = [
    {_id : '123', title: 'Course A'},
    {_id : '345', title: 'Course B'},
    {_id : '567', title: 'Course C'},
    {_id : '789', title: 'Course D'},
  ]

  createCourse = (title) =>
    this.courses.push({_id: '321', title})
  deleteCourse = (courseToDelete) =>
    this.courses = this.courses.filter(course => course !== courseToDelete)
  constructor(private service: CourseServiceClient) { }

  ngOnInit(): void {
    fetch('https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses')
      .then(response => response.json())
      .then(courses => this.courses = courses);
  }

}
