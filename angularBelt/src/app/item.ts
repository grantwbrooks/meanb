export class Item {
    constructor(
        public id: string = "",
        public item_content: string = "",
        public isEditable: boolean = false,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}
