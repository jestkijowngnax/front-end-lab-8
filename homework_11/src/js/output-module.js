import calculatingModule from './calculating-module'
import interfaceModule from './interface-module.js'
import '../styles/styles.css'

interfaceModule.btnAddition.addEventListener('click', 
	() => {
		document.write(calculatingModule.addition(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)

interfaceModule.btnSubtraction.addEventListener('click', 
	() => {
		document.write(calculatingModule.subtraction(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)

interfaceModule.btnMultiplication.addEventListener('click', 
	() => {
		document.write(calculatingModule.multiplication(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)

interfaceModule.btnDivision.addEventListener('click', 
	() => {
		document.write(calculatingModule.division(interfaceModule.numOne.value, interfaceModule.numTwo.value))
	}
)