import { createAppSlice } from "../../createAppSlice";

const initialState = "";

export const modeSlice = createAppSlice({
    name: "mode",
    initialState,
    reducers: (create)=>({
        setmode: create.reducer((state, action)=>{
            console.log(action.payload);
            state = action.payload;
            return state;
        })
    }),
    selectors: {
        selectMode: (mode) => mode
    }
})

export const {setmode} = modeSlice.actions
export const {selectMode} = modeSlice.selectors;