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
    todos: TodoType[],
    deleteTodos: (ids: string[]) => void;
    completeTodos: (ids: string[]) => void;
    onBack: () => void;
};

const SearchTodo = ({ 
        todos,
        deleteTodos, 
        completeTodos, 
        onBack, 
    }: AddTodoProps) => {
    const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
    const [query, setQuery] = useState("");
    const [selectedTodoIds, setSelectedTodoIds] = useState<string[]>([]);

    const isShowSelectModal = query.length !== 0 && selectedTodoIds.length !== 0 && filteredTodos.length !== 0;

    const filterBySearch = (event) => {
        const _query = event.currentTarget.value;
        setQuery(_query);
        setFilteredTodos(todos.filter(todo => {
            return _query.length !== 0 && todo.title.toLowerCase().indexOf(_query.toLowerCase()) !== -1;
        }));
    };

    const onSelectedTodoHandler = (todo: TodoType) => {
        if (selectedTodoIds.includes(todo.id))
            setSelectedTodoIds(selectedTodoIds.filter(id => id !== todo.id));
        else 
            setSelectedTodoIds([...selectedTodoIds, todo.id]);
    };

    const onSelectAllHandler = () => {
        setSelectedTodoIds(filteredTodos.filter(todo => !todo.isDone).map(todo => todo.id));
    };

    const onCompleteSelectedHandler = () => {
        completeTodos(selectedTodoIds);
    };

    const onDeleteSelectedHandler = () => {
        deleteTodos(selectedTodoIds);
    };

    return (
        <Wrapper>
            <Header title="Search to do" type="navigation" onBack={onBack} />
            <SearchWrapper>
                <TextInput 
                    prefix={<SearchIcon />} 
                    onChange={filterBySearch} 
                    allowClear 
                />
            </SearchWrapper>
            <SelectListWrapper $showModal={isShowSelectModal}>
                {
                    query.length !== 0 && filteredTodos.length === 0 ? 
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
                                todos={filteredTodos} 
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