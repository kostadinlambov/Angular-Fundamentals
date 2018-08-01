import { Component, OnInit } from '@angular/core';
import { CreateFurnitureModel } from '../models/create.model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel: CreateFurnitureModel;
  constructor(private furnitureService: FurnitureService) {
    this.bindingModel = new CreateFurnitureModel('', '', '', 0, '')
  }

  ngOnInit() {
  }

  createFurniture(formData) {
    console.log(formData)
    this.furnitureService
      .create(this.bindingModel)
      .subscribe(
        res => console.log('create Res: ', res),
        err => console.log('create Err: ', err),
      );
  }

}
