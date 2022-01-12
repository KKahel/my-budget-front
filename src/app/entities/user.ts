export class User {
    id!: number;
    email!: string;
    firstName!: string;
    lastName!: string;
    // role!: UserRole;
    token?: string;
    // createdAt!: Date;
}

export enum UserRole {
    Admin = 0,
    Member = 1
}