import { Platform, type PlatformLiteral, PrivacyType, type PrivacyTypeLiteral } from "@/models/enums";

export interface UserSettingsModel {
    name: string;
    explicit: boolean;
    autoplay: boolean;
    platform: PlatformLiteral;
    privacy_type: PrivacyTypeLiteral;
}

export interface UserSettingsType {
    name: string;
    explicit: boolean;
    autoplay: boolean;
    platform: PlatformLiteral;
    privacyType: PrivacyTypeLiteral;
}

export function userSettingsTypeFromModel(model: UserSettingsModel): UserSettingsType {
    return {
        name: model.name,
        explicit: model.explicit,
        autoplay: model.autoplay,
        platform: model.platform,
        privacyType: model.privacy_type,
    };
}

export class UserSettings {
    name: string;
    explicit: boolean;
    autoplay: boolean;
    platform: Platform;
    privacyType: PrivacyType;

    static fromModel(model: UserSettingsModel) {
        return new this(userSettingsTypeFromModel(model));
    }

    constructor(userSettings: UserSettingsType) {
        this.name = userSettings.name;
        this.explicit = userSettings.explicit;
        this.autoplay = userSettings.autoplay;
        this.platform = userSettings.platform as Platform;
        this.privacyType = userSettings.privacyType as PrivacyType;
    }
}
