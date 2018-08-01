export class CreateFurnitureModel {
    constructor(
        public make: string,
        public model: string,
        public description: string,
        public price: number,
        public image: string,
        public material?: string
    ){}
}