const slangDictionary = {
    "what up doe": "A Detroit greeting, similar to 'What’s up?'",
    "bussin": "Something that tastes really good.",
    "no cap": "For real, no lie.",
    "the d": "Short for Detroit.",
    "buffs": "Cartier glasses, a big status symbol in Detroit.",
    "slide": "To come over or pull up.",
    "jit": "A young person, often a kid or someone younger than you.",
    "bet": "Can mean 'okay,' 'we’ll see,' or 'it’s on' depending on the context.",
    "heavy": "Serious or deep.",
    "dog": "A close friend or someone you roll with.",
    "blowed": "Can mean mad, high, or surprised.",
    "ain’t it": "Used at the end of a sentence for emphasis.",
    "flick": "A picture or a movie.",
    "mug": "Can refer to a face or a person.",
    "fasho": "For sure, meaning agreement.",
    "coney": "Short for 'Coney Island,' a popular diner in Michigan.",
    "you straight": "A way of asking if someone is okay or if they need something.",
    "finna": "About to.",
    "out cold": "Something that’s really good or impressive.",
    "throwed": "Wild, crazy, or turnt.",
    "wetty": "A term used to describe a clean outfit or someone looking fresh.",
};


// Function to get translation
function translateSlang() {
    let input = document.getElementById("slangInput").value.trim().toLowerCase(); // Convert to lowercase
    console.log(`User entered: ${input}`);

    const output = document.getElementById("translationOutput");

    if (input in slangDictionary) {
        output.innerText = slangDictionary[input];
        console.log(`Translation found: ${slangDictionary[input]}`);
    } else {
        output.innerText = "No translation found. Try another word.";
        console.log("Translation not found");
    }
}

// Function to select a slang word from the list
function selectSlang(word) {
    document.getElementById("slangInput").value = word;
    translateSlang();
}

// Function to allow users to add slang temporarily
function addSlang() {
    const newSlang = document.getElementById("newSlang").value.trim();
    const newDefinition = document.getElementById("newDefinition").value.trim();
    
    if (newSlang && newDefinition) {
        slangDictionary[newSlang] = newDefinition;
        
        // Add to slang list
        const slangList = document.getElementById("slangWords");
        const newItem = document.createElement("li");
        newItem.textContent = newSlang;
        newItem.onclick = () => selectSlang(newSlang);
        slangList.appendChild(newItem);
        
        console.log(`User added slang: ${newSlang} - ${newDefinition}`);
    }
}