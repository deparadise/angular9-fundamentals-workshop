import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CoursesService {
	courses = [
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

	constructor() {}
}
