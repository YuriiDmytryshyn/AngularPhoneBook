import { IPeople } from "../interfaces/people.interface";

export class People implements IPeople {
    constructor(
        public firstName: string,
        public secondName: string,
        public numberPhone: string,
    ) {}
}