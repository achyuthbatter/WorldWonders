import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public pageContent = { 
    header: {
      title: 'About World Wonders',
      strapline: ''
    },
    content : 'Various lists of the Wonders of the World have been compiled from antiquity to the present day, to catalogue the world\'s most spectacular natural wonders and manmade structures.\n\n The Seven Wonders of the Ancient World is the first known list of the most remarkable creations of classical antiquity; it was based on guidebooks popular among Hellenic sightseers and only includes works located around the Mediterranean rim and in Mesopotamia. The number seven was chosen because the Greeks believed it represented perfection and plenty, and because it was the number of the five planets known anciently, plus the sun and moon.[1] Many similar lists have been made.'
  };

  ngOnInit() {
  }

}
