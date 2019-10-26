import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "view-portfolio",
  templateUrl: "./view-portfolio.component.html",
  styleUrls: ["./view-portfolio.component.css"]
})
export class ViewPortfolioComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("MonjiDev - My projects");
    this.metaService.updateTag({
      name: "description",
      content: "View all the projects I've made since I am Full Stack Web Developer"
    });
  }

  ngOnInit() {}
}
