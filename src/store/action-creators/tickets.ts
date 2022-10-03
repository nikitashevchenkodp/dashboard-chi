import { TicketsActionTypes } from "../reducers/tickertsReducer"

export const fetchAllTickets = () => {
    return {
        type: TicketsActionTypes.FETCH_TICKETS_PENDING,
    }
}
export const loadAllTickets = (tickets: any[]) => {
    return {
        type: TicketsActionTypes.FETCH_TICKETS_FULLFILED,
        payload: tickets
    }
}

export const rejectAllTickets = (error: string) => {
    return {
        type: TicketsActionTypes.FETCH_TICKETS_REJECTED,
        payload: error
    }
}

export const updateTickets = (ticket: any) => {
    return {
        type: TicketsActionTypes.UPDATE_TICKET,
        payload: ticket
    }
}

export const deleteTicket = (id: number) => {
    return {
        type: TicketsActionTypes.DELETE_TICKET,
        payload: id
    }
}


