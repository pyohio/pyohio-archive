(self.webpackChunkpyohio_static_website=self.webpackChunkpyohio_static_website||[]).push([[824],{915:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(3552),o=r(309),l=r(7294),u=r(5444),a=r(977),s=r(2877),i=r(5510),d=r(9784),p=function(t){function e(){return t.apply(this,arguments)||this}return(0,n.Z)(e,t),e.prototype.render=function(){var t=this.props.data.allTalksYaml.edges;function e(t){return d.ou.fromISO(t).setZone("America/New_York").toFormat("h:mma")}return(0,a.tZ)(o.Ar,null,(0,a.tZ)(o.pQ,{title:"PyOhio 2021 Schedule"}),(0,a.tZ)(s.Ge.h1,null,"Schedule"),(0,a.tZ)(i.v0,{sx:{backgroundColor:"muted"}},"PyOhio is July 31, 2021. Times rounded to the nearest 5 mins. All times EDT."),(0,a.tZ)(s.Ge.table,{sx:{tr:{td:{border:"2px solid",borderColor:"muted",pl:"10px",pr:"10px"},th:{backgroundColor:"muted",border:"2px solid",borderColor:"muted"}}}},(0,a.tZ)("tr",null,(0,a.tZ)("th",null,"Start"),(0,a.tZ)("th",null,"End"),(0,a.tZ)("th",null,"Talk")),t.map((function(t){var r=t.node;return(0,a.tZ)("tr",{key:r.id},(0,a.tZ)("td",null,e(r.start_time)),(0,a.tZ)("td",null,e(r.end_time)),(0,a.tZ)("td",null,(0,a.tZ)(s.Ge.a,{as:"h2",sx:{fontSize:2}},(0,a.tZ)(s.Ge.a,{as:u.Link,to:"/program/talks/"+r.slug,sx:{color:"highlight"}},r.title)),"Break"!==r.type&&(0,a.tZ)("span",null,"by"," ",r.speakers.map((function(t){return(0,a.tZ)(s.Ge.a,{as:u.Link,to:"/program/speakers/"+t.slug},t.name)})).reduce((function(t,e){return[t,", ",e]})))))}))))},e}(l.Component)}}]);
//# sourceMappingURL=component---content-pages-program-schedule-js-142e6d241f6c284c6643.js.map