import { Base, type BaseModel, type BaseType } from "@/models/base";

export interface CreatedAtModel extends BaseModel {
    created_at: string;
}

export interface CreatedAtType extends BaseType {
    createdAt: string;
}

export function createdAtTypeFromModel(model: CreatedAtModel): CreatedAtType {
    return {
        id: model.id,
        createdAt: model.created_at,
    };
}

export class CreatedAt extends Base {
    createdAt: Date;

    static fromModel(model: CreatedAtModel) {
        return new this(createdAtTypeFromModel(model));
    }

    constructor(createdAt: CreatedAtType) {
        super(createdAt);

        this.createdAt = new Date(createdAt.createdAt);
    }
}
