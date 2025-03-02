export type AuthenticateUserData = {
    id: number;
    email: string;
    email_verified_at: string | null;
    name: string;
    role: "user" | "admin";
    created_at: string;
    blocked_at: string;
};
