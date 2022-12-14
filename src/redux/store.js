import { configureStore} from "@reduxjs/toolkit";
import noteSlince from './notes/noteSlince';

export const store = configureStore({
    reducer:{
        notes: noteSlince,
    },
});