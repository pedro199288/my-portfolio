import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "view-about",
  templateUrl: "./view-about.component.html",
  styleUrls: ["./view-about.component.css"]
})
export class ViewAboutComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("MonjiDev - About me");
    this.metaService.updateTag({
      name: "description",
      content: "Pedro Monteagudo - Full Stack Developer: PHP, NodeJS, React, Angular, SQL, NoSQL and more"
    });
  }

  ngOnInit() {}
}
