import { combineReducers } from "redux";
import { oneTicketReducer } from "./oneTicketReducer";
import { ticketsReducer } from "./tickertsReducer";

export const rootReducer = combineReducers({
    tickets: ticketsReducer,
    oneTicket: oneTicketReducer
})

export type RootState = ReturnType<typeof rootReducer>