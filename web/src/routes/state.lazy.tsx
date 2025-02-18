import { createLazyFileRoute } from '@tanstack/react-router'
import { Latom as component } from 'c/Latom'

export const Route = createLazyFileRoute('/state')({
  component,
})
