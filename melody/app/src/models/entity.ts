import { CreatedAt, type CreatedAtModel } from "@/models/createdAt";

export interface EntityModel extends CreatedAtModel {
    name: string;

    spotify_id: string | null;
    apple_music_id: string | null;
    yandex_music_id: string | null;
}

export class Entity extends CreatedAt {
    name: string;

    spotifyID: string | null;
    appleMusicID: string | null;
    yandexMusicID: string | null;

    constructor(model: EntityModel) {
        super(model);

        this.name = model.name;

        this.spotifyID = model.spotify_id;
        this.appleMusicID = model.apple_music_id;
        this.yandexMusicID = model.yandex_music_id;
    }
}
