import { createLazyFileRoute } from '@tanstack/react-router'
import { UsernameForm as component } from 'c/UsernameForm'

export const Route = createLazyFileRoute('/form')({ component })
