export class DetailsFurnitureModel {
    constructor(
        public id: string,
        public make: string,
        public model: string,
        public description: string,
        public price: number,
        public imageUrl: string,
        public material?: string
    ){}
}