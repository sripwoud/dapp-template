import { createFileRoute } from '@tanstack/react-router'
import type { UserProps } from 'c/User'
import { query } from 'l/query'
import { BarLoader as pendingComponent } from 'react-spinners'

export const Route = createFileRoute('/query')({
  component,
  loader: async () =>
    query.fetchQuery({
      queryKey: ['users'],
      queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json()),
    }),
  pendingComponent,
})

function component() {
  const users: UserProps[] = Route.useLoaderData()
  return (
    <ul className='list-disc list-inside'>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
