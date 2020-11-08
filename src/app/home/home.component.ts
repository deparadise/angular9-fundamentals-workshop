import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "HELLO DERP";

	selectedCourse = null;

	themeColor = 'red';

  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateColor() {
	  console.log('Update color Whoop Whpp!!');
		this.themeColor = 'fuchsia'
	};

	selectLesson(lesson) {
		console.log('>> WHICH LESSON?!', lesson);
		this.selectedCourse = lesson;
	}
}
