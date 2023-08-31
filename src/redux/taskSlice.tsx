import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";


export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        pending: false,
        error: null,
    },
    reducers: {
        startCall: (state) => {
            state.pending = true;
        },
        successCall: (state, action) => {
            state.pending = false;
            state.tasks = action.payload
        },
        failCall: (state, action) => {
            state.pending = false;
            state.error = action.payload.err;
        }
    }
})

export const {startCall, successCall, failCall} = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks

export default taskSlice.reducer;