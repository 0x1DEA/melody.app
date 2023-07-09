export interface BaseModel {
    id: string;
}

export class Base {
    id: string;

    constructor(model: BaseModel) {
        this.id = model.id;
    }
}
