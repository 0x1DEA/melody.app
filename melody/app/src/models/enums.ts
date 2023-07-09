export type AlbumTypeLiteral = "album" | "single" | "compilation";
export type PrivacyTypeLiteral = "public" | "friends" | "private";

export type PlatformLiteral = "all" | "spotify" | "apple_music" | "yandex_music";

export type RepeatLiteral = "no" | "all" | "one";

export enum AlbumType {
    Album = "album",
    Single = "single",
    Compilation = "compilation",
}

export enum PrivacyType {
    Public = "public",
    Friends = "friends",
    Private = "private",
}

export enum Platform {
    All = "all",
    Spotify = "spotify",
    AppleMusic = "apple_music",
    YandexMusic = "yandex_music",
}

export enum Repeat {
    No = "no",
    All = "all",
    One = "one",
}

export enum Volume {
    Off = "off",
    Low = "low",
    Normal = "normal",
    High = "high",
}

export function getVolume(volume: number): Volume {
    if (volume > 0.75) {
        return Volume.High;
    } else if (volume > 0.25) {
        return Volume.Normal;
    } else if (volume > 0.0) {
        return Volume.Low;
    } else {
        return Volume.Off;
    }
}
