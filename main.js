var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

x = 0
y = 0

function runFunction()
{
	document.getElementById("Bunny").style.top=y+"px";
	document.getElementById("Bunny").style.left=x+"px";
}

function setMousePos(event)
{
	x = event.clientX;
	y = event.clientY;

	console.log(x);
}

$("#Content").load('pages/Research.html')
$(".active").removeClass('active')
$('#first').addClass('active')

var t=setInterval(runFunction,10);


function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}

