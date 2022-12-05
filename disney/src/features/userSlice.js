import { createSlice } from '@reduxjs/toolkit';

localStorage.getItem('name');

const initialState = {
    name: localStorage.getItem('name'),
    mobile: localStorage.getItem('mobile'),
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        executeLogin(state,action){
            state.name=action.payload.name;
            state.mobile=action.payload.name;
            localStorage.setItem('name',state.name);
            localStorage.setItem('mobile',state.mobile);
        },
        executeLogout(state, action){
            state.name=null;
            state.mobile=null;
            localStorage.setItem('name','');
            localStorage.setItem('mobile','');
        },
    }

});
export const currentUserName = (state)=> state.name;
export const {executeLogin, executeLogout} = userSlice.actions;
export default userSlice.reducer;