import React, { useState, useCallback,memo } from 'react';

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

export function Assignment2() {
    const [inputText, setInputText] = useState('');

    // Your code starts here
    //without useCallback
    function showAlert() {
        console.log("🔄 Function Recreated");
        alert(inputText);
    }

    // Your code ends here
     
    //with useCallback 
    // Memoized function: It will only change if `inputText` changes
    //    const showAlert = useCallback(() => {
    //     console.log("🔄 Function Recreated");
    //     alert(inputText);
    // }, [inputText]);

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter some text"
            />
            <Alert showAlert={showAlert} />
        </div>
    );
};
const Alert = memo(({ showAlert }) => {
    return <button onClick={showAlert}>Show Alert</button>;
});

// Type a new text → You will see "🔄 Function Recreated" in the console because inputText changed.

// Type the same text again → You won’t see "🔄 Function Recreated" because inputText did not change.

//remaining useRef so its cover later video minute 28:15 
