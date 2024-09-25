import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  Designation: string ='';
  Username: string='';
  NoOfTeamMembers: number=0;
  TotalCostOfAllProjects: number=0;
  PendingTasks: number=0;
  UpComingProjects: number=0;
  ProjectCost: number=0;
  CurrentExpenditure :number=0;
  AvailableFunds: number=0;

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }
}
