import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../../app/data';  

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data: Data[];  
  url = 'http://localhost:8080/api/getinfo';  
  Player = [];  
  Run = [];  
  barchart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit() {  
    this.http.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Player.push(x.name);  
        this.Run.push(x.run);  
      });  
      this  
      this.barchart.push( new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cba9f',  
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
              fill: true  
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
