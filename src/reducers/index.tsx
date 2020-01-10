import {quoteConstants} from "../constants/quotesConstants";

export interface IQuoteData {
    quote?: {
        "_id": string;
        author: string;
        content: string;
    },
    loading: boolean;
}

const entities = (
    state: IQuoteData = {
        quote: undefined,
        loading: false
    },
    action: any
): IQuoteData => {
    switch (action.type) {
        case quoteConstants.GET_QUOTE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case quoteConstants.GET_QUOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                quote: action.data
            };
        case quoteConstants.GET_QUOTE_FAILURE:
            return {
                ...state,
                loading: false,
                quote: undefined
            };
        default:
            return state;
    }
};

export default entities;
