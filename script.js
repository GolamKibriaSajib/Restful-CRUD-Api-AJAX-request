$(function(){
$("#get-button").on("click",function(){
$.ajax({
    url:"/products",
	contentType:"application/json",
	success:function(response){
	var tbodyEl=$("tbody");
	tbodyEl.html("");
	response.products.forEach(function(product){
	tbodyEl.append('\
	<tr>\
	<td class="id">'+product.id+'</td>\
	<td><input type="text" class="name" value="'+product.name+'"></td>\
	<td>\
	<button class="update-button">Update/Put</button>\
	<button class="delete-button">Delete</button>\
	</td>\
	</tr>\
	');
	});
	}
});
});

$("#create-form").on("submit",function(e){
	    e.preventDefault();
		var input=$("#create-input");
		$.ajax({
			url:"/products",
			method:"POST",
			contentType:"application/json",
			data:JSON.stringify({name:input.val()}),
			success:function(response){
				console.log(response);
				$("#get-button").click();
			}
		});
	});
	
	
	$("table").on("click",".delete-button",function(){
		var newEl=$(this).closest("tr");
		var val=newEl.find(".id").text();
		var name=newEl.find(".name").val();
		$.ajax({
			url:"/products/"+val,
			method:"DELETE",
			success:function(response){
				console.log(response);
					$("#get-button").click();
			}
			
			
			
		});
		
	});

	
	
	$("table").on("click",".update-button",function(){
		var newEl=$(this).closest("tr");
		var val=newEl.find(".id").text();
		var name=newEl.find(".name").val();
		$.ajax({
			url:"/products/"+val,
			method:"PUT",
					contentType:"application/json",
			data:JSON.stringify({name:name}),
			success:function(response){
				console.log(response);
					$("#get-button").click();
			}
			
			
			
		});
		
	});



});
	
	