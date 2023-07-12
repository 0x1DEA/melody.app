import { Repeat, type RepeatLiteral, Volume, getVolume, nextRepeat } from "@/models/enums";

export interface PlayerSettingsModel {
    playing: boolean;
    shuffle: boolean;
    repeat: RepeatLiteral;
    volume: number;
    volume_store: number;
}

export interface PlayerSettingsType {
    playing: boolean;
    shuffle: boolean;
    repeat: RepeatLiteral;
    volume: number;
    volumeStore: number;
}

export function playerSettingsTypeFromModel(model: PlayerSettingsModel): PlayerSettingsType {
    return {
        playing: model.playing,
        shuffle: model.shuffle,
        repeat: model.repeat,
        volume: model.volume,
        volumeStore: model.volume_store,
    };
}

const DEFAULT_PLAYING = false;
const DEFAULT_SHUFFLE = false;
const DEFAULT_REPEAT = Repeat.Default as RepeatLiteral;
const DEFAULT_VOLUME = 0.5;
const DEFAULT_VOLUME_STORE = 0.0;

export function defaultPlayerSettingsType(): PlayerSettingsType {
    return {
        playing: DEFAULT_PLAYING,
        shuffle: DEFAULT_SHUFFLE,
        repeat: DEFAULT_REPEAT,
        volume: DEFAULT_VOLUME,
        volumeStore: DEFAULT_VOLUME_STORE,
    };
}

export class PlayerSettings {
    playing: boolean;
    shuffle: boolean;
    repeat: Repeat;
    volume: number;
    volumeStore: number;

    static fromModel(model: PlayerSettingsModel) {
        return new this(playerSettingsTypeFromModel(model));
    }

    static default() {
        return new this(defaultPlayerSettingsType());
    }

    constructor(playerSettings: PlayerSettingsType) {
        this.playing = playerSettings.playing;
        this.shuffle = playerSettings.shuffle;
        this.repeat = playerSettings.repeat as Repeat;
        this.volume = playerSettings.volume;
        this.volumeStore = playerSettings.volumeStore;
    }

    togglePlaying() {
        this.playing = !this.playing;
    }

    toggleShuffle() {
        this.shuffle = !this.shuffle;
    }

    toggleRepeat() {
        this.repeat = nextRepeat(this.repeat);
    }

    toggleVolume() {
        const volume = this.volume;

        if (!volume) {
            this.volume = this.volumeStore;
            this.volumeStore = 0.0;
        } else {
            this.volume = 0.0;
            this.volumeStore = volume;
        }
    }

    isPlaying() {
        return this.playing;
    }

    isShuffle() {
        return this.shuffle;
    }

    isRepeatContext() {
        return this.repeat == Repeat.Context;
    }

    isRepeatOne() {
        return this.repeat == Repeat.One;
    }

    isRepeatAny() {
        return this.repeat != Repeat.None;
    }

    getVolume() {
        return getVolume(this.volume);
    }

    isVolumeOff() {
        return this.getVolume() == Volume.Off;
    }

    isVolumeLow() {
        return this.getVolume() == Volume.Low;
    }

    isVolumeNormal() {
        return this.getVolume() == Volume.Normal;
    }

    isVolumeHigh() {
        return this.getVolume() == Volume.High;
    }
}
