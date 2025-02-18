import { None, type Option } from '@hazae41/option'
import { atom } from 'jotai'

export const latom = atom<Option<string>>(new None())
