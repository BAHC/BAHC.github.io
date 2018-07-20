function ready()
{
    var legendForm = document.getElementById("legendForm");
    var form = document.getElementById("form");
    var elt = null;
    var elt_prev = null;
    var classes = new Array(
        'e', 'c', 'b', 'g', 'w', 'f', 'r', 'hg', 'ws', 'ww', 'sld'
    );
    var classesColor = new Array(
        'ca', 'cb', 'cc', 'cd', 'ce', 
        'cf', 'cg', 'ch', 'ci', 'cj', 
        'ck', 'cl', 'cm', 'cn', 'co', 
        'cp', 'cq', 'cr', 'cs', 'ct', 
        'cu', 'cv', 'cw', 'cx', 'cy', 
        'cz');
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

    var decorateCell = function(elt, _value, _class, _classes)
    {
        removeClasses(elt, _classes);
        elt.innerHTML = _value;
        elt.classList.add(_class);
    }

    var formSubmit = function()
    {
        var Radio = form.elements["symbol"];

        for(i = 0; i < Radio.length; i++)
        {
            if(Radio[i].checked)
            {
                
                switch(Radio[i].value)
                {
                    case 'A':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'B':
                        decorateCell(elt, '&nbsp;', 'b', classes);
                        break;

                    case 'C':
                        decorateCell(elt, '&nbsp;', 'c', classes);
                        break;

                    case 'D':
                        decorateCell(elt, '&nbsp;', 'd', classes);
                        break;

                    case 'E':
                        var _classes = classes.concat(classesColor);
                        decorateCell(elt, '&nbsp;', 'e', _classes);
                        break;

                    case 'F':
                        decorateCell(elt, '&nbsp;', 'f', classes);
                        break;

                    case 'G':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'H':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'I':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'J':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'K':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'L':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'M':
                        decorateCell(elt, Radio[i].value, 'g', classes);
                        break;

                    case 'N':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'O':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'P':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'Q':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'R':
                        decorateCell(elt, '&nbsp;', 'r', classes);
                        break;

                    case 'S':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'T':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'U':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'V':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'W':
                        decorateCell(elt, Radio[i].value, 'w', classes);
                        break;

                    case 'X':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'Y':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'Z':
                        decorateCell(elt, Radio[i].value, 'c', classes);
                        break;

                    case 'HG':
                        decorateCell(elt, '<i class="fab fa-pagelines"></i>', 'hg', classes);
                        break;

                    case 'TR':
                        decorateCell(elt, '<i class="fas fa-tree"></i>', 'hg', classes);
                        break;

                    case 'WS':
                        decorateCell(elt, '&nbsp;', 'ws', classes);
                        break;

                    case 'WW':
                        decorateCell(elt, '&nbsp;', 'ww', classes);
                        break;

                    case 'AL':
                        decorateCell(elt, '<i class="fas fa-mortar-pestle"></i>', 'al', classes);
                        break;

                    case 'STS':
                        decorateCell(elt, '<i class="fas fa-bars"></i>', 'ws', classes);
                        break;

                    case 'STW':
                        decorateCell(elt, '<i class="fas fa-bars"></i>', 'ww', classes);
                        break;
                    
                    case 'CA':
                    case 'CB':
                    case 'CD':
                    case 'CC':
                    case 'CD':
                    case 'CE':
                    case 'CF':
                    case 'CG':
                    case 'CH':
                    case 'CI':
                    case 'CJ':
                    case 'CK':
                    case 'CL':
                    case 'CM':
                    case 'CN':
                    case 'CO':
                    case 'CP':
                    case 'CQ':
                    case 'CR':
                    case 'CS':
                    case 'CT':
                    case 'CU':
                    case 'CV':
                    case 'CW':
                    case 'CX':
                    case 'CY':
                    case 'CZ':
                        var _value = Radio[i].value;
                        decorateCell(elt, elt.innerHTML, _value.toLowerCase(), ['sld'].concat(classesColor));
                        break;
                    default:
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