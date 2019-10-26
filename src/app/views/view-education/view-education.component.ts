import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "view-education",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./view-education.component.html",
  styleUrls: ["./view-education.component.css"]
})
export class ViewEducationComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("MonjiDev - My education");
    this.metaService.updateTag({
      name: "description",
      content: "View all the courses I've completed since I am Full Stack Web Developer"
    });
  }

  ngOnInit() {}
}
