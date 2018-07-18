function ready()
{
    var legendForm = document.getElementById("legendForm");
    var form = document.getElementById("form");
    var elt = null;
    var elt_prev = null;
    var classes = ['e', 'c', 'b', 'g', 'w', 'f', 'r', 'hg', 'ws', 'ww', 'sld'];
    var mapA = new Object;

    var removeClasses = function(elt, clss)
    {
        clss.forEach(function(element) {elt.classList.remove(element)});
    }

    var formSubmit = function()
    {
        var Radio = form.elements["symbol"];

        for(i = 0; i < Radio.length; i++)
        {
            if(Radio[i].checked)
            {
                removeClasses(elt, classes);
                switch(Radio[i].value)
                {
                    case 'A':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'B':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('b');
                        break;

                    case 'C':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('c');
                        break;

                    case 'D':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('c');
                        break;

                    case 'E':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('e');
                        break;

                    case 'F':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('f');
                        break;

                    case 'G':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'H':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'I':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'J':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'K':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'L':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'M':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('g');
                        break;

                    case 'N':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'O':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'P':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'Q':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'R':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('r');
                        break;

                    case 'S':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'T':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'U':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'V':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'W':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('w');
                        break;

                    case 'X':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'Y':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'Z':
                        elt.innerHTML = Radio[i].value;
                        elt.classList.add('c');
                        break;

                    case 'HG':
                        elt.innerHTML = '<i class="fab fa-pagelines"></i>';
                        elt.classList.add('hg');
                        break;

                    case 'TR':
                        elt.innerHTML = '<i class="fas fa-tree"></i>';
                        elt.classList.add('hg');
                        break;

                    case 'WS':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('ws');
                        break;

                    case 'WW':
                        elt.innerHTML = '&nbsp;';
                        elt.classList.add('ww');
                        break;

                    case 'AL':
                        elt.innerHTML = '<i class="fas fa-mortar-pestle"></i>';
                        elt.classList.add('al');
                        break;

                    case 'STS':
                        elt.innerHTML = '<i class="fas fa-bars" style="color: #FFFFFF"></i>';
                        elt.classList.add('ws');
                        break;

                    case 'STW':
                        elt.innerHTML = '<i class="fas fa-bars" style="color: #FFFFFF"></i>';
                        elt.classList.add('ww');
                        break;
                }

                var eltObj = new Object;
                eltObj.name = elt.getAttribute('alt');
                eltObj.classes =  elt.classList.value;
                eltObj.content = encodeURI(elt.innerHTML);
                mapA[ elt.getAttribute('alt') ] = eltObj;
            }
        }
        return false;
    };

    var trs = document.getElementsByClassName("row");
    var tds = null;

    for(var i=0; i<trs.length; i++)
    {
        tds = trs[i].getElementsByTagName("div");
        for(var n=0; n<trs.length;n++)
        {
            tds[n].onclick=function() 
            {
                if(null !== elt_prev)
                {
                    elt_prev.classList.remove('sld');
                }

                elt = this;
                elt_prev = this;
                elt.classList.add('sld');

                if (false === elt.classList.contains("d"))
                {
                    legendForm.style.display = 'block';
                    formSubmit();
                }
                else
                {
                    legendForm.style.display = 'none';
                    elt.classList.remove("sld");
                }
            };
        }
    }

    var saveBtn = document.getElementById("saveMap");
    saveBtn.onclick=function()
    {
        var url = '/town/'+ getMapId();
        var mapTitle = document.getElementById("mapTitle").value;
        var mapPassword = document.getElementById("mapPassword").value;
        var json = JSON.stringify({ 
            "mapTitle": mapTitle, 
            "mapData": mapA, 
            "mapPassword": mapPassword 
        });
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                var resp = JSON.parse( xmlHttp.responseText );
                if((resp.town));
                {
                    location.assign( '/town/' + resp.town );
                }
            }
        }
        xmlHttp.open("POST", url);
        xmlHttp.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xmlHttp.setRequestHeader('Content-type','application/json');
        xmlHttp.send(json);
    }

    var hoverdiv = function(e)
    {
        var left  = (e.clientX + 21)  + "px";
        var top  = (e.clientY + 5) + "px";

        legendForm.style.display = 'block';
        legendForm.style.left = left;
        legendForm.style.top = top;

        return false;
    }

    var getMapId = function()
    {
        //+(0<mapId)?mapId:'';
        var mapId = document.getElementById("mapId");
        console.log('MAP ID: '+ mapId);
        return parseInt(mapId.value);
    }
}

document.addEventListener("DOMContentLoaded", ready);