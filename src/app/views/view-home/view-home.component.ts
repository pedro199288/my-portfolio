import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "view-home",
  templateUrl: "./view-home.component.html",
  styleUrls: ["./view-home.component.css"]
})
export class ViewHomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("MonjiDev - Web Development");
    this.metaService.updateTag({
      name: "description",
      content: "Pedro Monteagudo - Full Stack Developer: PHP, NodeJS, React, Angular, SQL, NoSQL and more"
    });
  }

  ngOnInit() {}
}
