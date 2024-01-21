import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as feather from 'feather-icons';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-moment';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('receita', { static: true }) chartCanvas!: ElementRef;
  menu: boolean = false;

  ngOnInit() {
    feather.replace();
    moment.locale('pt-br');
    var month = [
      {
        x: this.addMonths(new Date(), 0),
        y: 250,
      },
      {
        x: this.addMonths(new Date(), 1),
        y: 500,
      },
      {
        x: this.addMonths(new Date(), 2),
        y: 1000,
      },
      {
        x: this.addMonths(new Date(), 3),
        y: 750,
      },
      {
        x: this.addMonths(new Date(), 4),
        y: 1500,
      },
      {
        x: this.addMonths(new Date(), 5),
        y: 2000,
      },
      {
        x: this.addMonths(new Date(), 6),
        y: 500,
      },
    ];
    console.log(month);
    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',

      data: {
        datasets: [
          {
            data: month,
            backgroundColor: [
              'rgba(158, 110, 254, 0.24)',
              'rgba(158, 110, 254, 0.24)',
              'rgba(158, 110, 254, 0.24)',
              'rgba(158, 110, 254, 0.24)',
              'rgba(158, 110, 254, 0.24)',
              'rgba(158, 110, 254, 0.24)',
              '#9E6EFE',
            ],
            hoverBackgroundColor: ['#9E6EFE'],
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'left',
            ticks: {
              color: '#6A6969',
              font: {
                size: 14,
                family: 'Poppins',
              },
              textStrokeWidth: 0.2,
              textStrokeColor: '#6A6969',
              padding: 38,
            },
            border: {
              display: false,
            },
            offset: true,
            grid: {
              display: false,
            },
            
          },
          y: {
            display: false,
          },
          x: {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: {
                month: 'MMM',
              },
            },
            adapters: {
              date: {
                locale: 'pt-BR',
              },
            },
            ticks: {
              color: '#6A6969',
              font: {
                size: 14,
                family: 'Poppins',
              },
              textStrokeWidth: 0.2,
              textStrokeColor: '#6A6969',
              source: 'data',
            },
            display: true,
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });
  }

  addMonths(date: Date, months: number) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

}
