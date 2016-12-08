module.exports=webpackJsonp([6],{0:function(e,t,a){a(598),e.exports=a(1854)},265:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function u(){return{}}function n(e){return{menubarLayoutActions:(0,l.bindActionCreators)(r,e),dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=a(6),o=a(5),c=a(334),r=i(c),s=a(64),d=i(s),L=a(46),j=a(1),N=M(j),C=a(3),y=M(C),I=a(632),T=M(I),f=a(29),w=M(f),D=a(191),m=M(D),g=a(26),k=M(g),z=a(320),E=M(z),x=a(62),p=M(x),O=a(190),S=M(O),Q=t.Component=N.default.createClass({displayName:"Component",render:function(){var e=this.props,t=e.menu,a=e.menubarLayoutActions,M=e.children,i=e.dispatch,u=[{label:"Open main window",onClick:function(){return i(d.show("main"))}},{label:"Preferences",onClick:function(){return i((0,L.push)({pathname:"/settings/application",state:{meta:{scope:["main"]}}}))}},{label:"Account Settings",onClick:function(){return i((0,L.push)({pathname:"/settings/account",state:{meta:{scope:["main"]}}}))}},{label:"Quit Stemn",divider:!0,onClick:function(){return i(d.quit())}}],n=t?{marginLeft:"5px"}:{};return N.default.createElement("div",{className:(0,y.default)(T.default.toolbar,"layout-row layout-align-start-center")},t?N.default.createElement(k.default,{color:"white",title:"Projects Menu",onClick:function(){return a.toggleSidebar(!0)}},N.default.createElement(E.default,{size:"22"})):"",N.default.createElement("div",{className:"flex layout-row layout-align-start-center",style:n},M),N.default.createElement(k.default,{color:"white",onClick:function(){return i(d.show("main"))},title:"Open main window"},N.default.createElement(S.default,{size:"20px"})),N.default.createElement(w.default,{preferPlace:"below"},N.default.createElement(k.default,{title:"Options",color:"white"},N.default.createElement(p.default,{size:"20px"})),N.default.createElement(m.default,{menu:u})))}});t.default=(0,o.connect)(u,n)(Q)},334:function(e,t){"use strict";function a(e){return{type:"MENUBAR_LAYOUT/TOGGLE_SIDEBAR",payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.toggleSidebar=a},574:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNTBweCIgaGVpZ2h0PSIxNTBweCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMjkyRTMzIiBkPSJNMTE1LjEzMyw4My4yNDJoLTkuMTZ2LTRsNy43NiwwLjAwNmMwLjE2OS0wLjAxMiwwLjMyMS0wLjAxLDAuNDM5LTAuMDA4bDAuMjU4LDAuMDAyCgkJCQljMy4zNzksMCw2LjEyNy0yLjc1LDYuMTI3LTYuMTNjMC0zLjMyOS0yLjYwNy02LjAxNS01LjkzNi02LjExMmwtMi4xNzktMC4wNjRsMC4yNTEtMi4xNjRjMC4wODEtMC43MDUsMC4xMTktMS4zMDEsMC4xMTktMS44NzMKCQkJCWMwLTguNjg2LTcuMDY1LTE1Ljc1Mi0xNS43NS0xNS43NTJjLTEuNDA2LDAtMi44NCwwLjIwMi00LjI2LDAuNmwtMi4yMDksMC42MTlsLTAuMzEyLTIuMjczCgkJCQljLTEuNjItMTEuODI4LTExLjg1Ny0yMC43NDgtMjMuODEzLTIwLjc0OGMtMTMuMjYxLDAtMjQuMDQ5LDEwLjc4NS0yNC4wNDksMjQuMDQzbDAuMDA0LDEuOTU4bC0xLjc3MywwLjIwMgoJCQkJYy03LjAxNCwwLjgtMTIuMzAzLDYuNzMxLTEyLjMwMywxMy43OThjMCw3LjY2Myw2LjIzMiwxMy44OTcsMTMuODkzLDEzLjg5N3Y0Yy05Ljg2NiwwLTE3Ljg5My04LjAyOS0xNy44OTMtMTcuODk3CgkJCQljMC04LjUwOSw1Ljk1NS0xNS43MzksMTQuMTEzLTE3LjQ4N2MwLjc5Ni0xNC43NTYsMTMuMDU1LTI2LjUxNCwyOC4wMDgtMjYuNTE0YzEzLjIxNywwLDI0LjYzNCw5LjM0OCwyNy4zOTksMjIuMDcyCgkJCQljMS4wNjYtMC4xNzgsMi4xMzUtMC4yNywzLjE5NC0wLjI3YzEwLjg5MSwwLDE5Ljc1LDguODYxLDE5Ljc1LDE5Ljc1MmMwLDAuMTIzLTAuMDAxLDAuMjQ4LTAuMDA0LDAuMzc0CgkJCQljNC40NzksMS4wNTgsNy43NDgsNS4wNDUsNy43NDgsOS44NGMwLDUuMzQ1LTQuMTYxLDkuNzM3LTkuNDE0LDEwLjEwNEwxMTUuMTMzLDgzLjI0MnoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYyLjY0MSw1Ny4zNjhoLTcuMzk1Yy00LjMyMiwwLTcuODMsMy40NjItNy45MTgsNy43NjRsLTAuMDA4LDF2NDkuOTMzbDAuMDIzLTIKCQkJCWMtMC4wMS0wLjE1LTAuMDIzLDEuNzA0LTAuMDIzLDEuNTU0YzAtNC4zNzgsMy41NDktNy45MjksNy45MjYtNy45MjloNDUuOTA4VjU3LjM2OGgtMjcuMThINjIuNjQxeiIvPgoJCQk8cGF0aCBmaWxsPSIjMjkyRTMzIiBkPSJNNDcuMzEzLDExNy42MjdoLTAuMDAzbC0xLjk5LTAuMDFsMC4wMDgtNTIuNTAxYzAuMTEtNS4zODcsNC41NTktOS43NDgsOS45MTgtOS43NDhoNy4zOTV2NGgtNy4zOTUKCQkJCWMtMy4xOTgsMC01Ljg1MywyLjYwNC01LjkxOCw1LjgwNmwtMC4wMDgsMC45NzR2NDEuNTExYzEuNjU1LTEuMjM2LDMuNzA2LTEuOTY5LDUuOTI2LTEuOTY5aDQzLjkwOFY1OS4zNjhoLTI1LjE4di00aDI5LjE4CgkJCQl2NTQuMzIxSDU1LjI0NmMtMy4xNTUsMC01Ljc0MywyLjQ4Mi01LjkxNyw1LjU5NmwtMC4wMDksMC44MDNoLTAuMDc0QzQ4Ljg5LDExNy42MDEsNDcuNDA5LDExNy42MjcsNDcuMzEzLDExNy42Mjd6Ii8+CgkJPC9nPgoJCTxyZWN0IHg9IjU5LjQ3MyIgeT0iNjIuNzg0IiBmaWxsPSIjQjdCRUMwIiB3aWR0aD0iMzYuMjY2IiBoZWlnaHQ9IjM5LjQ4OSIvPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDEuMTU0LDEwNy42ODlIODcuODM2aC0zMi41OWMtNC4zNzcsMC03LjkyNiwzLjU1MS03LjkyNiw3LjkyOWMwLDQuMzc2LDMuNTQ5LDcuOTI1LDcuOTI2LDcuOTI1CgkJCQkJaDMyLjU5aDEzLjMxOFYxMDcuNjg5eiIvPgoJCQkJPHBhdGggZmlsbD0iIzI5MkUzMyIgZD0iTTEwMy4xNTQsMTI1LjU0M0g1NS4yNDZjLTUuNDczLDAtOS45MjYtNC40NTItOS45MjYtOS45MjVjMC01LjQ3NSw0LjQ1My05LjkyOSw5LjkyNi05LjkyOWg0Ny45MDgKCQkJCQlWMTI1LjU0M3ogTTU1LjI0NiwxMDkuNjg5Yy0zLjI2OCwwLTUuOTI2LDIuNjYtNS45MjYsNS45MjljMCwzLjI2NywyLjY1OCw1LjkyNSw1LjkyNiw1LjkyNWg0My45MDh2LTExLjg1NEg1NS4yNDZ6Ii8+CgkJCTwvZz4KCQk8L2c+CgkJPHBvbHlnb24gZmlsbD0iIzMzQzFEOCIgcG9pbnRzPSI3MC42ODgsMTI5LjkwNiA2NC45MzgsMTI2LjI2IDU5LjE4OCwxMjkuOTA2IDU5LjE4OCwxMTYuMzAxIDY0LjkzOCwxMTYuMzAxIDcwLjY4OCwxMTYuMzAxIAkJIi8+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NC42NTYsMTE2LjA3aDQ2LjQ5OEg1NC42NTZ6Ii8+CgkJCTxyZWN0IHg9IjU0LjY1NiIgeT0iMTE0LjA3IiBmaWxsPSIjMjkyRTMzIiB3aWR0aD0iNDYuNDk4IiBoZWlnaHQ9IjQiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NC42NTYsMTA3LjJWNTguMTMyVjEwNy4yeiIvPgoJCQk8cmVjdCB4PSI1Mi42NTYiIHk9IjU4LjEzMiIgZmlsbD0iIzI5MkUzMyIgd2lkdGg9IjQiIGhlaWdodD0iNDkuMDY4Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBvbHlnb24gZmlsbD0iIzI5MkUzMyIgcG9pbnRzPSI3NS41MjIsNDguNDM4IDY4LjM1Miw0MS4yNzMgNjEuMTg0LDQ4LjQzOCA1OC4zNTUsNDUuNjA3IDY4LjM1MiwzNS42MTkgNzguMzQ5LDQ1LjYwNyAJCQkJIi8+CgkJCTwvZz4KCQk8L2c+CgkJPGc+CgkJCTxyZWN0IHg9IjY2LjU3NiIgeT0iNDEuMTQ2IiBmaWxsPSIjMjkyRTMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIyNi40NjIiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cG9seWdvbiBmaWxsPSIjMjkyRTMzIiBwb2ludHM9Ijc5LjY5NSw5NC44NTcgNjkuNjk4LDg0Ljg2OSA3Mi41MjQsODIuMDM5IDc5LjY5NSw4OS4yMDMgODYuODYzLDgyLjAzOSA4OS42OTEsODQuODY5IAkJCQkiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPHJlY3QgeD0iNzcuNDcxIiB5PSI2Mi44NjgiIGZpbGw9IiMyOTJFMzMiIHdpZHRoPSI0IiBoZWlnaHQ9IjI2LjQ2MiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},632:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",toolbar:"_🐞👆🇦🇪🏃👆🏿🌵"}},998:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",sidebar:"_👵🏽🇬🇬👧🏽😉🛥🔇",timeline:"_🇲🇸🔔🕞🖐🏻🇪🇨🇦🇺",header:"_🇹🇴🇰🇿😆🕑👬🍊"}},1695:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNTBweCIgaGVpZ2h0PSIxNTBweCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNODguNzk1LDU5LjkzN2MtMC4wMDQtNS45NTEtMi4zMTYtMTEuNTQxLTYuNTE4LTE1LjczNmMtNC4yMDUtNC4yMDktOS44MDgtNi41MjEtMTUuNzcyLTYuNTA4CgkJCQljLTUuOTM4LDAuMDE2LTExLjUxNywyLjMzLTE1LjY5Nyw2LjUxNWMtOC42NzIsOC42NzctOC42NzQsMjIuNzk5LDAuMDA4LDMxLjQ3YzQuMjEsNC4yMTEsOS44MTksNi41MiwxNS43ODQsNi41MQoJCQkJYzUuOTM3LTAuMDE0LDExLjUwNS0yLjMyOCwxNS42ODktNi41MTJDODYuNDg2LDcxLjQ3Niw4OC43OTksNjUuODg2LDg4Ljc5NSw1OS45Mzd6Ii8+CgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik02Ni41NjMsODQuMTg4Yy02LjQ5MiwwLTEyLjU4Ni0yLjUyLTE3LjE2Mi03LjA5NmMtNC41NzQtNC41Ny03LjA5Ni0xMC42NjEtNy4wOTYtMTcuMTQ3CgkJCQljLTAuMDAyLTYuNDg0LDIuNTE2LTEyLjU3Niw3LjA4OC0xNy4xNWM0LjU1OC00LjU2MywxMC42MzMtNy4wODQsMTcuMTA3LTcuMTAyYzYuNTM1LDAsMTIuNjIxLDIuNTIsMTcuMTkzLDcuMDk1CgkJCQljNC41NzQsNC41NjksNy4wOTgsMTAuNjU5LDcuMTAyLDE3LjE0N2MwLjAwNCw2LjQ4Mi0yLjUxNCwxMi41NzQtNy4wOTIsMTcuMTU1Yy00LjU2Myw0LjU2My0xMC42MzUsNy4wODQtMTcuMDk5LDcuMDk4SDY2LjU2M3oKCQkJCSBNNjYuNTU2LDM5LjY5M2MtNS40NTQsMC4wMTQtMTAuNTI4LDIuMTE5LTE0LjMzMyw1LjkyOGMtMy44MTcsMy44Mi01LjkyLDguOTA2LTUuOTE5LDE0LjMyNAoJCQkJYzAuMDAxLDUuNDE3LDIuMTA0LDEwLjUwMiw1LjkyNSwxNC4zMTZjMy44MiwzLjgyMyw4LjkxLDUuOTI2LDE0LjMzNCw1LjkyNnYybDAuMDMzLTJjNS4zOTgtMC4wMTIsMTAuNDY4LTIuMTE3LDE0LjI3OS01LjkyNgoJCQkJYzMuODItMy44MjMsNS45MjQtOC45MSw1LjkyLTE0LjMyM2MtMC4wMDQtNS40Mi0yLjEwOS0xMC41MDYtNS45My0xNC4zMjFDNzcuMDQ3LDQxLjc5NSw3MS45NjYsMzkuNjkzLDY2LjU1NiwzOS42OTN6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzBDMEQ4IiBkPSJNNzguNzAxLDcyLjAzNWMtMy4yNTIsMy4yNjQtNy41NjUsNS4wNTctMTIuMTUzLDUuMDU5Yy05LjQ1OSwwLjAwOC0xNy4xNTQtNy42ODQtMTcuMTUyLTE3LjE0NQoJCQkJYzAtNC41NjQsMS43NzctOC44Niw1LjAwNi0xMi4xMDRjMy4yNDgtMy4yNiw3LjU2MS01LjA1MywxMi4xNDEtNS4wNTNjNC41NzgtMC4wMDIsOC44ODEsMS43NzcsMTIuMTI3LDUuMDI3CgkJCQljMy4yNDQsMy4yMzgsNS4wMzEsNy41NDksNS4wMzUsMTIuMTJDODMuNzA3LDY0LjUsODEuOTMyLDY4Ljc5NCw3OC43MDEsNzIuMDM1eiIvPgoJCQk8Zz4KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NS4zOCw1OS45NDdoLTRjMC0zLjk0OSwxLjUzOC03LjY2Nyw0LjMyOS0xMC40NjljMi44MDYtMi44MTgsNi41MzUtNC4zNywxMC41MDEtNC4zN3Y0CgkJCQkJYy0yLjg5NCwwLTUuNjE2LDEuMTM0LTcuNjY3LDMuMTkyQzU2LjUwMyw1NC4zNDgsNTUuMzgsNTcuMDY0LDU1LjM4LDU5Ljk0N3oiLz4KCQkJPC9nPgoJCTwvZz4KCQk8cmVjdCB4PSI2MC4wMzciIHk9Ijk0Ljg0IiBmaWxsPSIjQjdCRUMwIiB3aWR0aD0iMTMuMDI3IiBoZWlnaHQ9IjIxLjE4Ii8+CgkJPGc+CgkJCTxyZWN0IHg9IjYyLjAwNiIgeT0iOTAuMzQxIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iOS4wODgiIGhlaWdodD0iNC40NTMiLz4KCQkJPHBvbHlnb24gZmlsbD0iIzI4MkQzMyIgcG9pbnRzPSI2NC4wMDUsOTQuNzkzIDYwLjAwNSw5NC43OTMgNjAuMDA4LDg4LjM0IDczLjA5NSw4OC4zNDIgNzMuMDk1LDk0Ljc5MyA2OS4wOTUsOTQuNzkzCgkJCQk2OS4wOTUsOTIuMzQyIDY0LjAwNiw5Mi4zNCAJCQkiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03MS4wOTUsMTE2LjAyYzAsMC43MjUsMCwxLjQ1My0wLjAwMiwyLjE4MmMtMi41MDYsMi41MS02LjU3NiwyLjUxLTkuMDg4LTAuMDAyYzAtMC43MjcsMC0xLjQ1MywwLTIuMTgKCQkJCUg3MS4wOTV6Ii8+CgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik02Ni41NTMsMTIyLjA4MmMtMC4wMDIsMC0wLjAwMiwwLTAuMDAyLDBjLTIuMjUxLDAtNC4zNjctMC44NzctNS45Ni0yLjQ2OWwtMC41ODYtMC41ODR2LTMuMDFoNHYxLjI2CgkJCQljMC43NDEsMC41MjEsMS42MjIsMC44MDMsMi41NDYsMC44MDNjMC4wMDEsMCwwLjAwMSwwLDAuMDAxLDBjMC45MjQsMCwxLjgwNC0wLjI3OSwyLjU0Mi0wLjgwMWwwLjAwMS0xLjI2Mmg0bC0wLjAwNSwzLjAxMgoJCQkJbC0wLjU4MiwwLjU4NEM3MC45MTgsMTIxLjIwNyw2OC44MDMsMTIyLjA4Miw2Ni41NTMsMTIyLjA4MnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHJlY3QgeD0iNjcuOTg4IiB5PSI4Mi4zNSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQiIGhlaWdodD0iNi44NTIiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxyZWN0IHg9IjYxLjExMyIgeT0iODIuMzUiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSI0IiBoZWlnaHQ9IjYuODUyIi8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjMjgyRDMzIiBkPSJNMTE1LjgxMSw5Mi4yMTNjLTAuMTIzLDAtMC4yNDYtMC4wMDItMC4zNjctMC4wMDhsLTAuMzQ2LDAuMDA4SDc2Ljczdi00aDM2Ljk2NWwwLjA0NS0wLjEyM2wxLjU0MSwwLjA5NAoJCQljMC4xNzYsMC4wMTYsMC4zNSwwLjAyOSwwLjUyOSwwLjAyOWMzLjQ3MSwwLDYuMjk1LTIuODI0LDYuMjk1LTYuMjk3YzAtMy40MjItMi42OC02LjE4Mi02LjEwMi02LjI4MWwtMi4xNzgtMC4wNjRsMC4yNS0yLjE2NwoJCQljMC4wODItMC43MDMsMC4xMjMtMS4zMjgsMC4xMjMtMS45MTRjMC04Ljg5LTcuMjMtMTYuMTIxLTE2LjExNy0xNi4xMjFjLTAuNjM3LDAtMS4yOTUsMC4wNDUtMi4wMSwwLjEzN2wtMS44MjIsMC4yMzYKCQkJbC0wLjM4OS0xLjc5NmMtMS4xMzUtNS4yNC0zLjc1LTEwLjAyMi03LjU2My0xMy44MjljLTUuMjg1LTUuMjg5LTEyLjMxNS04LjE5OS0xOS44MDQtOC4xOTljLTAuMDIxLDAtMC4wNDIsMC0wLjA2MywwCgkJCWMtNy40ODIsMC4wMi0xNC41MDUsMi45MzQtMTkuNzcyLDguMjA2Yy00Ljk5NCw0Ljk5Ni03Ljg5NCwxMS42NTEtOC4xNjQsMTguNzM5bC0wLjA1MiwxLjMzNmwtMS4yNTMsMC40NjMKCQkJYy01LjU2LDIuMDU3LTkuMjk1LDcuNDEyLTkuMjk1LDEzLjMyNGMwLDcuODQ2LDYuMzgxLDE0LjIyNywxNC4yMjUsMTQuMjI3aDE0LjI1MXY0SDQyLjEyYy0xMC4wNDksMC0xOC4yMjUtOC4xNzYtMTguMjI1LTE4LjIyNwoJCQljMC03LjEzMyw0LjI0LTEzLjYzMywxMC42NzgtMTYuNTY4YzAuNTk1LTcuNjExLDMuODU0LTE0LjcxNSw5LjI1Ni0yMC4xMjFjNi4wMjEtNi4wMjUsMTQuMDQ1LTkuMzU2LDIyLjU5NC05LjM3OQoJCQljMC4wMjMsMCwwLjA0OSwwLDAuMDcyLDBjOC41NTksMCwxNi41OTMsMy4zMjYsMjIuNjMyLDkuMzdjMy45MzgsMy45MzEsNi43NTgsOC43NzUsOC4yMjMsMTQuMDk2CgkJCWMwLjI0Ni0wLjAxMSwwLjQ4OC0wLjAxNSwwLjczMi0wLjAxNWMxMS4wOTIsMCwyMC4xMTcsOS4wMjUsMjAuMTE3LDIwLjEyMWMwLDAuMTM3LTAuMDAyLDAuMjczLTAuMDA2LDAuNDE0CgkJCWM0LjU3MiwxLjA2Myw3LjkxMiw1LjEyNSw3LjkxMiwxMC4wMTJDMTI2LjEwNSw4Ny41OTQsMTIxLjQ4Niw5Mi4yMTMsMTE1LjgxMSw5Mi4yMTN6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},1854:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function M(i,u){try{var n=t[i](u),l=n.value}catch(e){return void a(e)}return n.done?void e(l):Promise.resolve(l).then(function(e){M("next",e)},function(e){M("throw",e)})}return M("next")})}}var u=function(){var e=i(regeneratorRuntime.mark(function e(){var t,a,M;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("sessionState");case 2:t=e.sent,a=(0,L.default)(t),M=(0,s.syncHistoryWithStore)(r.hashHistory,a),(0,w.default)(a),(0,o.render)(l.default.createElement(c.Provider,{store:a},l.default.createElement(r.Router,{history:M,routes:(0,N.default)(a)})),document.getElementById("root"));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();a(594);var n=a(1),l=M(n),o=a(30),c=a(5),r=a(31),s=a(46),d=a(597),L=M(d),j=a(1861),N=M(j),C=a(492),y=M(C),I=a(430),T=M(I),f=a(595),w=M(f),D=(0,y.default)(T.default);u()},1855:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.auth;return{auth:t}}function u(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var n=a(5),l=a(46),o=a(1),c=M(o),r=t.Component=c.default.createClass({displayName:"Component",componentWillReceiveProps:function(e,t){e.auth.authToken&&e.auth.user._id||e.dispatch((0,l.push)("/login"))},render:function(){var e=this.props.children;return e}});t.default=(0,n.connect)(i,u)(r)},1856:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.children;return n.default.createElement("div",{className:"layout-column flex"},t,n.default.createElement(o.default,{types:["FILE_DOWNLOAD"]}))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),n=M(u),l=a(941),o=M(l);i.propTypes={children:u.PropTypes.element.isRequired},t.default=i,e.exports=t.default},1857:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.auth;return{auth:t}}function u(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var n=a(5),l=a(46),o=a(1),c=M(o),r=t.Component=c.default.createClass({displayName:"Component",componentWillReceiveProps:function(e,t){e.auth.authToken&&e.auth.user._id&&e.dispatch((0,l.push)("/"))},render:function(){var e=this.props.children;return e}});t.default=(0,n.connect)(i,u)(r)},1858:function(e,t,a){"use strict";function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function u(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var n=(a(6),a(5)),l=a(1),o=i(l),c=a(64),r=M(c),s=a(3),d=(i(s),a(265)),L=(i(d),a(574)),j=i(L),N=a(25),C=i(N),y=t.Component=o.default.createClass({displayName:"Component",render:function(){var e=this.props,t=(e.AuthActions,e.auth,e.dispatch);return o.default.createElement("div",{className:"flex layout-column layout-align-center-center text-center"},o.default.createElement("div",{style:{maxWidth:"300px"}},o.default.createElement("img",{src:j.default,style:{width:"100px",height:"100px"}}),o.default.createElement("div",{className:"text-title-4",style:{marginBottom:"10px"}},"Connect to Stemn"),o.default.createElement("div",{className:"text-title-5",style:{marginBottom:"20px"}},"You must be logged in to Stemn Desktop before you can preview files."),o.default.createElement(C.default,{onClick:function(){return t(r.show("main"))},className:"primary"},"Get started")))}});t.default=(0,n.connect)(u)(y)},1859:function(e,t,a){"use strict";function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var a=e.files,M=t.location,i=M.query,u=i.localPath,n=i.revisionId,l=i.fileId,o=i.projectId;l=l||(a.pathToId[u]?a.pathToId[u].data:"");var c=u?l:l+"-"+n;return{localPath:u,fileId:l,revisionId:n,projectId:o,fileMeta:a.fileMeta[c]}}function n(e){return{filesActions:(0,l.bindActionCreators)(d,e),syncTimelineActions:(0,l.bindActionCreators)(j,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=a(6),o=a(5),c=a(1),r=i(c),s=a(263),d=M(s),L=a(266),j=M(L),N=a(19),C=i(N),y=a(1860),I=i(y),T=a(1695),f=i(T),w=a(998),D=(i(w),t.Component=r.default.createClass({displayName:"Component",onMount:function(e,t){var a=e.localPath,M=e.fileId,i=e.fileMeta,u=e.revisionId,n=e.projectId;a?e.filesActions.getMetaFromPath({path:a}):i&&(i.data||i.loading)||e.filesActions.getMeta({projectId:n,fileId:M,revisionId:u})},componentWillMount:function(){this.onMount(this.props)},render:function(){var e=this.props.fileMeta;return r.default.createElement("div",{className:"layout-column flex"},e&&e.data&&e.data.data?r.default.createElement(I.default,{fileMeta:e.data}):null,r.default.createElement(C.default,{show:e&&e.loading}),!e||e.loading||e.data?null:r.default.createElement("div",{className:"flex layout-column layout-align-center-center text-center"},r.default.createElement("div",{style:{maxWidth:"300px"}},r.default.createElement("img",{src:f.default,style:{width:"100px",height:"100px"}}),r.default.createElement("div",{className:"text-title-4",style:{marginBottom:"10px"}},"Could not locate this file"),r.default.createElement("div",{className:"text-title-5",style:{marginBottom:"20px"}},"This file could not be found in your connected cloud providers."))))}}));t.default=(0,o.connect)(u,n)(D)},1860:function(e,t,a){"use strict";function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var a=e.syncTimeline,M=e.files,i=t.fileMeta;return{syncTimeline:a[i.data.fileId],relatedTasks:M.relatedTasks[i.data.fileId]}}function n(e){return{syncTimelineActions:(0,l.bindActionCreators)(T,e),filesActions:(0,l.bindActionCreators)(y,e),dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=a(6),o=a(5),c=a(1),r=i(c),s=a(3),d=(i(s),a(7)),L=a(20),j=i(L),N=a(161),C=a(263),y=M(C),I=a(266),T=M(I),f=a(38),w=M(f),D=a(64),m=M(D),g=a(590),k=a(934),z=i(k),E=a(332),x=i(E),p=a(261),O=i(p),S=a(936),Q=i(S),A=a(935),v=i(A),h=a(19),J=(i(h),a(1884)),Y=i(J),U=a(961),b=i(U),P=a(1885),Z=i(P),G=a(1882),R=i(G),_=a(998),W=i(_),B=t.Component=r.default.createClass({displayName:"Component",onMount:function(e,t){e.fileMeta.data.project&&e.fileMeta.data.project._id?e.syncTimelineActions.fetchTimeline({projectId:e.fileMeta.data.project._id,fileId:e.fileMeta.data.fileId}):e.syncTimelineActions.fetchTimeline({fileId:e.fileMeta.data.fileId,provider:e.fileMeta.data.provider}),e.filesActions.getRelatedTasks({fileId:e.fileMeta.data.fileId,projectId:e.fileMeta.data.project._id})},componentWillMount:function(){this.onMount(this.props)},getInitialState:function(){return{selected1:this.props.fileMeta,selected2:void 0,lastSelected:1,mode:"single"}},onSelect:function(e){var t="single"==this.state.mode||2==this.state.lastSelected?{selected1:e,lastSelected:1}:{selected2:e,lastSelected:2};this.setState(t)},changeMode:function(e,t){var a=this.state,M=a.selected1,i=a.selected2;if(!i){var u=t.findIndex(function(e){return e.data.fileId==M.data.fileId&&e.data.revisionId==M.data.revisionId});t[u-1]?i=t[u-1]:t[u+1]&&(i=t[u+1])}this.setState({mode:e,selected2:i})},isSelected:function(e){var t=!!(0,d.has)(this.state,"selected1.data.revisionId")&&e.data.revisionId==this.state.selected1.data.revisionId,a=!!(0,d.has)(this.state,"selected2.data.revisionId")&&e.data.revisionId==this.state.selected2.data.revisionId;return"single"==this.state.mode?t:t||a},clickCrumb:function(e){var t=e.file;console.log(t)},clickTag:function(e){this.props.dispatch(w.showModal({modalType:"TASK",modalProps:{taskId:e._id}})),this.props.dispatch(m.show("main"))},render:function(){var e=this,t=this.props,a=t.fileMeta,M=t.syncTimeline,i=t.relatedTasks,u=this.state,n=u.mode,l=u.selected1,o=u.selected2,c=(a.data.project&&a.data.project._id,(0,g.orderItemsByTime)(n,l,o)),s=c[0]?c[0].data:void 0,L=c[1]?c[1].data:void 0,C=M&&M.data?M.data.filter(function(e){return"revision"==e.event}):[];return r.default.createElement("div",{className:"layout-column flex"},r.default.createElement("div",{className:W.default.header+" layout-row layout-align-start-center"},r.default.createElement("div",{className:"flex"},a?r.default.createElement(Q.default,{meta:a.data,clickFn:this.clickCrumb}):""),r.default.createElement(v.default,{file1:s,file2:L,revisions:C,mode:n,changeMode:this.changeMode})),r.default.createElement("div",{className:"layout-row flex"},r.default.createElement("div",{className:"layout-column flex"},r.default.createElement(z.default,{project:a.data.project,file1:s,file2:L,mode:n,header:["sideBySide","aboveAndBelow"].includes(n)}),r.default.createElement(x.default,{className:W.default.timeline,items:C,onSelect:this.onSelect,isSelected:this.isSelected,preferPlace:"above"})),r.default.createElement(O.default,{side:"left",width:"450",widthRange:[0,450],className:"layout-column"},r.default.createElement("aside",{className:W.default.sidebar+" layout-column flex",style:{minWidth:"400px",overflowY:"auto"}},r.default.createElement(Z.default,{style:{marginBottom:"15px"}},"Meta"),r.default.createElement(b.default,null,r.default.createElement("tr",null,r.default.createElement("td",null,"Name"),r.default.createElement("td",null,a.data.name)),r.default.createElement("tr",null,r.default.createElement("td",null,"Size"),r.default.createElement("td",null,(0,N.formatBytes)(a.data.size))),r.default.createElement("tr",null,r.default.createElement("td",null,"Last modified"),r.default.createElement("td",null,(0,j.default)(a.data.modified).fromNow())),C.length>0?r.default.createElement("tr",null,r.default.createElement("td",null,"Revisions"),r.default.createElement("td",null,C.length)):null),i&&i.data&&i.data.length>0?r.default.createElement("div",null,r.default.createElement(Z.default,{style:{margin:"30px 0 15px"}},"Related Tasks"),(0,d.orderBy)(i.data,["complete"]).map(function(t){return r.default.createElement(R.default,{key:t._id,text:t.name,onClick:function(){return e.clickTag(t)}})})):null,r.default.createElement(Z.default,{style:{margin:"30px 0"}},"Timeline"),r.default.createElement("div",{className:"flex layout-column"},r.default.createElement(Y.default,{items:M&&M.data?M.data:[]}))))))}});t.default=(0,o.connect)(u,n)(B)},1861:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),u=M(i),n=a(31),l=a(1856),o=M(l),c=a(1859),r=M(c),s=a(1858),d=M(s),L=a(1855),j=M(L),N=a(1857),C=M(N);t.default=function(e){return u.default.createElement(n.Route,{component:o.default},u.default.createElement(n.Route,{component:j.default},u.default.createElement(n.Route,{component:r.default,path:"/"})),u.default.createElement(n.Route,{component:C.default},u.default.createElement(n.Route,{component:d.default,path:"/login"})))},e.exports=t.default},1882:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var M in a)Object.prototype.hasOwnProperty.call(a,M)&&(e[M]=a[M])}return e},u=a(1),n=M(u),l=a(162),o=a(7),c=a(2151),r=M(c);t.default=n.default.createClass({displayName:"Tag",render:function(){var e=this.props.text;return n.default.createElement("a",i({className:r.default.tag},(0,o.omit)(this.props,["text"])),(0,l.middle)(e,30))}}),e.exports=t.default},1883:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),u=M(i),n=a(20),l=M(n),o=a(3),c=(M(o),a(996)),r=M(c),s=a(63),d=M(s),L=a(586),j=M(L),N=a(949),C=M(N),y=a(959),I=M(y),T={revision:function(e){return u.default.createElement("span",null,"modified this file.")},commit:function(e){return u.default.createElement("span",null,"added this file to commit: ",u.default.createElement(I.default,{path:"/project/"+e.data.project._id+"/feed",show:!0,query:{item:e._id},scope:"main",className:"link-primary"},e.data.summary))}},f=function(e){return T[e.event]?T[e.event](e):u.default.createElement("span",null,"Unknown Event Type")};t.default=u.default.createClass({displayName:"TimelineItem",render:function(){var e=this.props.item;return"comment"==e.event?u.default.createElement(j.default,{commentId:e.comment}):u.default.createElement(C.default,{style:{marginLeft:"5px"}},u.default.createElement("div",{className:"layout-row layout-align-start-center flex"},u.default.createElement("div",{className:r.default.avatar},u.default.createElement(d.default,{picture:e.user.picture,size:"25px",shape:"square"})),u.default.createElement("div",null,u.default.createElement("b",null,e.user.name," "),u.default.createElement("span",{className:"text-grey-3",style:{lineHeight:"1.5em"}},f(e)," - ",(0,l.default)(e.timestamp).fromNow()))))}}),e.exports=t.default},1884:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),u=M(i),n=a(3),l=(M(n),a(1883)),o=M(l);t.default=u.default.createClass({displayName:"TimelineVertical",render:function(){var e=this.props.items;return u.default.createElement("div",null,e.map(function(e){return u.default.createElement(o.default,{key:e._id,item:e})}))}}),e.exports=t.default},1885:function(e,t,a){"use strict";function M(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),u=M(i),n=a(2152),l=M(n);t.default=u.default.createClass({displayName:"SectionTitle",render:function(){var e=this.props,t=e.children,a=e.style;return u.default.createElement("div",{className:l.default.section+" layout-row",style:a},u.default.createElement("div",{className:l.default.text},t))}}),e.exports=t.default},2151:function(e,t){e.exports={border2:"rgba(0, 0, 0, 0.3)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",tag:"_📲🎤🌈😳📨📜"}},2152:function(e,t){e.exports={secondary:"rgba(0, 0, 0, 0.7)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",section:"_🐥🏆🙊👦🏻📦🙍🏾",text:"_🇨🇵🚘💇🏻🍘👉🤓"}}});