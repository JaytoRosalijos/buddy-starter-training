import React, { useEffect, useState } from 'react';

import { NoTodo } from '../../molecules/NoTodo';
import { Header } from '../../molecules/Header';
import { TodoList } from '../../organisms/TodoList';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from '../../atoms/Icons/search.svg';
import { ReactComponent as PlusIcon } from '../../atoms/Icons/plus.svg';
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
import { GlobalAction } from '../../../context/TodoContext';

export type TodoHomeProps = {
    todos?: TodoType[];
    onLogout: (e: any) => void;
    deleteTodo: (id: string) => void;
    onAddTodo: () => void;
    onUpdateTodo: (todo: TodoType) => void;
    onSearch: () => void;
    onSelect: () => void;
    globalAction: GlobalAction,
    clearGlobalAction: () => void;
};

type ListActiveItem = {
    id: string;
    status: TodoListItemStatus;
};

type ToastMessageStatus = {
    show: boolean;
    message: string;
};

type DeleteItemModalStatus = {
    toBeDeletedId: string;
    show: boolean;
};

const TodoHome = ({ 
        todos = [], 
        onLogout, 
        deleteTodo,
        onAddTodo,
        onUpdateTodo,
        onSearch,
        onSelect,
        globalAction,
        clearGlobalAction,
    }: TodoHomeProps) => {
    const [deleteItemModalStatus, setDeleteItemModalStatus] = useState<DeleteItemModalStatus>({ toBeDeletedId: "", show: false })
    const [activeListItem, setListActiveItem] = useState<ListActiveItem>({ id: "", status: "normal" });
    const [toastMessageStatus, setToastMessageStatus] = useState<ToastMessageStatus>({ show: false, message: "" });
    
    useEffect(() => {
        const toastMessages  = {
            update: "To do updated",
            complete: "To do completed",
            delete: "To do deleted",
        };
        if ([ "update", "complete", "delete" ].includes(globalAction)) {
            setToastMessageStatus({ show: true, message: toastMessages[String(globalAction)] })
        }
    }, [globalAction]);

    const onToBeDeleteTodo = (todo: TodoType) => {
        setListActiveItem({ id: todo.id, status: "warning" })
        setDeleteItemModalStatus({ toBeDeletedId: todo.id, show: true });
    };

    const onNotDeleteTodo = () => {
        setDeleteItemModalStatus({ toBeDeletedId: "", show: false });
    };

    const onCloseToast = () => {
        setToastMessageStatus({ show: false, message: "" });
        clearGlobalAction();
    };
    
    const onDeleteTodoHandler = () => {
        deleteTodo(deleteItemModalStatus.toBeDeletedId);
        setDeleteItemModalStatus({ toBeDeletedId: "", show: false });
    };

    const onClickKebabMenu = (todo:  TodoType) => {
        setListActiveItem({ id: todo.id, status: "select" })
    };

    const onClickOutsideKebabMenu = () => {
        setListActiveItem({ id: "", status: "normal" });
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
                    todos.length === 0 ? 
                        (<NoTodoWrapper><NoTodo isShowButton onAddTodo={onAddTodo}>To do list increases productivity.</NoTodo></NoTodoWrapper>)
                        : <TodoList 
                                todos={todos} 
                                activeId={activeListItem.id}
                                onToBeDeleteTodo={onToBeDeleteTodo} 
                                onUpdateTodo={onUpdateTodo} 
                                status={activeListItem.status} 
                                onClickKebabMenu={onClickKebabMenu}
                                onClickOutsideKebabMenu={onClickOutsideKebabMenu}
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
                isShow={deleteItemModalStatus.show} 
                onNotDeleteTodo={onNotDeleteTodo}
                onDeleteTodo={onDeleteTodoHandler}
            />
            <Toast 
                message={toastMessageStatus.message} 
                duration={1} 
                show={toastMessageStatus.show} 
                onClose={onCloseToast} 
            />
        </Wrapper>
    );
};

export default TodoHome;