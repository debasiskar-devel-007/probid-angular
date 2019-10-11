import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
//   var slides = document.querySelectorAll('#slides .slide');
//   var currentSlide = 0;
//   var slideInterval = setInterval(nextSlide, 3000);
//   var next: HTMLElement = document.querySelectorAll('#next')[0] as HTMLElement;
//   var previous: HTMLElement = document.querySelectorAll('#previous')[0] as HTMLElement;
//   next.onclick = function () {
//  nextSlide();
//  };
//   previous.onclick = function () {
//    previousSlide();
// };
//    function nextSlide() {
//       goToSlide(currentSlide + 1);
//     }
//     function previousSlide() {
//      goToSlide(currentSlide - 1);
//    }
//     function goToSlide(n) {
//       slides[currentSlide].className = 'slide';
//       currentSlide = (n + slides.length) % slides.length;
//    }
  }

}
