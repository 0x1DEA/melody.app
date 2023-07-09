import { Entity, type EntityModel } from "@/models/entity";
import { PrivacyType, type PrivacyTypeLiteral } from "@/models/enums";

export interface UserModel extends EntityModel {
    uri: string;

    follower_count: number;

    stream_count: number;
    stream_duration_ms: number;

    privacy_type: PrivacyTypeLiteral;
}

export class UserData {
    email: string | null;
    password: string | null;

    constructor(email: string | null, password: string | null) {
        this.email = email;
        this.password = password;
    }
}

export class User extends Entity {
    uri: string;

    followerCount: number;

    streamCount: number;
    streamDurationMS: number;

    privacyType: PrivacyType;

    constructor(model: UserModel) {
        super(model);

        this.uri = model.uri;

        this.followerCount = model.follower_count;

        this.streamCount = model.stream_count;
        this.streamDurationMS = model.stream_duration_ms;

        this.privacyType = model.privacy_type as PrivacyType;
    }
}
