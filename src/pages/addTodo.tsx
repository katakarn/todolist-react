import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "react-rainbow-components";
// import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { TodoService } from "../service/todo.service";

interface AddTodoProps {
    visible: boolean;
    onHide: () => void;
}

export const AddTodo: React.FC<AddTodoProps> = (props) => {
    const { visible, onHide } = props;
    const [title, setTitle] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");

    const footer = () => {
        return (
            <div>
                <Button
                    label="ADD"
                    onClick={() => onAdd()}
                // autoFocus
                />
            </div>
        );
    };

    const onAdd = () => {
        const todo = {
            title,
            description,
        };
        TodoService.addTodo(todo).then((res) => {
            onHide();
        });
    };

    // const onAdd = () => {
    //     TodoService.addTodo({ title, desc: description })
    //         .then((res) => {
    //             onHide();
    //             console.log(res);
    //         })
    // };

    return <Dialog className="dialog" header="What your plan?" visible={visible} footer={footer} onHide={onHide}>
        <div>
            <label>Title : </label>
            <InputText style={{ marginLeft: "51px" }} placeholder="" onChange={(e) => { setTitle(e.target.value) }} />
            <br />
            <br />
            <label>Description : </label>
            <InputText placeholder="" onChange={(e) => { setDescription(e.target.value) }} />
        </div>
    </Dialog>
};

export default AddTodo;