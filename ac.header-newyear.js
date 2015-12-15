function pointerEvents() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    var agent = {
        bool: false,
        browser: 0
    };
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    browser = Sys.firefox || Sys.chrome || Sys.safari || 0;
    if(browser)
        version = parseFloat(browser.substring(0,s.indexOf(".")+5));
    switch(browser) {
        case Sys.firefox:
            if(version >= 3.6)
                agent.bool = true;
            break;
        case Sys.chrome:
            if(version >= 2)
                agent.bool = true;
            break;
        case Sys.safari:
            if(version >= 4)
                agent.bool = true;
            break;
    }
    if(Sys.ie)
        agent.browser = 1;
    return agent;
}


var winWidth = window.innerWidth;
var snowy = Snowy({
        addIn: 'snow',
        width: '100%',
        height: 180,
        cell: pointerEvents().browser ? 100 : 90,
        maxCell: pointerEvents().browser ? 80 : 1000,
        browser: pointerEvents().browser,
        line: [
            {
                baseX: '50%',
                from: {
                    X: -950,
                    Y: 56
                },
                to: {
                    X: -878,
                    Y: 62
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -878,
                    Y: 62
                },
                to: {
                    X: -835,
                    Y: 55
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -820,
                    Y: 53
                },
                to: {
                    X: -789,
                    Y: 70
                },
                cubicBezier: [0,.27,.06,.97]
            },
            {
                baseX: '50%',
                from: {
                    X: -789,
                    Y: 70
                },
                to: {
                    X: -722,
                    Y: 63
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -722,
                    Y: 63
                },
                to: {
                    X: -668,
                    Y: 66
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -668,
                    Y: 66
                },
                to: {
                    X: -643,
                    Y: 62
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -643,
                    Y: 62
                },
                to: {
                    X: -615,
                    Y: 56
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -599,
                    Y: 54
                },
                to: {
                    X: -579,
                    Y: 57
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -579,
                    Y: 57
                },
                to: {
                    X: -463,
                    Y: 59
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -463,
                    Y: 59
                },
                to: {
                    X: -445,
                    Y: 55
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -445,
                    Y: 55
                },
                to: {
                    X: -384,
                    Y: 56
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -384,
                    Y: 56
                },
                to: {
                    X: -380,
                    Y: 53
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -408,
                    Y: 50
                },
                to: {
                    X: -383,
                    Y: 56
                },
                cubicBezier: [0,.27,.06,.97]
            },
            {
                baseX: '50%',
                from: {
                    X: -383,
                    Y: 56
                },
                to: {
                    X: -360,
                    Y: 54
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -348,
                    Y: 55
                },
                to: {
                    X: -246,
                    Y: 64
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -246,
                    Y: 64
                },
                to: {
                    X: -158,
                    Y: 57
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -158,
                    Y: 57
                },
                to: {
                    X: -109,
                    Y: 58
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -109,
                    Y: 58
                },
                to: {
                    X: -72,
                    Y: 54
                },
            },
            {
                baseX: '50%',
                from: {
                    X: -43,
                    Y: 55
                },
                to: {
                    X: 0,
                    Y: 59
                },
                cubicBezier: [.05,.35,.25,1]
            },
            {
                baseX: '50%',
                from: {
                    X: 0,
                    Y: 59
                },
                to: {
                    X: 49,
                    Y: 57
                },
                cubicBezier: [.46, 0, .09, .85]
            },
            {
                baseX: '50%',
                from: {
                    X: 49,
                    Y: 57
                },
                to: {
                    X: 71,
                    Y: 60
                },
            },
            {
                baseX: '50%',
                from: {
                    X: 71,
                    Y: 60
                },
                to: {
                    X: 100,
                    Y: 56
                }
            },
            {
                baseX: '50%',
                from: {
                    X: 100,
                    Y: 56
                },
                to: {
                    X: 108,
                    Y: 58
                }
            },
            {
                baseX: '50%',
                from: {
                    X: 108,
                    Y: 58
                },
                to: {
                    X: 116,
                    Y: 55
                }
            },
            {
                baseX: '50%',
                from: {
                    X: 125,
                    Y: 55
                },
                to: {
                    X: 165,
                    Y: 70
                },
                cubicBezier: [.08,.36,.33,.77]
            },
            {
                baseX: '50%',
                from: {
                    X: 165,
                    Y: 70
                },
                to: {
                    X: 357,
                    Y: 58
                },
            },
            {
                baseX: '50%',
                from: {
                    X: 357,
                    Y: 58
                },
                to: {
                    X: 505,
                    Y: 64
                },
            },
            {
                baseX: '50%',
                from: {
                    X: 505,
                    Y: 64
                },
                to: {
                    X: 570,
                    Y: 56
                },
            },
            {
                baseX: '50%',
                from: {
                    X: 687,
                    Y: 53
                },
                to: {
                    X: 705,
                    Y: 57
                },
            },
            {
                baseX: '50%',
                from: {
                    X: 705,
                    Y: 57
                },
                to: {
                    X: 720,
                    Y: 52
                },
            },
            {
                baseX: '50%',
                from: {
                    X: 754,
                    Y: 53
                },
                to: {
                    X: 861,
                    Y: 80
                },
                cubicBezier: [0,.2,.34,.86]
            },
            {
                baseX: '50%',
                from: {
                    X: 861,
                    Y: 80
                },
                to: {
                    X: 950,
                    Y: 58
                },
                cubicBezier: [.4,.13,.88,.36]
            },
        ]
    });

    window.onload = function() {
        snowy.init();
        if(pointerEvents().bool) {
            var canvasObj = document.getElementById('snow');
            var canvasParent = canvasObj.parentNode;
            canvasParent.removeChild(canvasObj);
            canvasParent.appendChild(canvasObj);
        }
    }