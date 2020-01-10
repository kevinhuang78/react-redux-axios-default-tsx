import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomQuote } from "../actions";

export const withQuoteData = (Component: React.FC) => {
    return (props: any) => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getRandomQuote());
        }, [dispatch]);
        return <Component {...props} />;
    };
};