class Todo {
    id:string;
    text: string;

    constructor(courseText:string){
        this.text =courseText,
        this.id = new Date().toISOString();
    }
}

export default Todo