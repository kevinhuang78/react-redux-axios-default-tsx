import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getRandomQuote} from "../actions";

const GenerateNewQuote = () => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (clicked) dispatch(getRandomQuote());
        else setClicked(false);
    }, [dispatch, clicked]);

    return (
        <button onClick={() => setClicked(!clicked)}>Generate new quote</button>
    );
};

export default GenerateNewQuote;