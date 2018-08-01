import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DetailsFurnitureModel } from "./models/details.model";
import { Observable } from "rxjs";
import { CreateFurnitureModel } from './models/create.model';


const createUrl = 'http://localhost:5000/furniture/create'
const getAllUrl = 'http://localhost:5000/furniture/all'
const myFurnitureUrl = 'http://localhost:5000/furniture/my'


@Injectable()
// @Injectable({
//     providedIn: 'root'
// })
export class FurnitureService {
    constructor(private http: HttpClient) { }

    create(data: CreateFurnitureModel) {
        return this.http.post(createUrl, data)
    }

    getAll(): Observable<DetailsFurnitureModel[]> {
        return this.http.get<DetailsFurnitureModel[]>(getAllUrl)
    }

    getDeatails(id): Observable<DetailsFurnitureModel> {
        const detailsUrl = `http://localhost:5000/furniture/details/${id}`
        return this.http.get<DetailsFurnitureModel>(detailsUrl)
    }

    myFurniture(): Observable<DetailsFurnitureModel[]> {
        return this.http.get<DetailsFurnitureModel[]>(myFurnitureUrl)
    }

    delete(id) {
        const deleteUrl = `http://localhost:5000/furniture/delete/${id}`
        return this.http.delete(deleteUrl)
    }
}