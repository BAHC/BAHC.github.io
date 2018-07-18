function ready()
{
    var legendForm = document.getElementById("legendForm");
    var form = document.getElementById("form");
    var elt = null;
    var elt_prev = null;
    var classes = ['e', 'c', 'b', 'g', 'w', 'f', 'r', 'hg', 'ws', 'ww', 'sld'];
    var mapA = new Object;

    //Remove only  classes
    var removeClasses = function(elt, clss)
    {
        clss.forEach(function(element) {elt.classList.remove(element)});
    }

    var setMapElement = function(elt)
    {
        var eltObj = new Object;
        eltObj.name = elt.getAttribute('id');
        eltObj.classes =  elt.classList.value;
        eltObj.content = encodeURI(elt.innerHTML);
        mapA[ eltObj.name ] = eltObj;
    }

    var setCell = function(id="r1_c1", _classes="d", content="")
    {
        var mapCell = document.getElementById(id);
        var cellClasses = _classes.split(' ');
        removeClasses(mapCell, classes);
        if(1 < cellClasses.length){
            cellClasses.forEach( function(n) { mapCell.classList.add(n) } );
        } else {
            mapCell.classList.add(cellClasses);
        }

        mapCell.innerHTML = decodeURI(content);
        setMapElement(mapCell);
    }

    var mapName = window.getMapName();
    var mapTitle = document.getElementById('mapTitle');
    mapTitle.value = mapName;

    var mapCells = window.getReadyMap();
    mapCells.forEach(function(elt){
        setCell(elt.id, elt.classes, elt.content);
    });

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

                setMapElement(elt);
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
                var errorBlk = document.getElementById("mapError");
                var infoBlk = document.getElementById("mapInfo");
                errorBlk.innerText = "";
                infoBlk.innerText = "";
                if( resp.error && "undefined" !== resp.error  )
                {
                    errorBlk.innerText = resp.error;
                }
                else if("true" == resp.new)
                {
                    location.assign( url );
                }
                else
                {
                    infoBlk.innerText = 'Saved ' + getMapId();
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
        return parseInt(mapId.value);
    }
}

document.addEventListener("DOMContentLoaded", ready);