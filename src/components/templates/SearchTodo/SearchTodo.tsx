import React, { useEffect, useState } from 'react';

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
    deleteTodos: (ids: string[]) => Promise<void>;
    completeTodos: (ids: string[]) => Promise<void>;
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

    const isShowSelectModal = !!(query.length && selectedTodoIds.length && filteredTodos.length);

    useEffect(() => {
        setFilteredTodos(
            todos.filter(todo => query.length && todo.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
        ));
    }, [query, todos])

    const onSelectedTodoHandler = (todo: TodoType) => {
        if (selectedTodoIds.includes(todo.id))
            setSelectedTodoIds(selectedTodoIds.filter(id => id !== todo.id));
        else 
            setSelectedTodoIds([...selectedTodoIds, todo.id]);
    };

    const onSelectAllHandler = () => {
        setSelectedTodoIds(filteredTodos.filter(todo => !todo.isDone).map(todo => todo.id));
    };

    const onCompleteSelectedHandler = async () => {
        await completeTodos(selectedTodoIds);
    };

    const onDeleteSelectedHandler = async () => {
        await deleteTodos(selectedTodoIds);
    };

    const onChangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
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