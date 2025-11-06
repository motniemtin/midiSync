(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76700,e=>{"use strict";e.i(47167);var r=e.i(15874),t=e.i(31067),a=e.i(71645),i=e.i(7670),s=e.i(19130),o=e.i(84364),l=e.i(90290),n=e.i(99844),c=e.i(90059),d=e.i(40672),u=e.i(19727);function f(e){return(0,u.default)("MuiCircularProgress",e)}(0,d.default)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=e.i(43476);let m=["className","color","disableShrink","size","style","thickness","value","variant"],v=e=>e,k,p,g,x,y=(0,o.keyframes)(k||(k=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,o.keyframes)(p||(p=v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),S=(0,c.default)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.default)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,t.default)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,o.css)(g||(g=v`
      animation: ${0} 1.4s linear infinite;
    `),y)),C=(0,c.default)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),P=(0,c.default)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,l.default)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,t.default)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.css)(x||(x=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)),D=a.forwardRef(function(e,a){let o=(0,n.useDefaultProps)({props:e,name:"MuiCircularProgress"}),{className:c,color:d="primary",disableShrink:u=!1,size:v=40,style:k,thickness:p=3.6,value:g=0,variant:x="indeterminate"}=o,y=(0,r.default)(o,m),b=(0,t.default)({},o,{color:d,disableShrink:u,size:v,thickness:p,value:g,variant:x}),D=(e=>{let{classes:r,variant:t,color:a,disableShrink:i}=e,o={root:["root",t,`color${(0,l.default)(a)}`],svg:["svg"],circle:["circle",`circle${(0,l.default)(t)}`,i&&"circleDisableShrink"]};return(0,s.default)(o,f,r)})(b),w={},M={},j={};if("determinate"===x){let e=2*Math.PI*((44-p)/2);w.strokeDasharray=e.toFixed(3),j["aria-valuenow"]=Math.round(g),w.strokeDashoffset=`${((100-g)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,h.jsx)(S,(0,t.default)({className:(0,i.default)(D.root,c),style:(0,t.default)({width:v,height:v},M,k),ownerState:b,ref:a,role:"progressbar"},j,y,{children:(0,h.jsx)(C,{className:D.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,h.jsx)(P,{className:D.circle,style:w,ownerState:b,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))});e.s(["default",0,D],76700)},62030,e=>{"use strict";var r=e.i(43476),t=e.i(76700),a=e.i(63665);function i(){return(0,r.jsx)(a.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},children:(0,r.jsx)(t.default,{})})}e.s(["default",()=>i])}]);