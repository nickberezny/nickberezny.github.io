var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

i = 0;

function runFunction(event)
{
	let x = event.clientX;
	document.getElementById("Bunny").style.top=x+"px";
	i = i + 10;
}

$("#Content").load('pages/Research.html')
$(".active").removeClass('active')
$('#first').addClass('active')

var t=setInterval(runFunction,100);


function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}

