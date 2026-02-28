import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Signup {
    role: Role;
    email: string;
    timestamp: Time;
}
export type Time = bigint;
export enum Role {
    teen = "teen",
    company = "company"
}
export interface backendInterface {
    addSignup(email: string, role: Role): Promise<void>;
    getAllSignups(): Promise<Array<Signup>>;
}
