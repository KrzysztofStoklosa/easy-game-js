
var haslo=prompt("Podaj hasło","");
var skucha = 0;
 haslo= haslo.toUpperCase();
 haslo1="";
 var litery= new Array(35);
 litery[0]="A";
 litery[1]="Ą";
 litery[2]="B";
 litery[3]="C";
 litery[4]="Ć";
 litery[5]="D";
 litery[6]="E";
 litery[7]="Ę";
 litery[8]="F";
 litery[9]="G";
 litery[10]="H";
 litery[11]="I";
 litery[12]="J";
 litery[13]="K";
 litery[14]="L";
 litery[15]="Ł";
 litery[16]="M";
 litery[17]="N";
 litery[18]="Ń";
 litery[19]="O";
 litery[20]="Ó";
 litery[21]="P";
 litery[22]="Q";
 litery[23]="R";
 litery[24]="S";
 litery[25]="Ś";
 litery[26]="T";
 litery[27]="U";
 litery[28]="V";
 litery[29]="W";
 litery[30]="X";
 litery[31]="Y";
 litery[32]="Z";
 litery[33]="Ż";
 litery[34]="Ź";
 var dlugosc = haslo.length;
 for(i=0;i<dlugosc; i++)
 {
	 if(haslo.charAt(i)==" ") haslo1= haslo1 + " ";
	 else haslo1= haslo1+ "-";
 }
 

 
 
 function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML= haslo1;
}

function start()
{
	var tresc_diva="";
	for(i=0;i<35;i++)
	{
		tresc_diva= tresc_diva+'<div class="litera" onclick="sprawdz('+i+')" id="lit'+i+'">'+litery[i]+'</div>'
		if((i+1)%7==0)tresc_diva= tresc_diva + '<div style= "clear:both"></div>';
	}
	document.getElementById("alfabet").innerHTML= tresc_diva;
	wypisz_haslo();
}

String.prototype.ustawZnak= function(miejsce,znak)
{
	if(miejsce > this.length-1)return this.toString();
	else return this.substr(0,miejsce)+ znak+ this.substr(miejsce+1);
}
function sprawdz(nr)
{
	var trafiona= false;
	for(i=0; i<dlugosc;i++)
	{
	
		if(haslo.charAt(i)== litery[nr])
		{
			haslo1= haslo1.ustawZnak(i,litery[nr]);
			trafiona= true;
		}
	}	
		
		if(trafiona== true)
		{
			var element = "lit"+ nr;
			document.getElementById(element).style.background= "#003300";
			document.getElementById(element).style.color= "#003300";
			document.getElementById(element).style.border= "3px solid #71f442";
			document.getElementById(element).style.cursor= "default";
			
			wypisz_haslo();
		}
		else
		{
			
			var element = "lit"+ nr;
			
			document.getElementById(element).style.background= "#c10303";
			document.getElementById(element).style.color= "#c10303";
			document.getElementById(element).style.border= "3px solid #fc6a6a";
			document.getElementById(element).style.cursor= "default";
			document.getElementById(element).setAttribute("onclick",";")
			
			//ile skuch
			skucha++;
			var obraz= "img/s"+skucha+".jpg";
			if(skucha<=9)
			document.getElementById("szubienica").innerHTML= '<img src="'+obraz+'"alt=""/>';
			
			
		}
		//kiedy wygrywamy
		if(haslo==haslo1)
		{
			document.getElementById("alfabet").innerHTML='Hurra wygrałeś hasło to :'+haslo+' <br><br> <span class="reset" onclick="location.reload()">Jeszcze raz</span>'
		}
		//kiedy przegrywamy
		if(skucha==9)
		{
			document.getElementById("alfabet").innerHTML='przegrałeś hasło to :'+haslo+' <br><br> <span class="reset" onclick="location.reload()">Jeszcze raz</span>'
		}
	
	
}



window.onload= start;