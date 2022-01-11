export class User {
    id!: number;
    email!: string;
    firstname!: string;
    lastname!: string;
    // role!: UserRole;
    token?: string;
    // createdAt!: Date;
}

export enum UserRole {
    Admin = 0,
    Member = 1
}