import { Component, OnInit } from '@angular/core';
import { DetailsFurnitureModel } from './../models/details.model';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: DetailsFurnitureModel

  constructor(
    private route: ActivatedRoute,
    private fournitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.fournitureService
    .getFurnitureById(this.route.snapshot.params['id'])
    .subscribe(data => {
      console.log('bindingModel: ', data)
      this.bindingModel = data;
    })
  }

  editFurniture(){
    this.fournitureService.editFurnitureById(this.bindingModel.id, this.bindingModel)
    .subscribe( data => {
      console.log('editFurnitureById: ', data)
    })
  }

}
