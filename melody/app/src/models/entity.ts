import { CreatedAt, type CreatedAtModel, type CreatedAtType } from "@/models/createdAt";

export interface EntityModel extends CreatedAtModel {
    name: string;

    spotify_id: string | null;
    apple_music_id: string | null;
    yandex_music_id: string | null;
}

export interface EntityType extends CreatedAtType {
    name: string;

    spotifyID: string | null;
    appleMusicID: string | null;
    yandexMusicID: string | null;
}

export function entityTypeFromModel(model: EntityModel): EntityType {
    return {
        id: model.id,
        createdAt: model.created_at,
        name: model.name,
        spotifyID: model.spotify_id,
        appleMusicID: model.apple_music_id,
        yandexMusicID: model.yandex_music_id,
    };
}

export class Entity extends CreatedAt {
    name: string;

    spotifyID: string | null;
    appleMusicID: string | null;
    yandexMusicID: string | null;

    static fromModel(model: EntityModel) {
        return new this(entityTypeFromModel(model));
    }

    constructor(entity: EntityType) {
        super(entity);

        this.name = entity.name;

        this.spotifyID = entity.spotifyID;
        this.appleMusicID = entity.appleMusicID;
        this.yandexMusicID = entity.yandexMusicID;
    }
}
