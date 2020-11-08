import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
	
	currentCourse = null;
	
	courses = [
		{
			id: 1,
			title: 'Angular 9 Fundamentals',
			description: 'Learn the fundamentals of Angular 9',
			percentComplete: 26,
			favorite: true
		},
		{
			id: 2,
			title: 'GAME DESIGN',
			description: 'Unity, Unreal, Blender',
			percentComplete: 26,
			favorite: true
		},
		{
			id: 3,
			title: 'SPA DESIGN',
			description: 'Ember, React, Gatsby, Angular, Node.js, GraphQL',
			percentComplete: 26,
			favorite: true
		},
	];

	selectCourse(course) {
		console.log('>> WHICH COURSE?!', course);
		this.currentCourse = course;
	}

	deleteCourse(courseId) {
		console.log('>> COURSE DELETED:', courseId);
	}

	constructor() { }

	ngOnInit(): void {
	}

}
