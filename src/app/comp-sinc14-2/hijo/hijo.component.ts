import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() recibe=''
  constructor() { }

  ngOnInit(): void {
  }

}
