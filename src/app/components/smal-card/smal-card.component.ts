import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  templateUrl: './smal-card.component.html',
  styleUrls: ['./smal-card.component.css']
})
export class SmalCardComponent implements OnInit {
@Input()
photocover:string=""
@Input()
cardtitle:string=""
@Input()
carddescription:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
