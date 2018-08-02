import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furniture: Observable<DetailsFurnitureModel[]>
  pageSize: number = 3
  currentPage: number = 1
  constructor(
    private furnitureService: FurnitureService,
    private authService: AuthService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.all();
  }

  all() {
    this.furniture = this.furnitureService.getAll()
  }

  changePage(page) {
    this.currentPage = page;
  }

  deleteItem(id: string) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(
        res => {
          this.toastrService.success(res['message']);
          this.furniture = this.furnitureService.getAll()
          console.log('Delete res:', res)
        },
        err => {
          this.toastrService.error(err['error']['message'], 'Error!');
          console.log('Delete err:', err)
        }
      )
  }
}

