import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furniture: Observable<DetailsFurnitureModel[]>
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.all();
  }

  all() {
    this.furniture = this.furnitureService.getAll()
  }

}
