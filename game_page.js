question_number="<h4>"+ Number1 + "X" + Number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='Answer'>";
check_button = "<br><br><button id='check' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
function send()
{
Number1=document.getElementById("Number1").value;
Number2=document.getElementById("Number2").value;
actual_answer=parseInt(Number1)*parseInt(Number2);
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
}