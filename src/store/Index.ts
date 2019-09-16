import { configure } from 'mobx'

import TaskList from './TaskList'

import { ITaskItem } from '../types/ITaskItem'

configure({
    enforceActions: 'observed'
})

export const taskList = new TaskList<ITaskItem>()