import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DetailsFurnitureModel } from "./models/details.model";
import { Observable } from "rxjs";
import { CreateFurnitureModel } from './models/create.model';

const createUrl = 'http://localhost:5000/furniture/create'
const getAllUrl = 'http://localhost:5000/furniture/all'
const myFurnitureUrl = 'http://localhost:5000/furniture/mine'

@Injectable()
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

    deleteFurniture(id) {
        const deleteUrl = `http://localhost:5000/furniture/delete/${id}`
        return this.http.delete(deleteUrl)
    }

    getFurnitureById(id: string){
        const furnitureByIdUrl = `http://localhost:5000/furniture/${id}`
        return this.http.get<DetailsFurnitureModel>(furnitureByIdUrl);
    }

    editFurnitureById(id: string, body: DetailsFurnitureModel){
        const editfurnitureByIdUrl = `http://localhost:5000/furniture/edit/${id}`
        return this.http.put<DetailsFurnitureModel>(editfurnitureByIdUrl, body);
    }
}