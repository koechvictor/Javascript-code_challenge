const prompt = require("prompt-sync")();
basic_salary = prompt("Your basic salary: ");

function Net_Salary_Calculator() {
  let kra_deduction;
  let nhif_deduction = 0;
  let nssf_deduction;
  const kra = () => {
    if (basic_salary <= 24000 && basic_salary > 0) {
      kra_deduction = (basic_salary * 10) / 100;
      return kra_deduction;
    } else if (basic_salary > 24000 && basic_salary < 32334) {
      kra_deduction = (basic_salary * 25) / 100;
      return kra_deduction;
    } else if (basic_salary > 32333 && basic_salary < 500001) {
      kra_deduction = (basic_salary * 30) / 100;
      return kra_deduction;
    } else if (basic_salary > 500000 && basic_salary < 800001) {
      kra_deduction = (basic_salary * 32.5) / 100;
      return kra_deduction;
    } else if (basic_salary > 800000) {
      kra_deduction = (basic_salary * 35) / 100;
      return kra_deduction;
    } else {
      kra_deduction = 0;
    }
  };

  const nssf = () => {
    nssf_deduction = (basic_salary * 6) / 100;
    return nssf_deduction;
  };

  const nhif = () => {
    if (basic_salary >= 1000 && basic_salary <= 5999) {
      nhif_deduction += 150;
      return nhif_deduction;
    } else if (basic_salary >= 6000 && basic_salary <= 7999) {
      nhif_deduction += 300;
      return nhif_deduction;
    } else if (basic_salary >= 8000 && basic_salary <= 11999) {
      nhif_deduction += 400;
      return nhif_deduction;
    } else if (basic_salary >= 12000 && basic_salary <= 14999) {
      nhif_deduction += 500;
      return nhif_deduction;
    } else if (basic_salary >= 15000 && basic_salary <= 19999) {
      nhif_deduction += 600;
      return nhif_deduction;
    } else if (basic_salary >= 20000 && basic_salary <= 24999) {
      nhif_deduction += 750;
      return nhif_deduction;
    } else if (basic_salary >= 25000 && basic_salary <= 29999) {
      nhif_deduction += 850;
      return nhif_deduction;
    } else if (basic_salary >= 30000 && basic_salary <= 34999) {
      nhif_deduction += 900;
      return nhif_deduction;
    } else if (basic_salary >= 35000 && basic_salary <= 39999) {
      nhif_deduction += 950;
      return nhif_deduction;
    } else if (basic_salary >= 40000 && basic_salary <= 44999) {
      nhif_deduction += 1000;
      return nhif_deduction;
    } else if (basic_salary >= 45000 && basic_salary <= 49999) {
      nhif_deduction += 1100;
      return nhif_deduction;
    } else if (basic_salary >= 50000 && basic_salary <= 59999) {
      nhif_deduction += 1200;
      return nhif_deduction;
    } else if (basic_salary >= 60000 && basic_salary <= 69999) {
      nhif_deduction += 1300;
      return nhif_deduction;
    } else if (basic_salary >= 70000 && basic_salary <= 79999) {
      nhif_deduction += 1400;
      return nhif_deduction;
    } else if (basic_salary >= 80000 && basic_salary <= 89999) {
      nhif_deduction += 1500;
      return nhif_deduction;
    } else if (basic_salary >= 90000 && basic_salary <= 99999) {
      nhif_deduction += 1600;
      return nhif_deduction;
    } else if (basic_salary >= 100000) {
      nhif_deduction += 1700;
      return nhif_deduction;
    } else {
      nhif_deduction += 0;
      return nhif_deduction;
    }
  }
  net_salary = basic_salary - (kra() + nssf() + nhif());
  console.log(net_salary);
}

Net_Salary_Calculator();
