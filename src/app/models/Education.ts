export class Education {
    constructor(
        public _id: string,
        public key: string,
        public date: {
            start: Date | string,
            end: Date | string,
        },
        public center: string,
        public name: string,
        public clarification: string,
        public link: string
    ){}
}