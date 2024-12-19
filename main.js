let input = document.getElementById("input")
let output = document.getElementById("output")
let run = document.getElementById("run")
let reset = document.getElementById("reset")



// Switch between input and output from mobile devices
let switchBtns = document.querySelectorAll(".switcher > button")
const MobileSwitcher = ()=>{
    switchBtns.forEach((switcher)=>{
        switcher.addEventListener('click' , ()=>{
            switchBtns.forEach(switcher =>{
                switcher.classList.remove("active")
            })
            if(switcher.id == "switch-inp"){
                document.getElementById("input-container").style.display = "block"
                document.getElementById("output-container").style.display = "none"
            }
            else if(switcher.id == "switch-out"){
                document.getElementById("input-container").style.display = "none"
                document.getElementById("output-container").style.display = "block"
            }
            switcher.classList.add("active")
        })
    })
}
MobileSwitcher()




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
        if(typeof message == "object"){ 
            if (message == null){
                codeLIne.style.color = "grey"
            }
            codeLIne.textContent = JSON.stringify(message, null, 2)
        }
        else {
            if (typeof message == "undefined"){
                codeLIne.style.color = "grey"
                codeLIne.innerHTML = undefined
            }
            else {
                typeof message == "number" ? codeLIne.style.color = "#30e8ff" 
                : typeof message == "boolean" ? codeLIne.style.color = "#ce37ce" 
                : codeLIne.style.color = "#fff"


                codeLIne.textContent = message
            }
            
        }
        output.appendChild(codeLIne)
    })
    originalConsole.apply(console , messages)
}

// disable document.write methode
document.write = ()=>{
    alert("document.write can't use here")
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
// Reset to initial code 
const ResetCode = ()=>{
    input.value = 
`// This a js code
console.log("hello world")` 
    output.innerHTML = ""
}

// on click events (run & reset)
run.addEventListener("click" , RunCode)
reset.addEventListener("click" , ResetCode)


// Get current date 
document.getElementById("date").innerHTML = new Date().getFullYear()


