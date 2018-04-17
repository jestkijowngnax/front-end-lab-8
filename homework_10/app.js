class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

AddRequiredValidation = (obj) => {
    (!obj.value ? obj.valid = 'Sorry man, your value field is EMPTY!'
    : obj.valid = true)
}

AddMaxLengthValidation = (obj, maxLength) => {
    (obj.value.toString().length > maxLength ? obj.valid = 'Unfortunately, your number has higher length that possible!'
    : obj.valid = true)
}

AddNumberValidation = (obj) => {
    (typeof obj.value !== 'number' ? obj.valid = 'Really? This is not a number!'
    : obj.valid = true)
}


let numberInput = new NumberInput("Type numbers...");

AddRequiredValidation(numberInput);
console.log(numberInput.valid);

numberInput.setValue('test');
AddNumberValidation(numberInput);
console.log(numberInput.valid)

numberInput.setValue(1);
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 9);
AddNumberValidation(numberInput);
console.log(numberInput.valid);

numberInput.setValue(41111111111);
AddMaxLengthValidation(numberInput, 9);
console.log(numberInput.valid);




