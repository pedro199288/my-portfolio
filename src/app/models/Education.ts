export class Education {
    constructor(
        public _id: string,
        public key: string,
        public date: {
            start: Date,
            end: Date,
        },
        public center: string,
        public name: string,
        public clarification: string,
        public link: string
    ){}
}