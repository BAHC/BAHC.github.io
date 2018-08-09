function ready()
{
    var legendForm = document.getElementById("legendForm");
    var form = document.getElementById("form");
    var elt = null;
    var elt_prev = null;
    var classes = new Array(
        'e', 'c', 'b', 'g', 'w', 'f', 'r', 'hg', 'ws', 'ww', 'sld', 'lt'
    );
    var classesColor = new Array(
        'ca', 'cb', 'cc', 'cd', 'ce', 
        'cf', 'cg', 'ch', 'ci', 'cj', 
        'ck', 'cl', 'cm', 'cn', 'co', 
        'cp', 'cq', 'cr', 'cs', 'ct', 
        'cu', 'cv', 'cw', 'cx', 'cy', 
        'cz');
    var dmcColor = new Array(
        'dmc150', 'dmc151', 'dmc152', 'dmc153', 'dmc154', 'dmc155', 'dmc156', 
        'dmc157', 'dmc158', 'dmc159', 'dmc160', 'dmc161', 'dmc162', 'dmc163', 
        'dmc164', 'dmc165', 'dmc166', 'dmc167', 'dmc168', 'dmc169', 'dmc208', 
        'dmc209', 'dmc210', 'dmc211', 'dmc221', 'dmc223', 'dmc224', 'dmc225', 
        'dmc300', 'dmc301', 'dmc3011', 'dmc3012', 'dmc3013', 'dmc3021', 'dmc3022', 
        'dmc3023', 'dmc3024', 'dmc3031', 'dmc3032', 'dmc3033', 'dmc304', 'dmc3041', 
        'dmc3042', 'dmc3045', 'dmc3046', 'dmc3047', 'dmc3051', 'dmc3052', 'dmc3053', 
        'dmc3064', 'dmc307', 'dmc3072', 'dmc3078', 'dmc309', 'dmc310', 'dmc311', 
        'dmc312', 'dmc315', 'dmc316', 'dmc317', 'dmc318', 'dmc319', 'dmc320', 
        'dmc321', 'dmc322', 'dmc326', 'dmc327', 'dmc3325', 'dmc3326', 'dmc3328', 
        'dmc333', 'dmc334', 'dmc3340', 'dmc3341', 'dmc3345', 'dmc3346', 'dmc3347', 
        'dmc3348', 'dmc335', 'dmc3350', 'dmc3354', 'dmc336', 'dmc3362', 'dmc3363', 
        'dmc3364', 'dmc3371', 'dmc340', 'dmc341', 'dmc347', 'dmc349', 'dmc350', 'dmc351', 
        'dmc352', 'dmc353', 'dmc355', 'dmc356', 'dmc3607', 'dmc3608', 'dmc3609', 'dmc367', 
        'dmc368', 'dmc3685', 'dmc3687', 'dmc3688', 'dmc3689', 'dmc369', 'dmc370', 'dmc3705', 'dmc3706', 
        'dmc3708', 'dmc371', 'dmc3712', 'dmc3713', 'dmc3716', 'dmc372', 'dmc3721', 'dmc3722', 'dmc3726', 
        'dmc3727', 'dmc3731', 'dmc3733', 'dmc3740', 'dmc3743', 'dmc3746', 'dmc3747', 'dmc3750', 'dmc3752', 
        'dmc3753', 'dmc3755', 'dmc3756', 'dmc3760', 'dmc3761', 'dmc3765', 'dmc3766', 'dmc3768', 'dmc3770', 
        'dmc3771', 'dmc3772', 'dmc3774', 'dmc3776', 'dmc3777', 'dmc3778', 'dmc3779', 'dmc3781', 'dmc3782', 
        'dmc3787', 'dmc3790', 'dmc3799', 'dmc3801', 'dmc3802', 'dmc3803', 'dmc3804', 'dmc3805', 'dmc3806', 
        'dmc3807', 'dmc3808', 'dmc3809', 'dmc3810', 'dmc3811', 'dmc3812', 'dmc3813', 'dmc3814', 'dmc3815', 
        'dmc3816', 'dmc3817', 'dmc3818', 'dmc3819', 'dmc3820', 'dmc3821', 'dmc3822', 'dmc3823', 'dmc3824', 
        'dmc3825', 'dmc3826', 'dmc3827', 'dmc3828', 'dmc3829', 'dmc3830', 'dmc3831', 'dmc3832', 'dmc3833', 
        'dmc3834', 'dmc3835', 'dmc3836', 'dmc3837', 'dmc3838', 'dmc3839', 'dmc3840', 'dmc3841', 'dmc3842', 
        'dmc3843', 'dmc3844', 'dmc3845', 'dmc3846', 'dmc3847', 'dmc3848', 'dmc3849', 'dmc3850', 'dmc3851', 
        'dmc3852', 'dmc3853', 'dmc3854', 'dmc3855', 'dmc3856', 'dmc3857', 'dmc3858', 'dmc3859', 'dmc3860', 
        'dmc3861', 'dmc3862', 'dmc3863', 'dmc3864', 'dmc3865', 'dmc3866', 'dmc400', 'dmc402', 'dmc407', 
        'dmc413', 'dmc414', 'dmc415', 'dmc420', 'dmc422', 'dmc433', 'dmc434', 'dmc435', 'dmc436', 'dmc437', 
        'dmc444', 'dmc445', 'dmc451', 'dmc452', 'dmc453', 'dmc469', 'dmc470', 'dmc471', 'dmc472', 'dmc498', 
        'dmc500', 'dmc501', 'dmc502', 'dmc503', 'dmc504', 'dmc505', 'dmc517', 'dmc518', 'dmc519', 'dmc520', 
        'dmc522', 'dmc523', 'dmc524', 'dmc535', 'dmc543', 'dmc550', 'dmc552', 'dmc553', 'dmc554', 'dmc561', 
        'dmc562', 'dmc563', 'dmc564', 'dmc580', 'dmc581', 'dmc597', 'dmc598', 'dmc600', 'dmc601', 'dmc602', 
        'dmc603', 'dmc604', 'dmc605', 'dmc606', 'dmc608', 'dmc610', 'dmc611', 'dmc612', 'dmc613', 'dmc632', 
        'dmc640', 'dmc642', 'dmc644', 'dmc645', 'dmc646', 'dmc647', 'dmc648', 'dmc666', 'dmc676', 'dmc677', 
        'dmc680', 'dmc699', 'dmc700', 'dmc701', 'dmc702', 'dmc703', 'dmc704', 'dmc712', 'dmc718', 'dmc720', 
        'dmc721', 'dmc722', 'dmc725', 'dmc726', 'dmc727', 'dmc728', 'dmc729', 'dmc730', 'dmc732', 'dmc733', 
        'dmc734', 'dmc738', 'dmc739', 'dmc740', 'dmc741', 'dmc742', 'dmc743', 'dmc744', 'dmc745', 'dmc746', 
        'dmc747', 'dmc754', 'dmc758', 'dmc760', 'dmc761', 'dmc762', 'dmc772', 'dmc775', 'dmc777', 'dmc778', 
        'dmc779', 'dmc780', 'dmc782', 'dmc783', 'dmc791', 'dmc792', 'dmc793', 'dmc794', 'dmc796', 'dmc797', 
        'dmc798', 'dmc799', 'dmc800', 'dmc801', 'dmc803', 'dmc807', 'dmc809', 'dmc813', 'dmc814', 'dmc815', 
        'dmc816', 'dmc817', 'dmc818', 'dmc819', 'dmc820', 'dmc822', 'dmc823', 'dmc824', 'dmc825', 'dmc826', 
        'dmc827', 'dmc828', 'dmc829', 'dmc830', 'dmc831', 'dmc832', 'dmc833', 'dmc834', 'dmc838', 'dmc839', 
        'dmc840', 'dmc841', 'dmc842', 'dmc844', 'dmc869', 'dmc890', 'dmc891', 'dmc892', 'dmc893', 'dmc894', 
        'dmc895', 'dmc898', 'dmc899', 'dmc900', 'dmc902', 'dmc904', 'dmc905', 'dmc906', 'dmc907', 'dmc909', 
        'dmc910', 'dmc911', 'dmc912', 'dmc913', 'dmc915', 'dmc917', 'dmc918', 'dmc919', 'dmc920', 'dmc921', 
        'dmc922', 'dmc924', 'dmc926', 'dmc927', 'dmc928', 'dmc930', 'dmc931', 'dmc932', 'dmc934', 'dmc935', 
        'dmc936', 'dmc937', 'dmc938', 'dmc939', 'dmc943', 'dmc945', 'dmc946', 'dmc947', 'dmc948', 'dmc950', 
        'dmc951', 'dmc954', 'dmc955', 'dmc956', 'dmc957', 'dmc958', 'dmc959', 'dmc961', 'dmc962', 'dmc963', 
        'dmc964', 'dmc966', 'dmc967', 'dmc970', 'dmc972', 'dmc973', 'dmc975', 'dmc976', 'dmc977', 'dmc986', 
        'dmc987', 'dmc988', 'dmc989', 'dmc991', 'dmc992', 'dmc993', 'dmc995', 'dmc996', 'dmcb5200', 
        'dmcblanc', 'dmcL3790'
    );
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
                var _classesColor = classesColor.concat(dmcColor);
                var _classes = classes.concat(_classesColor);
                switch(Radio[i].value)
                {
                    case 'A':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'B':
                        decorateCell(elt, '&nbsp;', 'b', _classes);
                        break;

                    case 'C':
                        decorateCell(elt, '&nbsp;', 'c', _classes);
                        break;

                    case 'D':
                        decorateCell(elt, '&nbsp;', 'd', _classes);
                        break;

                    case 'E':
                        decorateCell(elt, '&nbsp;', 'e', _classes);
                        break;

                    case 'F':
                        decorateCell(elt, '&nbsp;', 'f', _classes);
                        break;

                    case 'G':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'H':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'I':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'J':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'K':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'L':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'M':
                        decorateCell(elt, Radio[i].value, 'g', _classes);
                        break;

                    case 'N':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'O':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'P':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'Q':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'R':
                        decorateCell(elt, '&nbsp;', 'r', _classes);
                        break;

                    case 'S':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'T':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'U':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'V':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'W':
                        decorateCell(elt, Radio[i].value, 'w', _classes);
                        break;

                    case 'X':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'Y':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'Z':
                        decorateCell(elt, Radio[i].value, 'c', _classes);
                        break;

                    case 'HG':
                        decorateCell(elt, '<i class="fab fa-pagelines"></i>', 'hg', _classes);
                        break;

                    case 'TR':
                        decorateCell(elt, '<i class="fas fa-tree"></i>', 'hg', _classes);
                        break;
                    case 'LT':
                        decorateCell(elt, '<i class="far fa-lightbulb"></i>', 'lt', _classes);
                        break;

                    case 'WS':
                        decorateCell(elt, '&nbsp;', 'ws', _classes);
                        break;

                    case 'WW':
                        decorateCell(elt, '&nbsp;', 'ww', _classes);
                        break;

                    case 'AL':
                        decorateCell(elt, '<i class="fas fa-mortar-pestle"></i>', 'al', _classes);
                        break;

                    case 'STS':
                        decorateCell(elt, '<i class="fas fa-bars"></i>', 'ws', _classes);
                        break;

                    case 'STW':
                        decorateCell(elt, '<i class="fas fa-bars"></i>', 'ww', _classes);
                        break;

                    default:
                        var _value = Radio[i].value;

                        if(classesColor.indexOf(_value.toLowerCase()))
                        {
                            decorateCell(elt, elt.innerHTML, _value.toLowerCase(), ['sld'].concat(_classesColor));
                        }

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
        var mapId = document.getElementById("mapId");
        return parseInt(mapId.value);
    }
}

document.addEventListener("DOMContentLoaded", ready);