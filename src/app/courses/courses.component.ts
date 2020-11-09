import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
	selectedCourse = null;
	courses = null;

	resetSelectedCourse() {
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
		this.coursesService.delete(courseId);
	}

	saveCourse(course) {
		if (course.id) {
			console.log('>> UPDATING COURSE!');
			this.coursesService.update(course);
		} else {
			console.log('>> SAVING NEW COURSE!');
			this.coursesService.create(course).subscribe((result) => {
				console.log('>> COURSE CREATED:', result);
				this.loadCourses();
			});
		}
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
