var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

xp = 0
yp = 0
x = 0
y = 0
speed = 1.0;

document.onmousemove = setMousePos;

function runFunction()
{

	x = x + Math.sign(xp-x)*speed;
	y = y + Math.sign(yp-y)*speed

	document.getElementById("Bunny").style.top=y+"px";
	document.getElementById("Bunny").style.left=x+"px";
}

function setMousePos(event)
{
	xp = event.clientX;
	yp = event.clientY;

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

