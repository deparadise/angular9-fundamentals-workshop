import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	title = 'HELLO DERP';
	themeColor = 'red';

	selectedCourse = null;
	courseLessons = null;

	// CHALLENGE
	// done: create a lessons service
	// ng g s shared/services/lessons -d
	// done: add the lessons service to app.module
	// done: inject the service into the home component
	// TODO: MOVE LESSONS TO SERVICE AND CONSUME LESSONS
	//   courseLessons =

	constructor(private lessonsService: LessonsService) {}

	ngOnInit(): void {
		this.courseLessons = this.lessonsService.all();
	}

	updateColor() {
		console.log('Update color Whoop Whpp!!');
		this.themeColor = 'fuchsia';
	}

	selectLesson(lesson) {
		console.log('>> WHICH LESSON?!', lesson);
		this.selectedCourse = lesson;
	}
}
