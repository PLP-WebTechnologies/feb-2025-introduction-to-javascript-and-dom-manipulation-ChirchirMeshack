// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selection (Remains the same) ---
    const dynamicTextElement = document.getElementById('dynamic-text');
    const changeTextButton = document.getElementById('change-text-btn');

    const styleTargetElement = document.getElementById('style-target');
    const changeStyleButton = document.getElementById('change-style-btn');

    const roadmapContainer = document.getElementById('roadmap-steps-container');
    const addElementButton = document.getElementById('add-element-btn');
    const removeElementButton = document.getElementById('remove-element-btn');

    const currentYearSpan = document.getElementById('current-year');

    // --- Initial State & Variables (Minor change for step suggestion) ---
    let introTextToggle = false;
    let stepCounter = 0;
    // Array of suggested roadmap steps/topics
    const suggestedSteps = [
        "Learn Version Control (Git)",
        "Choose a Framework/Library (e.g., React, Vue, Angular, Node, Django)",
        "Explore Databases (SQL/NoSQL)",
        "Understand APIs & REST",
        "Learn about Testing",
        "Deployment Concepts (Docker, Cloud)",
        "Data Structures & Algorithms",
        "Practice Building Projects!"
    ];


    // --- Task 1: Change text content dynamically (Updated Text) ---
    if (changeTextButton && dynamicTextElement) {
        changeTextButton.addEventListener('click', () => {
            introTextToggle = !introTextToggle;
            if (introTextToggle) {
                // New "Tip" text
                dynamicTextElement.textContent = 'Tip: Don\'t get overwhelmed! Start with the basics (HTML, CSS, JS) regardless of the path. Consistency is key!';
            } else {
                // Original text restored
                dynamicTextElement.textContent = 'Every developer journey starts somewhere. Are you leaning towards Frontend, Backend, Full-Stack, Mobile, or something else?';
            }
            console.log("Intro text/tip toggled.");
        });
    } else {
        console.warn("Change Text button or target element not found.");
    }


    // --- Task 2: Modify CSS styles via JavaScript (Functionality Remains the Same) ---
    // No changes needed here, the class 'highlighted' is generic enough
    // for "In Progress" or any visual emphasis.
    if (changeStyleButton && styleTargetElement) {
        changeStyleButton.addEventListener('click', () => {
            styleTargetElement.classList.toggle('highlighted');
            // Optional: Change button text based on state
             if (styleTargetElement.classList.contains('highlighted')) {
                changeStyleButton.textContent = "Mark 'JavaScript Fundamentals' as Done"; // Or just keep toggle text
             } else {
                changeStyleButton.textContent = "Mark 'JavaScript Fundamentals' In Progress";
             }
            console.log("Highlight style toggled for fundamentals.");
        });
    } else {
        console.warn("Change Style button or target element not found.");
    }

    // --- Task 3: Add an element when a button is clicked (Updated Content Generation) ---
    if (addElementButton && roadmapContainer) {
        addElementButton.addEventListener('click', () => {
            // 1. Create a new element
            const newStep = document.createElement('p');

            // 2. Set its content using suggestions array
            let stepText;
            if (stepCounter < suggestedSteps.length) {
                stepText = suggestedSteps[stepCounter];
            } else {
                // Default text if suggestions run out
                stepText = `Explore Advanced Topic #${stepCounter - suggestedSteps.length + 1}`;
            }
            newStep.textContent = `Module ${stepCounter + 1}: ${stepText}`;

            // Increment counter *after* using it for the array index
            stepCounter++;

            // 3. (Optional) Add classes or attributes if needed
            // newStep.classList.add('roadmap-module'); // Example

            // 4. Append the new element
            roadmapContainer.appendChild(newStep);
            console.log("Roadmap learning module added.");
        });
    } else {
        console.warn("Add Element button or container not found.");
    }

    // --- Task 4: Remove an element when a button is clicked (Updated Counter Logic) ---
    if (removeElementButton && roadmapContainer) {
        removeElementButton.addEventListener('click', () => {
            if (roadmapContainer.lastElementChild) {
                roadmapContainer.removeChild(roadmapContainer.lastElementChild);
                // Decrement the counter *only* if it's positive,
                // ensuring it aligns with the added steps.
                if (stepCounter > 0) {
                     stepCounter--;
                }
                console.log("Last roadmap module removed.");
            } else {
                console.log("No roadmap modules to remove.");
            }
        });
    } else {
        console.warn("Remove Element button or container not found.");
    }

    // --- Bonus: Update Copyright Year Dynamically (Remains the same) ---
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    console.log("Interactive Developer Roadmap Initialized.");

}); // End of DOMContentLoaded listener
