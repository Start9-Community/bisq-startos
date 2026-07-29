import { sdk } from '../sdk'
import { configureBitcoinConnection } from './configureBitcoinConnection'
import { setPassword } from './setPassword'

export const actions = sdk.Actions.of()
  .addAction(setPassword)
  .addAction(configureBitcoinConnection)
