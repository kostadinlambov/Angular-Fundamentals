// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule} from 'ngx-pagination'

// Services
import { FurnitureService } from './furniture.service';
import { FurnitureRoutingModule } from './furniture-routing.module';
import { furnitureComponents } from '.';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        FurnitureRoutingModule,
        NgxPaginationModule
    ],
    declarations: [
       ...furnitureComponents
    ],
    providers: [FurnitureService],
    exports: []
})

export class FurnitureModule { }


