function()
{
	var student_array = [];
	

	document.getElementById('save').addEventListener('click', function(clickEvt){
		var student = {
			age1 : document.getElementById('txt_age').value,
			phone1 : document.getElementById('txt_phone').value,
			name1 : document.getElementById('txt_name').value
			
		};
		document.getElementById('txt_age').value = "";
		document.getElementById('txt_phone').value = "";
		document.getElementById('txt_name').value = "";
		student_array.push(student);
	})

	/*document.getElementById('show').addEventListener('click',function(){
		for (var i = 0; i < student_array.length; i++) {
			document.getElementById('name').innerHTML += student_array[i].name1;
			document.getElementById('age').innerHTML += student_array[i].age1;
			document.getElementById('phone').innerHTML += student_array[i].phone1;
		};
	})*/
}()
