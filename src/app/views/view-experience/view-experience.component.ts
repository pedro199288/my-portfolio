import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "view-experience",
  templateUrl: "./view-experience.component.html",
  styleUrls: ["./view-experience.component.css"]
})
export class ViewExperienceComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("MonjiDev - My experience");
    this.metaService.updateTag({
      name: "description",
      content: "View all the jobs I've had since I am Full Stack Web Developer"
    });
  }

  ngOnInit() {}
}
