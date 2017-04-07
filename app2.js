// create a variable to receive the value input by user
let inputValue = ""
const ol = document.getElementById('todoOl')


// when user clicks on the add button, it will get the value input by user and assign to variable
document.getElementById('btnTodo').addEventListener('click', (e) => {
	e.preventDefault()
	inputValue = document.getElementById('inputItem').value
	createLi()
	eraseInput()
})

//create a li tag and put inputValue as a new item of the ol
function createLi() {
	let newLi = document.createElement("li")
	let newNode = document.createTextNode(inputValue)
	newLi.appendChild(newNode)
	document.getElementById("todoOl").appendChild(newLi)
	newLi.setAttribute("id", addId ())
	// addId ()

}

// remove value from input field
function eraseInput() {
	document.getElementById("inputItem").value = ""
}

//create a variable varId to add an id to the new li tag and increment
// let varId = 0
function addId () {
	//varId += 1
	let newId = localStorage.length
	return newId
}

//when user click on one item of the list it will change color to red and create a line through
ol.addEventListener('click', (e) => {
	let clikedID = e.target
	clikedID.classList.toggle("completed");
})












