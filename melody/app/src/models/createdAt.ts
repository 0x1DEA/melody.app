import { Base, type BaseModel } from "@/models/base";

export interface CreatedAtModel extends BaseModel {
    created_at: string;
}

export class CreatedAt extends Base {
    createdAt: Date;

    constructor(model: CreatedAtModel) {
        super(model);

        this.createdAt = new Date(model.created_at);
    }
}
