 const onKeyDownHandler = (e, input, setInput, suggestions, setSuggestions, activeSuggestion, setActiveSuggestion) => {

    switch (e.keyCode) {
        case 13:
            console.log("KEY 13 - ENTER");
            setInput(suggestions[activeSuggestion])
            setSuggestions([])

            break;
        case 38:
            console.log("KEY 38 - UP ARROW");
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(activeSuggestion - 1)
            break;
        case 40:
            console.log("KEY 40 - DOWN ARROW");
            if ((activeSuggestion ) === suggestions.length-1) {
                return;
            }
            setActiveSuggestion(activeSuggestion + 1)
            break;
        case 27:
            console.log("KEY: 27 - ESC");
            setSuggestions([])
            break;
        default:
            console.log("NO UP/DOWN/ENTER/ESC KEY ENTERED")
    }
}

export default onKeyDownHandler
