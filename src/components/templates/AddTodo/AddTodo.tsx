import React, { useState } from 'react';

import { Header } from '../../molecules/Header';
import { TextInput } from '../../atoms/TextInput';
import { ReactComponent as SearchIcon } from '../../atoms/Icons/search.svg';
import { Toast } from '../../atoms/Toast';

import {
    Wrapper,
    SearchWrapper,
} from './styles';

export type AddTodoProps = {
    onAddTodo?: (e: string) => void;
    onBack?: (e: any) => void;
};

const AddTodo = ({ onAddTodo = () => {}, onBack }: AddTodoProps) => {
    const [todo, setTodo] = useState("");
    const [showToast, setShowToast] = useState(false);

    const onPressEnterHandler = () => {
        onAddTodo(todo);
        setTodo("");
        setShowToast(true);
    };

    return (
        <Wrapper>
            <Header title="Add To do" type="navigation" onBack={onBack} />
            <SearchWrapper>
                <TextInput 
                    value={todo}
                    prefix={<SearchIcon />} 
                    onChange={e => setTodo(e.currentTarget.value)} 
                    onPressEnter={onPressEnterHandler} 
                    allowClear 
                />
            </SearchWrapper>
            <Toast 
                message="To do saved" 
                duration={2} 
                show={showToast} 
                onClose={() => setShowToast(false)} 
            />
        </Wrapper>
    );
};

export default AddTodo; 