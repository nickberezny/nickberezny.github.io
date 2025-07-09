var test= new XMLHttpRequest();
test.open('GET', 'pages/About.html', true);

xp = 0
yp = 0
x = 0
y = 0
speed = 0.1;
i = 0

document.onmousemove = setMousePos;

function runFunction()
{
	i = i + 1;
	let theta = Math.atan2((yp-y),(xp-x));

	x = x + speed*Math.cos(theta);
	y = y + speed*Math.sin(theta);

	if(i==200)
	{
		document.getElementById("Bunny").src="images/Bun-12.png";
	}
	else if(i==400)
	{
		document.getElementById("Bunny").src="images/Bun-11.png";
		i = 0;
	}

	document.getElementById("Bunny").style.top=y+"px";
	document.getElementById("Bunny").style.left=x+"px";
}

function setMousePos(event)
{
	xp = event.clientX;
	yp = event.clientY;

	console.log(x);
}

$("#Content").load('pages/Controls.html')
$(".active").removeClass('active')
$('#first').addClass('active')

//var t=setInterval(runFunction,1);


function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}

