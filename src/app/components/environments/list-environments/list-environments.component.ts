import { Component, OnInit } from '@angular/core';
import environmentsData from '../../../../assets/environments.json';
import { IEnvironment } from '../environment';


@Component({
  selector: 'app-list-environments',
  templateUrl: './list-environments.component.html',
  styleUrls: ['./list-environments.component.css']
})
export class ListEnvironmentsComponent implements OnInit {
  environments: IEnvironment[] = environmentsData;
  constructor() { }

  ngOnInit(): void {
  }



}
