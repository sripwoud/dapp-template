import { Link } from '@tanstack/react-router'
import { config } from 'l/config'
import { capitalize } from 'l/format'
import { thirdweb } from 'l/thirdweb'
import { ConnectButton } from 'thirdweb/react'

const links = ['form', 'query', 'state'] as const

export function Header() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to='/'>
        <h1 className='text-xl font-bold'>{config.appName}</h1>
      </Link>
      {links.map((r) => (
        <Link key={r} to={`/${r}`}>
          {capitalize(r)}
        </Link>
      ))}
      <ConnectButton client={thirdweb} />
    </nav>
  )
}
