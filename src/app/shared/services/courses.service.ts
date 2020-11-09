import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
	providedIn: 'root',
})
export class CoursesService {
	private model = 'courses';
	private courses = [
		{
			id: 1,
			title: 'Angular 9 Fundamentals_TEST_SERVICE_01',
			description: 'Learn the fundamentals of Angular 9',
			percentComplete: 26,
			favorite: true,
		},
		{
			id: 2,
			title: 'GAME DESIGN_TEST_SERVICE_02',
			description: 'Unity, Unreal, Blender',
			percentComplete: 95,
			favorite: true,
		},
		{
			id: 3,
			title: 'SPA DESIGN_TEST_SERVICE_03',
			description: 'Ember, React, Gatsby, Angular, Node.js, GraphQL',
			percentComplete: 42,
			favorite: true,
		},
	];

	constructor(private http: HttpClient) {}

	private getCoursesURL() {
		return `${BASE_URL}/${this.model}`;
	}

	private getCourseRecordUrl(courseId) {
		return `${this.getCoursesURL()}/${courseId}`;
	}

	// CRUD
	// C
	create(course) {
		// console.log('>> CREATE COURSE:', course);
		return this.http.post(this.getCoursesURL(), course);
	}

	// R
	all() {
		// return this.courses;
		return this.http.get(this.getCoursesURL());
	}
	find(courseId) {}

	// U
	update(course) {
		// console.log('>> UPDATE COURSE:', course);
		return this.http.put(this.getCourseRecordUrl(course.id), course);
	}

	// D
	delete(courseId) {
		// console.log('>> DELETE COURSE:', courseId);
		return this.http.delete(this.getCourseRecordUrl(courseId));
	}
}
