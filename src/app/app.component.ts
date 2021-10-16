import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeRocket';
  menu!:any;
  button!:any;

  ngOnInit(): void{
     this.menu = document.querySelector('#menu');

     this.button = document.querySelector('#menu-button');

     this.button.addEventListener('click', () => {
      this.menu.classList.toggle('hidden');
    });
  }

  setCurrentPageToZero(): void{
    localStorage.setItem('currentPageNo','0');
  }
}
