import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
	position: number;
	table_name: string;
	column: string;
	purpose: string;
	comment: string;
	color: string;
	status: string;
};
export interface MissingList {
	sl: number;
	api: string;
	columns: string;
	color: string;
	status: string;
};
const ELEMENT_DATA: PeriodicElement[] = [
	{
		position: 1,
		table_name:'User Group',
		column: 'user_group_id,user_group_name',
		purpose: 'Dropdownlist', 
		status: 'Not Done',
		comment: '',
		color:'red'
	},
	{
		position: 2,
		table_name:'Location Type',
		column: 'location_type_id,location_type_name',
		purpose: 'Dropdownlist', 
		status: 'Not Done',
		comment: '',
		color:'red'
	},
	{
		position: 3,
		table_name:'Location Group',
		column: 'location_group_id,location_group_name',
		purpose: 'Dropdownlist', 
		status: 'Not Done',
		comment: '',
		color:'red'
	},
	// {
	// 	position: 4,
	// 	table_name:'Location Type',
	// 	column: 'id,name',
	// 	purpose: 'Dropdownlist', 
	// 	status: 'Not Done',
	// 	comment: 'In location group UI there are some predefine location type (7 location type). If this data come from database then where is the api link! Please check the UI for location group.',
	// 	color:'red'
	// }
	{
		position: 4,
		table_name:'Location',
		column: 'all',
		purpose: 'Form', 
		status: 'Not Done',
		comment: 'Location default address, invoice address, shipping address and location details api missing',
		color:'red'
	},
	{
		position: 5,
		table_name:'Contact Type',
		column: 'contact_type_id,contact_type_name',
		purpose: 'Dropdownlist', 
		status: 'Not Done',
		comment: '',
		color:'red'
	},
	{
		position: 6,
		table_name:'Contact Group Management',
		column: 'all',
		purpose: 'Drag & Drop', 
		status: 'Not Done',
		comment: 'Contact Managment api missing',
		color:'red'
	}
];

const ELEMENT_DATA2: MissingList[] = [
	{
		sl: 1,
		api:'http://103.101.197.190:8080/masterSetup-1.0.0/setup/location_group/get/all',
		columns: 'location_type_name,users',
		color: 'red',
		status: 'Not Done'
	},
	{
		sl: 2,
		api:'http://103.101.197.190:8080/masterSetup-1.0.0/setup/location_type/get/all',
		columns: 'location_type_name,location_group_name,location',
		color: 'red',
		status: 'Not Done'
	}
	// {
	// 	sl: 3,
	// 	api:'http://103.101.197.190:8080/masterSetup-1.0.0/setup/location_type/get/all',
	// 	columns: 'location_type_name,location_group_name,location',
	// 	color: 'red',
	// 	status: 'Not Done'
	// }
];

@Component({
	selector: 'app-api-list',
	templateUrl: './api-list.component.html',
	styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit {
	displayedColumns: string[] = ['position', 'table_name', 'column', 'purpose','comment', 'status'];
	displayedColumns2: string[] = ['sl', 'api', 'columns','status'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
	dataSource2 = new MatTableDataSource(ELEMENT_DATA2);

	full: boolean = true;
	limit: number = 1000;
	
	@ViewChild(MatSort, {static: true}) sort: MatSort;
  
	ngOnInit() {
		this.dataSource.sort = this.sort;
	}
}
