var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

function changeContent()
{
	$("#Content").load('pages/Test.html')
}