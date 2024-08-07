'use client'
import { useReadCounterNumber } from '../generated'

export const Count = () => {
  const { data: counter } = useReadCounterNumber()
  return <div className='font-bold text-lg'>Count: {counter?.toString()}</div>
}
