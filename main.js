var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

$("#Content").load('pages/Research.html')
$(".active").removeClass('active')
$('#first').addClass('active')


function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}