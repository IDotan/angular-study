import { Component, OnInit } from '@angular/core';
import { Social_buttons } from './social_buttons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SOCIALS: Social_buttons[] = [
    { name: 'linkedin', URL: 'https://www.linkedin.com/in/idotan/', icon: 'fab fa-linkedin' },
    { name: 'facebook', URL: 'https://www.facebook.com/itai.dotan.73/', icon: 'fab fa-facebook-square' }
  ];

  click_link(url: Social_buttons) { window.open(url.URL, '_blank') }
}
