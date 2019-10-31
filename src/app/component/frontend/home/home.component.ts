import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() { }
   
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
