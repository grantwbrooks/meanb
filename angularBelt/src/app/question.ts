export class Question {
    constructor(
        public id: string = "",
        public _item: Object = {},
        public name: string = "",
        public question_content: string = "",
        public option1: Object = {text:"",count:0},
        public option2: Object = {text:"",count:0},
        public option3: Object = {text:"",count:0},
        public option4: Object = {text:"",count:0},
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}
