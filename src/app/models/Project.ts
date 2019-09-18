export class Project {
    constructor(
        public _id: string,
        public key: string,
        public order: number,
        public name: string,
        public company: string,
        public tools: [string],
        public description: string,
        public website: string,
        public image: string,
    ){}
}