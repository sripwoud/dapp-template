import type { FC } from 'react'

export interface UserProps {
  id: number
  name: string
}

export const User: FC<UserProps> = ({ id, name }) => {
  return <div key={id}>{name}</div>
}
