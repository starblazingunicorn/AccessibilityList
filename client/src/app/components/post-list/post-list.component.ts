import { Component, OnInit } from '@angular/core';
import WcagData from './../../WcagData.json';

interface Wcag {
  title: string;
  short_text: string;
  paragraph: string;
  category:string;
}

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  wcag: Wcag[] = WcagData;

  ngOnInit(): void {}
}
