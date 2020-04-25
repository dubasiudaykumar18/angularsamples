import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../../app/data';

@Component({
  selector: 'app-polararea',
  templateUrl: './polararea.component.html',
  styleUrls: ['./polararea.component.css']
})
export class PolarareaComponent implements OnInit {

  url = 'http://localhost:58617/API/Charts/GetCharts';  
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
        this  
        this.Linechart.push(new Chart('canvas', {  
          type: 'polarArea',  
          data: {  
            labels: this.Player,  
            datasets: [  
              {  
                data: this.Run,  
                borderColor: '#3cb371',  
                backgroundColor: [  
                  "#3cb371",  
                  "#0000FF",  
                  "#9966FF",  
                  "#4C4CFF",  
                  "#00FFFF",  
                  "#f990a7",  
                  "#aad2ed",  
                  "#FF00FF",  
                  "Blue",  
                  "Red",  
                  "Blue"  
                ],  
              }  
            ],  
          },  
          options: {  
            legend: {  
              display: false  
            },  
            scales: {  
              xAxes: [{  
                display: false  
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
