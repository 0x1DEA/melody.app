import { Platform, type PlatformLiteral, PrivacyType, type PrivacyTypeLiteral } from "@/models/enums";

export interface UserSettingsModel {
    name: string;
    explicit: boolean;
    autoplay: boolean;
    platform: PlatformLiteral;
    privace_type: PrivacyTypeLiteral;
}

export class UserSettings {
    name: string;
    explicit: boolean;
    autoplay: boolean;
    platform: Platform;
    privacyType: PrivacyType;

    constructor(model: UserSettingsModel) {
        this.name = model.name;
        this.explicit = model.explicit;
        this.autoplay = model.autoplay;
        this.platform = model.platform as Platform;
        this.privacyType = model.privace_type as PrivacyType;
    }
}
