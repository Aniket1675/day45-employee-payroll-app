let employeePayrollList;
window.addEventListener("DOMContentLoaded", () => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
    
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ?
        JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};



const getDepartmentHtml = (departmentList) => {
    let departmentHtml = "";
    for (let department of departmentList) {
        departmentHtml = `${departmentHtml} <div class="dept-label">${department}</div>`;
    }
    return departmentHtml;
};

const remove = (node) => {
    let employeePayrollData = employeePayrollList.find(employeeData => employeeData._id == node.id);
    if (!employeePayrollData) return;
    const index = employeePayrollList.map(employeeData => employeeData._id).indexOf(employeePayrollData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
};
