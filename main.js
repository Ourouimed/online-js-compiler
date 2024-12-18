let input = document.getElementById("input")
let output = document.getElementById("output")
let run = document.getElementById("run")
let reset = document.getElementById("reset")

// save original console
let originalConsole = console.log
input.value = 
`// This a js code
console.log("hello world")
` 
// override console.log to diplay content to output 
console.log = (...messages)=>{
    messages.forEach(message =>{
        let codeLIne = document.createElement("div")

        typeof message == "number" ? codeLIne.style.color = "#00b8ff"
        : typeof message == "boolean" ?  codeLIne.style.color = "#bd31ff"
        : typeof message == "undefined" ?  codeLIne.style.color = "grey" 
        : typeof message == "null" ?  codeLIne.style.color = "grey" 
        : codeLIne.style.color = "#fff"
        // better output for object
        codeLIne.innerHTML = 
        typeof message === "object"? 
            JSON.stringify(message, null, 2) 
        : typeof message == "null" ? "null"
        :message
        output.appendChild(codeLIne)
    })
    originalConsole.apply(console , messages)
}


document.write = (...messages)=>{
    messages.forEach(message =>{
        let codeLIne = document.createElement("div")
        codeLIne.innerHTML = message
        output.appendChild(codeLIne)
    })
}

// Run code
const RunCode = ()=>{
    output.innerHTML = ""
    try{
        const executeCode = new Function(input.value);
        executeCode();
    }
    catch(error){
        let errorLine = document.createElement("div")
        errorLine.innerHTML = error
        errorLine.style.color = "red"
        output.appendChild(errorLine)
    }
    
}

const ResetCode = ()=>{
    input.value = 
`// This a js code
console.log("hello world")` 
    output.innerHTML = ""
}
run.addEventListener("click" , RunCode)
reset.addEventListener("click" , ResetCode)


// Get current date 
document.getElementById("date").innerHTML = new Date().getFullYear()