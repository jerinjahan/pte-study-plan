export class SubCategory {
	id:number;
	parentId:number;
    name:string;
    category:string;
    description:string;

    constructor(sub) {
        this.id = sub.id;
        this.parentId = sub.parentId;
        this.name = sub.name;
        this.category = sub.category;
        this.description = sub.description;
    }
}