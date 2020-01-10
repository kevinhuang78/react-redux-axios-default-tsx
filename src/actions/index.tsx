import { Dispatch } from "redux";
import API from "../utils/API";
import {quoteConstants} from "../constants/quotesConstants";

export const getRandomQuote = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: quoteConstants.GET_QUOTE_REQUEST });
        API.get("/random")
            .then(response =>
                dispatch({
                    type: quoteConstants.GET_QUOTE_SUCCESS,
                    data: response.data
                })
            )
            .catch(error =>
                dispatch({
                    type: quoteConstants.GET_QUOTE_FAILURE,
                    data: error
                })
            );
    };
};