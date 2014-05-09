// vars para handling do objecto html

var current_focus_input;

// faz o somatório dos campos com o nome começado pelo nomestr com um numerador
// a variar entre iniciostr e fim str
// Todos os parametros são strings

function roundNumber(n) 
{
	var rlength = 2; // The number of decimal places to round to
	var newnumber = Math.round(n*Math.pow(10,rlength))/Math.pow(10,rlength);
	
	return newnumber;
}


function somatorio(nomestr,replace,iniciostr,fimstr)
        {
                //alert('('+nomestr+','+replace+','+iniciostr+','+fimstr+')');
                var total = 0;
                var fim;
                var inicio;
                var val;
                var rregexp;
                var str = new String(nomestr);
                var str2;

                try{eval('rregexp = /' + replace + '/g ;');}
                catch(e){rregexp = '';}

                try{eval('fim = ' + fimstr + ';');}
                catch(e){fim = 0;}

                try{eval('inicio = ' + iniciostr + ';');}
                catch(e){        inicio = 0;}

                for(i=inicio;i<=fim;i++)
                                {
                                      str2 = str.replace(rregexp,''+i+'');
                                      try{eval('val = ' + str2 +'.value;');}
                                      catch(e){val = 0;}
                                      val = parseFloat(val);
                                      if(isNaN(val))val=0;
                                      total += val;
                                }

                return total;
        }


/// funções para trabalhar com dois selects de multiplas linhas

// constroi uma string com todos os elementos
function all_to_string(des,org,sep)
{
	var i;
	var l; 	
	var str="";
	var str_show="";
	var text;
	l = org.length;
    for(i=0;i<l;i++)
    {
            if(org.options[i].value!='')
            {
            	text = new String(org.options[i].text);
            	str += (str==""?"":sep)+org.options[i].value;
			}
	}
	des.value = str;
}

function all_to_string_show(des_show,org,sep2)
{
	var i;
	var l; 	
	var str_show="";
	var text;
	l = org.length;
    for(i=0;i<l;i++)
    {
            if(org.options[i].value!='')
            {
            	text = new String(org.options[i].text);
            	str_show += (str_show==""?"":sep2+" ")+text.substring(0,text.length-2);
			}
	}
	if(des_show!=null)
		des_show.value=str_show;
}


// retira a linha selecionada numa list box e coloca na outra.
// org: listbox de onde retirar a linha
// des: listbox onde colocar a linha
function troca_todos(org,des)
{
    var i;
    var l;
    l = org.length;
    for(i=0;i<l;i++)
    {
		if(org.options[i].value!='')
			list_add(des,org.options[i].value,org.options[i].text,org.options[i].style.color)    
	}
    for(i=(l-1);i>=0;i--)
	{
		if(org.options[i].value!='')
		{
			list_remove(org,i);
		}
	}
    ordenar(des.options);
}

// adiciona um nova linha        
function list_add(des,id,text,color)
{
	des.options[des.length]= new Option(text,id,false,false);
	des.options[(des.length-1)].style.color = color;
}

//
function remove_selected(org)
{
	l = org.length;
	for(i=(l-1);i>=0;i--)
	{
		if(org.options[i].selected && org.options[i].value!='')
			list_remove(org,i);
	}
}
// remove uma linha
function list_remove(org,i)
{
	org.options[i]=null;
}
// 
function list_remove_id(org,id)
{
    for(i=0;i<org.length;i++)
    {
		if(org.options[i].value==id)
		{
			list_remove(org,i);
			break;
		}
	}
}

function SelectAllList(CONTROL){
	for(var i = 0;i < CONTROL.length;i++){
	CONTROL.options[i].selected = true;
	}
}

// retira a linha selecionada numa list box e coloca na outra.
// org: listbox de onde retirar a linha
// des: listbox onde colocar a linha
function troca_lista(org,des,flag_ordena)
{
	var i;
	var l;
	var color;
	l = org.length;
	
	if(org.selectedIndex!=-1)
	{
		for(i=0;i<l;i++)
		{
			if(org.options[i].selected&&org.options[i].value!='')
				list_add(des,org.options[i].value,org.options[i].text,org.options[i].style.color)
		}
		
		remove_selected(org);
		
		if (flag_ordena){
			ordenar(des.options);
		}
	}
}

// ordena um uma list box por ordem alfabética
// arr: array com as opções da listbox
// Exemplo:: ordenar(listbox1.options);
function ordenar(arr)
{
	var l = arr.length;
	var i,j,jmin_idx;
	var aux;
	var aux_color;
	
	for(j=0;j<l-1;j++)
	{
		min_idx = j;
		
		for(i=j;i<l;i++)
		{
			if(arr[i].text < arr[min_idx].text)
				min_idx=i;
		}
		
		if(min_idx!=j)
		{
			aux = new Option(arr[min_idx].text,arr[min_idx].value);
			aux_color = arr[min_idx].style.color;
			
			arr[min_idx]= new Option(arr[j].text,arr[j].value);
			arr[min_idx].style.color=arr[j].style.color;
			
			arr[j] = new Option(aux.text,aux.value,false,false);
			arr[j].style.color=aux_color;
			
			aux = null;
		}
	}
}
/// FIM funções para trabalhar com dois selects de multiplas linhas

// funções para trabalhar com os emails
function ___valida_email(email)
        {
                var str
                str = new String(email)
                if(str.indexOf('@', 0) == -1) return false
                else if(str.charAt(str.indexOf('@', 0)+1)=="") return false
                return true
        }

     
        
/// funcões para datas
function comparaDatas(data1,data2)
                {
                                var dat1;
                                var dat2;
                                //alert(data1+' '+data2);
                                dat1 = get_data(data1);
                                dat2 = get_data(data2);

                                if(dat1.getFullYear()<dat2.getFullYear()) return -1
                                if(dat1.getFullYear()>dat2.getFullYear()) return 1
                                if(dat1.getFullYear()==dat2.getFullYear())
                                        {
                                                if((dat1.getMonth()+1)<(dat2.getMonth()+1)) return -1
                                                if((dat1.getMonth()+1)>(dat2.getMonth()+1)) return 1
                                                if((dat1.getMonth()+1)==(dat2.getMonth()+1))
                                                        {
                                                                if(dat1.getDate()<dat2.getDate()) return -1
                                                                if(dat1.getDate()>dat2.getDate()) return 1
                                                                if(dat1.getDate()==dat2.getDate()) return 0
                                                        }
                                        }
                                // data1<data2 == -1
                                // data1==data2 == 0
                                // data1>data2 == 1
                }

							
function test_date(s)
        {
                var str
                var arrstr
                str = new String(s)
                arrstr = new Array()
                arrstr = str.split("-")
                if(arrstr[0]==str) arrstr = str.split("/")
                else if(arrstr[0]==str) arrstr = str.split("\\")
                else if(arrstr[0]==str) arrstr = str.split(" ")
                return valida_date(Number(arrstr[2]),Number(arrstr[1]),Number(arrstr[0]))
        }

function test_date_reverse(s)
        {
                var str,str2
                var arrstr,arrstr2
                str = new String(s)
                arrstr = new Array()
                arrstr2 = new Array()
                arrstr = str.split("-")
                if(arrstr[0]==str) arrstr = str.split("/")
                else if(arrstr[0]==str) arrstr = str.split("\\")
                else if(arrstr[0]==str) arrstr = str.split(" ")
                str2 = new String(arrstr[2]);
                arrstr2 = str2.split(" ");
                return valida_date(Number(arrstr[0]),Number(arrstr[1]),Number(arrstr2[0]))
        }

function valida_date(ano,mes,dia)
                {
                        if(isNaN(ano) || isNaN(mes) || isNaN(dia) )
                                { return false }

                        if( (dia<1) || (mes<1) || (mes>12) || (ano<0) )
                                { return false }

                        if(mes==2)
                                {
                                        if(ano%4==0)
                                                {
                                                        if(dia>29)
                                                                return false
                                                        else
                                                                return true
                                                }
                                        else
                                                {
                                                        if(dia>28)
                                                                return false
                                                        else
                                                                return true
                                                }

                                }

                        if((mes==1)||(mes==3)||(mes==5)||(mes==7)||(mes==8)||(mes==10)||(mes==12))
                                {
                                  if(dia>31)
                                        return false
                                  else
                                          return true
                                }

                        if(dia>30)
                                return false
                        else
                                return true
                }


function _radio_as_selection(inpt)
	{
		var i;
		
		if(inpt.length)
			{
				for (i = 0; i < inpt.length; i++) 
					{
						if(inpt[i].checked)
							{
								return true;
							}
					}
				return false;
			}
		else
			{
				if(inpt.checked)
					{
						return true;
					}
				return false;
			}
	}

// eliminar espaços em branco no inicio e fim da string
function _strip_whitespace(s){
    var i = 0;
    var espacos = " \t\n\r";

    // elimina espaços iniciais
	while (i < s.length && _char_in_string(s.charAt(i), espacos)){i++;}

    s=s.substring(i, s.length);
    var total = s.length;
    var j = s.length;

    // elimina espaços finais
    while (j > 0 && _char_in_string_fim(s.charAt(j), espacos)){j--;}

    j++;

    return s.substring(0, j);
}
	
function _char_in_string(c, s){
    for (i = 0; i < s.length; i++) {
            if (s.charAt(i) == c) return true;
    }
    return false;
}

function _char_in_string_fim(c, s){
    for (i = s.length; i >= 0; i--){
            if (s.charAt(i) == c) return true;
    }
    return false;
}

function setBunLoad(on)
{
	//window.onbeforeunload = (on ? unLoadMessage : null );
}

function clickclear(thisfield, defaulttext) {
if (thisfield.value == defaulttext) {
thisfield.value = "";
}
}

function clickrecall(thisfield, defaulttext) {
if (thisfield.value == "") {
thisfield.value = defaulttext;
}
}


// Desceleccionar opção num Objecto Radio
function uncheckRadio(name) {
 var choice = document.getElementsByName(name);
 
 for (i = 0; i < choice.length; i++) {
  if ( choice[i].checked = true ) 
   choice[i].checked = false; 
 }
}


// Validar Email
function valida_email(str) {
  	var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!str.match(re)) {
        return false;
    } else {
        return true;
    }
}

// validate that the user has checked one of the radio buttons
function isValidRadio(name) {

	var radio=document.getElementsByName(name);

	for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return true;
        }
    }
    return false;
}

//validates that the entry is a positive or negative number
function isNumber(str) {
    //var str = elem.value;
    var re = /^[-]?\d*\.?\d*$/;
    str = str.toString();
    if (!str.match(re)) {
        return false;
    }
    return true;
}

// validates that the entry is 16 characters long
function isLen16(elem) {
  var str = elem.value;
    var re = /\b.{16}\b/;
    if (!str.match(re)) {
        alert("Entry does not contain the required 16 characters.");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}