export interface TokenModel {
    token: string;
    token_type: string;
    created_at: string;
    expires_at: string | null;
}

export interface TokenType {
    token: string;
    tokenType: string;
    createdAt: string;
    expiresAt: string | null;
}

export function tokenTypeFromModel(model: TokenModel): TokenType {
    return {
        token: model.token,
        tokenType: model.token_type,
        createdAt: model.created_at,
        expiresAt: model.expires_at,
    };
}

export class Token {
    token: string;
    tokenType: string;
    createdAt: Date;
    expiresAt: Date | null;

    static fromModel(model: TokenModel) {
        return new this(tokenTypeFromModel(model));
    }

    constructor(token: TokenType) {
        this.token = token.token;
        this.tokenType = token.tokenType;
        this.createdAt = new Date(token.createdAt);

        const expiresAt = token.expiresAt;

        if (expiresAt == null) {
            this.expiresAt = null;
        } else {
            this.expiresAt = new Date(expiresAt);
        }
    }
}
