function Employee({name, primarySkill, age, salary}) {
  this.name = name;
  this.primarySkill = primarySkill;
  this.age = age;
  this.salary = salary;

  let _logs = '';
  let companyName ='';

  this.getSalary = function() {
    return salary;
  };

  this.setSalary = function(salary) {
    if(isNaN(salary)) {
      return 'Please enter digital number';
    }
    else if (salary > this.salary) {
      _logs += `change salary from ${this.salary} to ${salary}\n`;
      return `change salary from ${this.salary} to ${salary}`;
      this.salary = salary;
    } else {
       _logs += `try to change salary from ${this.salary} to ${salary}\n`;
       return `try to change salary from ${this.salary} to ${salary}`;
    };
  };
  
  this.hire = function(company) {
    companyName  = company;
    let startWork = new Date();
    _logs += `${this.name} is hired to ${company} in ${startWork} \n`;
  };

  this.fire = function() {
    _logs +=`${this.name} is fired from ${companyName} in ${new Date()} \n`;
  };

  this.getHistory = function() {
    return _logs;
  };
}

function Company({name, owner, maxCount}) {
	this.name = name;
	this.owner = owner;
  this.maxCount = maxCount;

  let listEmployee = [];
  let logs = `${this.name} was created in ${new Date()}`;
  let timeIncompany = new Date();
  
  this.addNewEmployee = function(employee) {
		if (listEmployee.length >= maxCount) {
			let minSalary = listEmployee[0];
			let emplIndex = 0;
			listEmployee.forEach(function(empl, index){
				if(minSalary < empl.salary) {
					minSalary = minSalary;
				} else {
					minSalary = empl.salary;
					emplIndex = index;
				}
			})
			listEmployee.splice(emplIndex, 1);
			listEmployee.push(employee);
		} else listEmployee.push(employee);
  }
  
  this.removeEmploee = function(id) {
    listEmployee.splice(id, 1);
  }

  this.getAverageSalary = function() {
		var sum = 0;

		for (var i = 0; i < listEmployee.length; i++) {
			sum = sum + listEmployee[i].salary;  
		};
		return sum / listEmployee.length;
  };
  
  this.getEmployees = function() {
		return listEmployee;
  }
  
  this.getFormattedListOfEmplopyees = function() {
		return listEmployee.forEach(function(element) {
			console.log(`${element.name} - work in ${epam.name} ${(Math.floor((Date.now() - timeIncompany)/1000))} seconds`);
		});
  }
  
	this.getAverageAge = function() {
		var sum = 0;

		for (var i = 0; i < listEmployee.length;i++) {
			sum += listEmployee[i].age;
		};
		return sum / listEmployee.length;
	}

  this.getHistory = function() {
		return _logs;
	}
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

// console.log(anton.getSalary());
// anton.setSalary(12)
// anton.setSalary(5000)
anton.hire('Epam')
// anton.fire();
console.log(anton.getHistory());

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
console.log(epam.getAverageAge());
console.log(epam.getAverageSalary());
setTimeout(function() {epam.getFormattedListOfEmplopyees()}, 3000);

// console.log(epam.getHistory());
