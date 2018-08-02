import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { ToastrService } from 'ngx-toastr';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures: Observable<DetailsFurnitureModel[]>
  constructor(
    private furnitureService: FurnitureService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getMyFurniture()
  }

  getMyFurniture() {
    this.furnitures = this.furnitureService.myFurniture()
  }

  delete(id: number) {
    console.log('id: ', id)
    this.furnitureService.deleteFurniture(id)
      .subscribe(
        res => {
          this.toastrService.info(res['message']);
          this.getMyFurniture()
          console.log('Delete res:', res)
        },
        err => {
          this.toastrService.error(err['error']['message'], 'Error!');
          console.log('Delete err:', err)
        }
      );
  }
}
