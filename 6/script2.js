$(document).ready(function () {

  $.getJSON( "http://dummy.restapiexample.com/api/v1/employees", function( dataList ) {
    console.log(dataList);
    dataList.data.forEach(function functionName(elem) {
        //employee_age: "61" employee_name: "Tiger Nixon" employee_salary: "320800" id: "1"
        let div = $("<div ></div>");
        div.addClass("BG_grey");
        let id =$("<p></p>").text(`Employee ID: ${elem.id}`);
        let employee_name =$("<p></p>").text(`Employee Name: ${elem.employee_name}`);
        let employee_salary =$("<p></p>").text(`Employee Salary: ${elem.employee_salary}`);
        let employee_age =$("<p></p>").text(`Employee Age: ${elem.employee_age}`);
        div.append(id,employee_name,employee_salary,employee_age);
        $(".text_area").append(div);
    });

  });

});
