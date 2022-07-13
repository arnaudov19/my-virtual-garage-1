export const LOGIN_BTN_CLICKED = "login/btn/clicked"
export const loginBtnClicked = (email: string, password: string) => ({
    type: LOGIN_BTN_CLICKED,
    payload: {
        email: email,
        password: password,
    },
})