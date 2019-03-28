import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Projeto Mirante';

  constructor() {
  }

  public get userName(): string {
      return "David Jeremias";
  }

  public get userMatricula(): string {
      return "016.965.871-66";
  }

  ngOnInit() {
  }

}
