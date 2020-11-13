import { Component, OnInit, ɵConsole } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
	// CHALLENGE
	// done: Complete remote UPDATE call
	// done: Complete remote delete call
	// done: CLEAR entry form

	selectedCourse = null;
	courses = null;

	resetSelectedCourse() {
		// use
		const emptyCouse = {
			id: null,
			title: '',
			description: '',
			percentComplete: 0,
			favorite: false,
		};

		this.selectedCourse = emptyCouse;
	}

	cancelCouseUpdate() {
		this.resetSelectedCourse();
	}

	selectCourse(course) {
		console.log('>> WHICH COURSE?!', course);
		this.selectedCourse = course;
	}

	deleteCourse(courseId) {
		console.log('>> COURSE TO DELETE:', courseId);
		this.coursesService.delete(courseId).subscribe((result) => {
			console.log('>> COURSE DELETED!', result);
			this.loadCourses();
		});
	}

	saveCourse(course) {
		if (course.id) {
			console.log('>> UPDATING COURSE!');
			this.coursesService.update(course).subscribe((result) => {
				console.log('>> COURSE UPDATED!', result);
				this.loadCourses();
			});
		} else {
			console.log('>> SAVING NEW COURSE!');
			this.coursesService.create(course).subscribe((result) => {
				console.log('>> COURSE CREATED!:', result);
				this.loadCourses();
			});
		}

		this.resetSelectedCourse();
	}

	loadCourses() {
		this.coursesService
			.all()
			.subscribe((courses) => (this.courses = courses));
	}

	constructor(private coursesService: CoursesService) {}

	ngOnInit(): void {
		this.resetSelectedCourse();
		this.loadCourses();
	}
}
