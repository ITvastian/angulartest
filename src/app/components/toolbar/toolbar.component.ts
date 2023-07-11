import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  standalone: true,
imports:[MatToolbarModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent  implements OnInit{
constructor(){}
ngOnInit(): void {

}
}
