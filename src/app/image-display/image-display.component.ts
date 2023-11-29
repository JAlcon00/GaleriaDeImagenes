import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '../image-gallery/image-interface';


@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Input() images: IImage[] = [];

  constructor() { }

  ngOnInit(): void { }
}
