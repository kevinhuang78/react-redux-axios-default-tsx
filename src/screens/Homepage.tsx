import React from "react";
import {connect} from "react-redux";
import {IQuoteData} from "../reducers";
import {withQuoteData} from "../helpers/withQuoteData";
import GenerateNewQuote from "../components/GenerateNewQuote";

interface IProps {
    quote?: {
        "_id": string;
        author: string;
        content: string;
    };
    loading: boolean;
}

const Homepage = (props: IProps) => {
    const { quote, loading } = props;

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <GenerateNewQuote />
                    <p>{quote && "ID: " + quote['_id']}</p>
                    <p>{quote && "Content: " + quote.content}</p>
                    <p>{quote && "Author: " + quote.author}</p>
                </div>
            )}
        </>
    );
};
const mapStateToProps = (state: IQuoteData) => {
    return {
        quote: state.quote,
        loading: state.loading
    };
};

export default withQuoteData(connect(mapStateToProps)(Homepage));