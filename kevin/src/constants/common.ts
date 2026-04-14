import type { ComponentType } from 'react'

import UITodoListPage from '../pages/UI/TodoList'

export type SideMenuItem = {
  label: string
  path: string
  component: ComponentType
}

export type TopMenuItem = {
  label: string
  defaultPath: string
  children: SideMenuItem[]
}

export const topMenuItems: TopMenuItem[] = [
  {
    label: 'UI',
    defaultPath: '/UI/TodoList',
    children: [
      {
        label: 'Todo List',
        path: '/UI/TodoList',
        component: UITodoListPage,
      },
    ],
  },
  {
    label: 'JS-func',
    defaultPath: '/JS-func/A',
    children: [
    ],
  },
  {
    label: 'Algorithm',
    defaultPath: '/Algorithm/A',
    children: [
    ],
  },
]

export const defaultPath = topMenuItems[0].defaultPath

export function findMenuByPath(pathname: string) {
  for (const topMenu of topMenuItems) {
    const activeItem = topMenu.children.find((child) => child.path === pathname)

    if (activeItem) {
      return {
        topMenu,
        activeItem,
      }
    }
  }

  return null
}