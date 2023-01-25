import React, { useState } from 'react';

import { Header } from '../../molecules/Header';
import { TodoSelectList } from '../../organisms/TodoSelectList';
import { SelectModal } from '../../molecules/SelectModal';
import {
    Wrapper,
    SelectListWrapper,
    NoTodoWrapper,
    TodoSelectListWrapper,
} from './styles';
import { TodoType } from '../../../data';
import { NoTodo } from '../../molecules/NoTodo';

export type SelectTodoProps =   {
    todos: TodoType[],
    deleteTodos: (ids: string[]) => void;
    completeTodos: (ids: string[]) => void;
    onBack: () => void;
    onAddTodo: () => void;
};

const SelectTodo = ({ 
        todos,
        deleteTodos, 
        completeTodos, 
        onBack, 
        onAddTodo, 
    }: SelectTodoProps) => {
    const [selectedTodoIds, setSelectedTodoIds] = useState<string[]>([]);
    
    const onSelectedTodoHandler = (todo: TodoType) => {
        if (selectedTodoIds.includes(todo.id))
            setSelectedTodoIds(selectedTodoIds.filter(id => id !== todo.id));
        else 
            setSelectedTodoIds([...selectedTodoIds, todo.id]);
    };

    const onSelectAllHandler = () => {
        setSelectedTodoIds(todos.filter(todo => !todo.isDone).map(todo => todo.id));
    };

    const onCompleteSelectedHandler = () => {
        completeTodos(selectedTodoIds);
    };

    const onDeleteSelectedHandler = () => {
        deleteTodos(selectedTodoIds);
    };

    return (
        <Wrapper>
            <Header title="Select to do" type="navigation" onBack={onBack} />
            <SelectListWrapper>
                {
                     todos.length === 0 ? 
                     (<NoTodoWrapper><NoTodo isShowButton onAddTodo={onAddTodo}>No to do yet</NoTodo></NoTodoWrapper>)
                     : 
                     (
                        <TodoSelectListWrapper>
                            <TodoSelectList 
                                todos={todos} 
                                onSelectedTodo={onSelectedTodoHandler} 
                                selectedIds={selectedTodoIds}
                            />
                        </TodoSelectListWrapper>
                     )
                }
            </SelectListWrapper>
            <SelectModal 
                isShow={selectedTodoIds.length !== 0}
                onSelectAll={onSelectAllHandler}
                onDeleteSelected={onDeleteSelectedHandler}
                onCompleteSelected={onCompleteSelectedHandler}
            />
        </Wrapper>
    );
};

export default SelectTodo;
