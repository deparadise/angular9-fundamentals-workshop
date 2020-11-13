import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons.service';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';

@NgModule({
	imports: [
		// NOTE: << FOR MODUELS <<
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		FormsModule,
	],
	declarations: [
		// NOTE: << FOR COMPONENTS <<
		AppComponent,
		HomeComponent,
		CoursesComponent,
		CoursesListComponent,
		CourseDetailsComponent,
	],
	providers: [
		// NOTE: << FOR SERVICES <<
		CoursesService,
		LessonsService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
