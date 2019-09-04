export class Experience {
    constructor(
        public _id: string,
        public key: string,
        public date: {
            start: Date,
            end: Date,
        },
        public company: string,
        public rol: string,
        public description: string
    ){}
}