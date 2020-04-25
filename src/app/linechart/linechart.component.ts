import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../../app/data';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  url = 'http://localhost:8080/api/getinfo';  
  data: Data[];  
  Player = [];  
  Run = [];  
  Linechart = [];  
  constructor(private httpClient: HttpClient) { }  


  ngOnInit() {  
    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Player.push(x.name);  
        this.Run.push(x.run);  
      });   
      this.Linechart.push(new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      }));  
    });  
  }

}
