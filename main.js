var test= new XMLHttpRequest();
test.open('GET', 'pages/Test.html', true);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

$("#Content").load('pages/Research.html')
$(".active").removeClass('active')
$('#first').addClass('active')

for (let i = 0; i < 1000; i++) {
  document.getElementById("Bunny").style.top=i+"px";
  sleep(100);
}




function changeContent(name, id)
{
	$("#Content").load('pages/' + name + '.html')
	$(".active").removeClass('active')
	$('#'+id).addClass('active')
	
}

