import{j as i,a as n,u as r,r as l,b as p}from"./index.16d6edef.js";import{A as m}from"./AppContainer.75a045af.js";const _="_appIcon_1quib_1",u="_icon_1quib_5",d="_label_1quib_12",t={appIcon:_,icon:u,label:d},h=({title:a,iconPath:e,showLabel:s=!0,onClick:o})=>i("div",{className:t.appIcon,children:[n("img",{className:t.icon,src:e,alt:a,onClick:o}),s&&n("div",{className:t.label,children:a})]}),b="_home_1t5c4_1",g="_page_1t5c4_5",v="_appsContainer_1t5c4_10",c={home:b,page:g,appsContainer:v};function C(){const a=r(),e=l.exports.useMemo(()=>p.map(s=>{const o=()=>a(s.destination);return n(h,{title:s.title,iconPath:s.iconPath,onClick:o},s.id)}),[a]);return n("div",{className:c.home,children:n(m,{showHomeButton:!1,children:n("div",{className:c.page,children:n("div",{className:c.appsContainer,children:e})})})})}export{C as default};
