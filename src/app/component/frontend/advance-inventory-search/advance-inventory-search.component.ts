import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-advance-inventory-search',
  templateUrl: './advance-inventory-search.component.html',
  styleUrls: ['./advance-inventory-search.component.css']
})
export class AdvanceInventorySearchComponent implements OnInit {

 

  constructor(private readonly meta: MetaService) {

    this.meta.setTitle('ProBid Auto - Inventory');
    this.meta.setTag('og:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money');
    this.meta.setTag('twitter:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money');

    this.meta.setTag('og:keyword', 'Pre-Owned Car Inventory, ProBid Auto Vehicle Inventory, ProBid Auto Inventory');
    this.meta.setTag('twitter:keyword', 'Pre-Owned Car Inventory, ProBid Auto Vehicle Inventory, ProBid Auto Inventory');

    this.meta.setTag('og:title', 'ProBid Auto - Inventory');
    this.meta.setTag('twitter:title', 'ProBid Auto - Inventory');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');

   }

  ngOnInit() {
  }

}
