import {useContext} from 'react'

import { TodoContext } from '../../context';

export const useTodoContext = () => {
  return useContext(TodoContext)
}