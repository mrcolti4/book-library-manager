export interface UserAuthLog {
    id: string;
    ip_address: string;
    login_at: string | null;
    login_successful: boolean | null;
    logout_at: string | null;
    user_agent: string;
}

export type AuthLogStatus = "login" | "logout" | "failed_login" | "uknown";