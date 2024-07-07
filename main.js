var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);
changeContent('Research', 'first');


function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}