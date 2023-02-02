import React, { useState } from 'react';

import { Header } from '../../molecules/Header';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from '../../atoms/Icons/search.svg';
import {
    Wrapper,
    SelectListWrapper,
    SearchWrapper,
    NoTodoWrapper,
    CenterWrapper,
    TodoSelectListWrapper,
} from './styles';
import { TodoSelectList } from '../../organisms/TodoSelectList';
import { SelectModal } from '../../molecules/SelectModal';
import { TodoType } from '../../../data';
import { NoTodo } from '../../molecules/NoTodo';

export type AddTodoProps = {
    query: string,
    todos: TodoType[],
    deleteTodos: (ids: string[]) => Promise<void>;
    completeTodos: (ids: string[]) => Promise<void>;
    onSearchInput: (query: string) => void;
    onBack: () => void;
};

const SearchTodo = ({ 
        query,
        todos,
        deleteTodos, 
        completeTodos, 
        onBack, 
        onSearchInput,
    }: AddTodoProps) => {
    const [selectedTodoIds, setSelectedTodoIds] = useState<string[]>([]);
    const isShowSelectModal = !!(query.length && selectedTodoIds.length && todos.length);

    const onSelectedTodoHandler = (todo: TodoType) => {
        if (selectedTodoIds.includes(todo.id))
            setSelectedTodoIds(selectedTodoIds.filter(id => id !== todo.id));
        else 
            setSelectedTodoIds([...selectedTodoIds, todo.id]);
    };

    const onSelectAllHandler = () => {
        setSelectedTodoIds(todos.filter(todo => !todo.isDone).map(todo => todo.id));
    };

    const onCompleteSelectedHandler = async () => {
        await completeTodos(selectedTodoIds);
    };

    const onDeleteSelectedHandler = async () => {
        await deleteTodos(selectedTodoIds);
    };

    const onChangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        onSearchInput(e.currentTarget.value);
    };

    return (
        <Wrapper>
            <Header title="Search to do" type="navigation" onBack={onBack} />
            <SearchWrapper>
                <TextInput 
                    prefix={<SearchIcon />} 
                    onChange={onChangeInputHandler} 
                    allowClear 
                />
            </SearchWrapper>
            <SelectListWrapper $showModal={isShowSelectModal}>
                {
                    query.length !== 0 && todos.length === 0 ? 
                    (
                        <NoTodoWrapper>
                            <NoTodo>
                                <CenterWrapper>No to do found.</CenterWrapper>
                                <CenterWrapper>Try different keywords.</CenterWrapper>
                            </NoTodo>
                        </NoTodoWrapper>
                    ) :
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
                isShow={isShowSelectModal}
                onSelectAll={onSelectAllHandler}
                onDeleteSelected={onDeleteSelectedHandler}
                onCompleteSelected={onCompleteSelectedHandler}
            />
        </Wrapper>
    );
};

export default SearchTodo; 