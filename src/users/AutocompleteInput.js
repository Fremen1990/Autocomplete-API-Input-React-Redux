import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "./duck/operations";
import actions from "./duck/actions";
import onKeyDownHandler from "../keyDownFunction";

const AutocompleteInput = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users)


    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([])
    const [activeSuggestion, setActiveSuggestion] = useState(0);


    const onChangeHandler = (input) => {
        let matches = []
        if (input.length > 0) {
            matches = Array.from(users.list).filter(usr => {
                const regex = new RegExp(`${input}`, "gi");
                return usr.match(regex)
            })
        }
        setSuggestions(matches)
        setInput(input)
        dispatch(actions.addInput(input))
    }


    const onSuggestHandler = (input) => {
        setInput(input)
        setSuggestions([])
    }


    useEffect(() => {
        dispatch(getAllUsers())
        console.log(users)
    }, [])

    return (
        <>
            <input placeholder=" type your name" type="text" className="form__input"
                   onChange={e => onChangeHandler(e.target.value)}
                   onKeyDown={e => onKeyDownHandler(e, input, setInput, suggestions, setSuggestions, activeSuggestion, setActiveSuggestion)}
                   onBlur={() => {
                       setTimeout(() => {
                           setSuggestions([])
                       }, 200)
                   }}
                   value={input}
            />
            <label> Name </label>

            <ul className="suggestions">

                {
                    suggestions && suggestions.map((suggestion, index) =>
                        <div key={index}
                             className={index === activeSuggestion ? 'suggestion suggestion-active'
                                 :
                                 'suggestion'}

                             onClick={() => onSuggestHandler(suggestion)}
                        >
                            <span> <i className="arrow right"></i> {suggestion}</span> {suggestion}
                        </div>
                    )
                }

            </ul>






        </>

    )
}
export default AutocompleteInput;
