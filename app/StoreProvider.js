import React, { useRef } from 'react'
import { makeStore } from '../src/lib/store'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
