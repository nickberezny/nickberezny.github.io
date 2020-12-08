var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);



function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}