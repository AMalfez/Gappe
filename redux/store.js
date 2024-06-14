import { configureStore, combineSlices } from '@reduxjs/toolkit'
import { modeSlice } from './features/mode/mode'

const rootReducer = combineSlices(modeSlice);

export const makeStore = () => {
  return configureStore({
    reducer: {rootReducer},
  })
}