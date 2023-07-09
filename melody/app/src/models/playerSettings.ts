import { Repeat, type RepeatLiteral, Volume, getVolume } from "@/models/enums";

export interface PlayerSettingsModel {
    playing: boolean;
    shuffle: boolean;
    repeat: RepeatLiteral;
    volume: number;
    volume_store: number;
}

export class PlayerSettings {
    playing: boolean;
    shuffle: boolean;
    repeat: Repeat;
    volume: number;
    volumeStore: number;

    constructor(model: PlayerSettingsModel) {
        this.playing = model.playing;
        this.shuffle = model.shuffle;
        this.repeat = model.repeat as Repeat;
        this.volume = model.volume;
        this.volumeStore = model.volume_store;
    }

    togglePlaying() {
        this.playing = !this.playing;
    }

    toggleShuffle() {
        this.shuffle = !this.shuffle;
    }

    toggleRepeat() {
        switch (this.repeat) {
            case Repeat.No:
                return Repeat.All;

            case Repeat.All:
                return Repeat.One;

            case Repeat.One:
                return Repeat.No;
        }
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

    isRepeatAll() {
        return this.repeat == Repeat.All;
    }

    isRepeatOne() {
        return this.repeat == Repeat.One;
    }

    isRepeatAny() {
        return this.repeat != Repeat.No;
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
