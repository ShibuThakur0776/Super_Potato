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
  Clients:string[] = [];
  Projects:string[] = [];
  Years:number[] = [];
  TeamMemberSummary: any[] = [];
  TeamMembers: any[] = [];

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
    this.Clients = ["ABC Infotech Ltd","DEF Soft Solutions","GHI Industries"];
    this.Projects = ["Project A","Project B","Project C","Project D"];
    
    for(var i=2019; i>=2010; i--){ 
      this.Years.push(i);
    }
   
    this.TeamMemberSummary = [
      {Region:"East",TeamMembersCount: 20, TemporarilyUnavailableMembers:4},
      {Region:"West",TeamMembersCount: 15, TemporarilyUnavailableMembers:8},
      {Region:"East",TeamMembersCount: 17, TemporarilyUnavailableMembers:1},
      {Region:"East",TeamMembersCount: 15, TemporarilyUnavailableMembers:6}
    ]

    this.TeamMembers = [{Region:"East",Member:[
        {ID: 1, Name: "Ford", Status: "Available"},
        {ID: 2, Name: "Miller", Status: "Available"},
        {ID: 3, Name: "Jones", Status: "Busy"},
        {ID: 4, Name:"James", Status:"Busy"}],
      },
      {Region:"West",Member:[
        {ID: 5, Name: "Sunil", Status: "Available"},
        {ID: 6, Name: "Indu", Status: "Available"},
        {ID: 7, Name: "Anuj", Status: "Busy"},
        {ID: 8, Name:"Sonu", Status:"Busy"}
      ],},
      {Region:"North",Member:[
        {ID: 9, Name: "Abhisekh", Status: "Available"},
        {ID: 10, Name: "Sunny", Status: "Available"},
        {ID: 11, Name: "Rattan", Status: "Busy"},
        {ID: 12, Name:"Diksha", Status:"Busy"}
      ],},
      {Region:"South",Member:[
        {ID: 13, Name: "Niranjan", Status: "Available"},
        {ID: 14, Name: "Kashif", Status: "Available"},
        {ID: 15, Name: "Harshit", Status: "Busy"},
        {ID: 16, Name:"Arjun", Status:"Busy"}
      ],},
  ]
  }
}
