var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

i = 0;

function runFunction()
{
	document.getElementById("Bunny").style.top=i+"px";
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

