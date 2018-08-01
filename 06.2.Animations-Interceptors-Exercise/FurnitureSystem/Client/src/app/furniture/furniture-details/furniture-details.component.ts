import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  currentItem: Observable<DetailsFurnitureModel>
  id: string
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.currentItem = this.furnitureService.getDeatails(this.id)
  }
}
