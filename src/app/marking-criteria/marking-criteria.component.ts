import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
	position: number;
	section: string;
	type: string;
	number: string;
	mark: number;
	color: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{
		position: 1,
		section:'Speaking',
		type: 'Read Aloud',
		number: '6-7', 
		mark: 44,
		color: 'red'
	},
	{
		position: 2,
		section:'Speaking',
		type: 'Repeat Sentence',
		number: '10-12', 
		mark: 52,
		color: 'red'
	},
	{
		position: 3,
		section:'Speaking',
		type: 'Describe Image',
		number: '6-7', 
		mark: 22,
		color: 'green'
	},
	{
		position: 4,
		section:'Speaking',
		type: 'Re-Tell Lecture',
		number: '3-4', 
		mark: 22,
		color: 'green'
	},
	{
		position: 5,
		section:'Speaking',
		type: 'Answer Short Questions',
		number: '10-12', 
		mark: 8,
		color: 'grey'
	},
	{
		position: 6,
		section:'Writing',
		type: 'Summarise Written Text',
		number: '2-3', 
		mark: 20,
		color: 'green'
	},
	{
		position: 7,
		section:'Writing',
		type: 'Essay',
		number: '1-2', 
		mark: 12,
		color: 'yellow'
	},
	{
		position: 8,
		section:'Reading',
		type: 'R & W Fill in the Blanks',
		number: '5-6', 
		mark: 44,
		color: 'red'
	},
	{
		position: 9,
		section:'Reading',
		type: 'MCQ Multiple Answers',
		number: '2-3', 
		mark: 3,
		color: 'grey'
	},
	{
		position: 10,
		section:'Reading',
		type: 'Re-Order Paragraphs',
		number: '2-3', 
		mark: 6,
		color: 'grey'
	},
	{
		position: 11,
		section:'Reading',
		type: 'R Fill in the Blanks',
		number: '4-5', 
		mark: 15,
		color: 'yellow'
	},
	{
		position: 12,
		section:'Reading',
		type: 'MCQ Single Answer',
		number: '2-3', 
		mark: 1,
		color: 'grey'
	},
	{
		position: 13,
		section:'Listening',
		type: 'Summarise Spoken Text',
		number: '2-3', 
		mark: 25,
		color: 'green'
	},
	{
		position: 14,
		section:'Listening',
		type: 'MCQ Multiple Answers',
		number: '2-3', 
		mark: 3,
		color: 'grey'
	},
	{
		position: 15,
		section:'Listening',
		type: 'Fill in the Blanks',
		number: '2-3', 
		mark: 14,
		color: 'yellow'
	},
	{
		position: 16,
		section:'Listening',
		type: 'Highlight Correct Summary',
		number: '2-3', 
		mark: 3,
		color: 'grey'
	},
	{
		position: 17,
		section:'Listening',
		type: 'MCQ Single Answer',
		number: '2-3', 
		mark: 1,
		color: 'grey'
	},
	{
		position: 18,
		section:'Listening',
		type: 'Select Missing Word',
		number: '2-3', 
		mark: 1,
		color: 'grey'
	},
	{
		position: 19,
		section:'Listening',
		type: 'Hightlight Incorrect Summary',
		number: '2-3', 
		mark: 17,
		color: 'yellow'
	},
	{
		position: 20,
		section:'Listening',
		type: 'Write From Dictation',
		number: '3-4', 
		mark: 47,
		color: 'red'
	}
];


@Component({
	selector: 'app-marking-criteria',
	templateUrl: './marking-criteria.component.html',
	styleUrls: ['./marking-criteria.component.css']
})
export class MarkingCriteriaComponent implements OnInit {
	displayedColumns: string[] = ['position', 'section', 'type', 'number', 'mark'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
	full: boolean = true;
	limit: number = 1000;
	
	@ViewChild(MatSort, {static: true}) sort: MatSort;
  
	ngOnInit() {
		console.log(this.dataSource);
		this.dataSource.sort = this.sort;
	}
}

