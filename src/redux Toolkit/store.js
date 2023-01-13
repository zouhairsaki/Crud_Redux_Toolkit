import {configureStore} from "@reduxjs/toolkit"
import FillieresSlice from "./FillieresSlice";
import UserSlice from "./UserSlice";



const store =configureStore({
    reducer:{
        users :UserSlice ,
        filliere :FillieresSlice
    }
})
export default store ;