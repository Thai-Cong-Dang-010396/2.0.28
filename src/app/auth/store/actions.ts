import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "../types/backendErrors.interface";

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register: props<{request: RegisterRequestInterface}>(),
        'Register success': props<{currentUser: CurrentUserInterface}>(),
        'Register failure': props<{errors: BackendErrorsInterface}>(),
    }
})

// export const register = createAction(
//     '[Auth] Register', 
//     props<{request: RegisterRequestInterface}>()
// );

// export const registerSuccess = createAction(
//     '[Auth] RegisterSuccess', 
//     props<{request: RegisterRequestInterface}>()
// );

// export const registerFailure = createAction(
//     '[Auth] RegisterFailure', 
//     props<{request: RegisterRequestInterface}>()
// );