import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
	position: number;
	section: string;
	type: string;
	number: string;
	color: string;
	type1: string;
	type2: string;
	type3: string;
	type4: string;
	mark: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{
		position: 1,
		section:'Speaking',
		type: 'Read Aloud',
		number: '6-7', 
		mark: 44,
		color: 'red',
		type1: '22',
		type2: '',
		type3: '22',
		type4: ''
	},
	{
		position: 2,
		section:'Speaking',
		type: 'Repeat Sentence',
		number: '10-12', 
		mark: 52,
		color: 'red',
		type1: '32',
		type2: '',
		type3: '',
		type4: '20'
	},
	{
		position: 3,
		section:'Speaking',
		type: 'Describe Image',
		number: '6-7', 
		mark: 22,
		color: 'green',
		type1: '22',
		type2: '',
		type3: '',
		type4: ''
	},
	{
		position: 4,
		section:'Speaking',
		type: 'Re-Tell Lecture',
		number: '3-4', 
		mark: 22,
		color: 'green',
		type1: '12',
		type2: '',
		type3: '',
		type4: '10'
	},
	{
		position: 5,
		section:'Speaking',
		type: 'Answer Short Questions',
		number: '10-12', 
		mark: 8,
		color: 'grey',
		type1: '2',
		type2: '',
		type3: '',
		type4: '6'
	},
	{
		position: 6,
		section:'Writing',
		type: 'Summarise Written Text',
		number: '2-3', 
		mark: 20,
		color: 'green',
		type1: '',
		type2: '10',
		type3: '10',
		type4: ''
	},
	{
		position: 7,
		section:'Writing',
		type: 'Essay',
		number: '1-2', 
		mark: 12,
		color: 'yellow',
		type1: '',
		type2: '12',
		type3: '',
		type4: ''
	},
	{
		position: 8,
		section:'Reading',
		type: 'R & W Fill in the Blanks',
		number: '5-6', 
		mark: 44,
		color: 'red',
		type1: '',
		type2: '22',
		type3: '22',
		type4: ''
	},
	{
		position: 9,
		section:'Reading',
		type: 'MCQ Multiple Answers',
		number: '2-3', 
		mark: 3,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '3',
		type4: ''
	},
	{
		position: 10,
		section:'Reading',
		type: 'Re-Order Paragraphs',
		number: '2-3', 
		mark: 6,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '6',
		type4: ''
	},
	{
		position: 11,
		section:'Reading',
		type: 'R Fill in the Blanks',
		number: '4-5', 
		mark: 15,
		color: 'yellow',
		type1: '',
		type2: '',
		type3: '15',
		type4: ''
	},
	{
		position: 12,
		section:'Reading',
		type: 'MCQ Single Answer',
		number: '2-3', 
		mark: 1,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '1',
		type4: ''
	},
	{
		position: 13,
		section:'Listening',
		type: 'Summarise Spoken Text',
		number: '2-3', 
		mark: 25,
		color: 'green',
		type1: '',
		type2: '12',
		type3: '',
		type4: '13'
	},
	{
		position: 14,
		section:'Listening',
		type: 'MCQ Multiple Answers',
		number: '2-3', 
		mark: 3,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '',
		type4: '3'
	},
	{
		position: 15,
		section:'Listening',
		type: 'Fill in the Blanks',
		number: '2-3', 
		mark: 14,
		color: 'yellow',
		type1: '',
		type2: '7',
		type3: '',
		type4: '7'
	},
	{
		position: 16,
		section:'Listening',
		type: 'Highlight Correct Summary',
		number: '2-3', 
		mark: 3,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '2',
		type4: '1'
	},
	{
		position: 17,
		section:'Listening',
		type: 'MCQ Single Answer',
		number: '2-3', 
		mark: 1,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '',
		type4: '1'
	},
	{
		position: 18,
		section:'Listening',
		type: 'Select Missing Word',
		number: '2-3', 
		mark: 1,
		color: 'grey',
		type1: '',
		type2: '',
		type3: '',
		type4: '1'
	},
	{
		position: 19,
		section:'Listening',
		type: 'Hightlight Incorrect Words',
		number: '2-3', 
		mark: 17,
		color: 'yellow',
		type1: '',
		type2: '',
		type3: '9',
		type4: '8'
	},
	{
		position: 20,
		section:'Listening',
		type: 'Write From Dictation',
		number: '3-4', 
		mark: 47,
		color: 'red',
		type1: '',
		type2: '27',
		type3: '',
		type4: '20'
	}
];


@Component({
	selector: 'app-marking-criteria',
	templateUrl: './marking-criteria.component.html',
	styleUrls: ['./marking-criteria.component.css']
})
export class MarkingCriteriaComponent implements OnInit {
	displayedColumns: string[] = ['position', 'section', 'type', 'number','type1','type2','type3','type4', 'mark'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
	full: boolean = true;
	limit: number = 1000;
	
	@ViewChild(MatSort, {static: true}) sort: MatSort;
  
	ngOnInit() {
		this.dataSource.sort = this.sort;
	}
}

