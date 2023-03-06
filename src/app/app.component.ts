import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Ciudad',
      imageUrl: 'assets/ciudad.jpg',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sint similique laborum quae quibusdam odio ex quod ducimus! Recusandae voluptatibus sit sapiente magnam officiis non quis deleniti laudantium animi dolore?'
    },
    {
      title: 'Decoraciones',
      imageUrl: 'assets/decoraciones.jpg',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sint similique laborum quae quibusdam odio ex quod ducimus! Recusandae voluptatibus sit sapiente magnam officiis non quis deleniti laudantium animi dolore?'
    },
    {
      title: 'Tienda',
      imageUrl: 'assets/tienda.jpg',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, sint similique laborum quae quibusdam odio ex quod ducimus! Recusandae voluptatibus sit sapiente magnam officiis non quis deleniti laudantium animi dolore?'
    }
  ]
}
