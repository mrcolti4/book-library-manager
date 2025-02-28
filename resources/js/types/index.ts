export type AuthenticateUserData = {
    id: number;
    email: string;
    email_verified_at: string | null;
    name: string;
    role: "user" | "admin";
};
