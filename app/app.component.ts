import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  viewProviders: [MdIconRegistry],
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  constructor(mdIconRegistry: MdIconRegistry) {}

  ngOnInit() { }
}