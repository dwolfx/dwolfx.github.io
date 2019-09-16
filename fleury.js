(() => {
    const $frame = window.frameElement
    console.log(`1${top.flyingCarpertSetup}1`)
    if (!top.flyingCarpertSetup) {
        top.flyingCarpertSetup = true
        $frame.style = 'border: 1px solid red'

        const $styler = document.createElement('style')
        $styler.innerHTML = `
        #sizer {
            height: 300px;
            width: 300px;
            position: relative!important;
            box-sizing: border-box!important;
            overflow: hidden!important;
        }

        #clipper {
            position: absolute!important;
            top: 0!important;
            left: 0!important;
            width: 100%!important;
            height: 100%!important;
            border: 0!important;
            margin: 0!important;
            padding: 0!important;
            clip: rect(0,auto,auto,0)!important;
            -webkit-clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;
            clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;
        }

        #container {
            position: fixed!important;
            top: 0!important;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-transform: translateZ(0)!important;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        #ad {
            width: 300px;
            height: 600px;
        }
        `
        $frame.parentNode.appendChild($styler)

        const $sizer = document.createElement('div')
        $sizer.setAttribute('id', 'sizer')
        $frame.parentNode.appendChild($sizer)

        const $clipper = document.createElement('div')
        $clipper.setAttribute('id', 'clipper')
        $sizer.appendChild($clipper)

        const $container = document.createElement('div')
        $container.setAttribute('id', 'container')
        $clipper.appendChild($container)

        const $ad = document.createElement('div')
        $ad.setAttribute('id', 'ad')
        $container.appendChild($ad)

        $ad.appendChild($frame.parentNode.removeChild($frame))
    }
})()