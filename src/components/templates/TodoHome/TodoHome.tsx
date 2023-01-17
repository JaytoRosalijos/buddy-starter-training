import React, { useState } from 'react';

import { NoTodo } from '../../molecules/NoTodo';
import { Header } from '../../molecules/Header';
import { TodoList } from '../../organisms/TodoList';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { TodoType } from '../../../data';
import { DeleteTodoModal } from '../../molecules/DeleteTodoModal';
import {
    Wrapper,
    SearchWrapper,
    TextInputWrapper,
    BodyWrapper,
    NoTodoWrapper,
    FloatButtonWrapper,
    CoverWrapper,
} from './styles';
import { TodoListItemStatus } from '../../molecules/TodoListItem/TodoListItem';
import { Toast } from '../../atoms/Toast';

export type TodoHomeProps = {
    todos?: TodoType[];
    onLogout?: (e: any) => void;
    deleteTodo?: (id: string) => void;
};

const TodoHome = ({ 
        todos = [], 
        onLogout, 
        deleteTodo = () => {},
    }: TodoHomeProps) => {
    
    const isEmpty = todos.length === 0;
    const [isShowDeleteModal, setShowDeleteModal] = useState(false);
    const [activeListItemId, setActiveListItemId] = useState<string>("");
    const [todoListItemStatus, setTodoListItemStatus] = useState<TodoListItemStatus>("normal");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    
    const onAddTodo = () => {
        alert("Redirect to Add Todo Page:");
    };

    const onUpdateTodo = (todo: TodoType) => {
        alert("Redirect to Todo Update Page: Updating title: " + todo.title);
    };

    const onToBeDeleteTodo = (todo: TodoType) => {
        setShowDeleteModal(true);
        setTodoListItemStatus("warning");
    };

    const onClickKebabMenu = (todo:  TodoType) => {
        setActiveListItemId(todo.id);
        setTodoListItemStatus("select");
    };

    const onNotDeleteTodo = () => {
        setShowDeleteModal(false);
        setTodoListItemStatus("normal");
    };

    const onSearch = () => {
        alert("Redirect to Todo Search Page...");
    };

    const onSelect = () => {
        alert("Redirect to Select Page...");
    };

    const onDeleteTodoHandler = () => {
        deleteTodo(activeListItemId);
        setActiveListItemId("");
        setShowDeleteModal(false);
        setToastMessage("To do deleted");
        setShowToast(true);
    };

    return (
        <Wrapper>
            <Header onLogout={onLogout} />
            <SearchWrapper>
                <TextInputWrapper onClick={onSearch}>
                    <CoverWrapper />
                    <TextInput prefix={<SearchIcon />} />
                </TextInputWrapper>
                <Button variance="secondary" onClick={onSelect}>Select</Button>
            </SearchWrapper>
            <BodyWrapper>
                { 
                    isEmpty ? 
                        (<NoTodoWrapper><NoTodo>To do list increases productivity.</NoTodo></NoTodoWrapper>)
                        : <TodoList 
                                todos={todos} 
                                activeId={activeListItemId}
                                onToBeDeleteTodo={onToBeDeleteTodo} 
                                onUpdateTodo={onUpdateTodo} 
                                status={todoListItemStatus} 
                                onClickKebabMenu={onClickKebabMenu}
                          />
                }
            </BodyWrapper>
            <FloatButtonWrapper>
                <Button 
                    icon={<PlusIcon />} 
                    shape="circle" 
                    size="large"
                    onClick={onAddTodo} 
                />
            </FloatButtonWrapper>
            <DeleteTodoModal 
                isShow={isShowDeleteModal} 
                onNotDeleteTodo={onNotDeleteTodo}
                onDeleteTodo={onDeleteTodoHandler}
            />
            <Toast 
                message={toastMessage} 
                duration={1} 
                show={showToast} 
                onClose={() => setShowToast(false)} 
            />
        </Wrapper>
    );
};

export default TodoHome;