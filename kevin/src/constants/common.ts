import type { ComponentType } from 'react'

import UITodoListPage from '../pages/UI/TodoList'
import UIJobBoardPage from '../pages/UI/JobBoard'
import UIContactFormPage from '../pages/UI/ContactForm'
import UITemperatureConverterPage from '../pages/UI/TemperatureConverter'

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
      {
        label: 'Job Board',
        path: '/UI/JobBoard',
        component: UIJobBoardPage,
      },
      {
        label: 'Contact Form',
        path: '/UI/ContactForm',
        component: UIContactFormPage,
      },
      {
        label: 'Temperature Converter',
        path: '/UI/TemperatureConverter',
        component: UITemperatureConverterPage,
      }
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