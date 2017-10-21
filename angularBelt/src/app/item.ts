export class Item {
    constructor(
        public id: string = "",
        public item_content: string = "",
        public questions: Array<Object> = [],
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}
