import { AuthState } from "../auth/authReducer"
import { RooterState } from "../router/rooterReducer"

export type StateObject = {
    auth: AuthState
    rooter: RooterState
}
