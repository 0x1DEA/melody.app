export interface TokenModel {
    token: string;
    token_type: string;
    created_at: string;
    expires_at: string | null;
}

export class Token {
    token: string;
    tokenType: string;
    createdAt: Date;
    expiresAt: Date | null;

    constructor(model: TokenModel) {
        this.token = model.token;
        this.tokenType = model.token_type;
        this.createdAt = new Date(model.created_at);

        let expiresAt = model.expires_at;

        if (expiresAt == null) {
            this.expiresAt = null;
        } else {
            this.expiresAt = new Date(expiresAt);
        }
    }
}
