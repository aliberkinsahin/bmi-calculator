(this["webpackJsonpbmi-calculator"]=this["webpackJsonpbmi-calculator"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/BMI_chart.cc178b6a.svg"},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(4),l=t.n(r),c=(t(11),t(12),t(1)),s=t(5),m=t.n(s),o=t(2),u={visible:{opacity:1,x:0},hidden:{opacity:0,x:-200}},h={visible:{opacity:1,x:0},hidden:{opacity:0,x:200}};function d(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),s=Object(c.a)(l,2),d=s[0],b=s[1],f=Object(n.useState)(),p=Object(c.a)(f,2),E=p[0],g=p[1],v=Object(n.useState)(0),k=Object(c.a)(v,2),y=k[0],w=k[1],N=Object(n.useState)(""),x=Object(c.a)(N,2),O=x[0],B=x[1];return Object(n.useEffect)((function(){!function(e){B(e<18.5?"Underweight":e>18.5&e<=25?"Normal Weight":e>25&e<=30?"Overweight":e>30?"Obese":"")}(y)}),[y]),i.a.createElement("div",{className:"App"},i.a.createElement(o.a.div,{variants:u,initial:"hidden",animate:"visible",transition:{delay:1},className:"Info"},i.a.createElement("h2",null,"What is BMI?"),i.a.createElement("p",null,i.a.createElement("b",null,"Body mass index")," (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m^2, resulting from mass in kilograms and height in metres."),i.a.createElement("hr",null),i.a.createElement("form",{className:"InputArea"},i.a.createElement("div",{className:"Weight"},i.a.createElement("input",{type:"number",id:"weight",value:d,onChange:function(e){return a=e.target.value,void b(a);var a}}),i.a.createElement("label",{htmlFor:"weight"}," = Weight (kg)")),i.a.createElement("div",{className:"Height"},i.a.createElement("input",{type:"number",id:"height",value:E,onChange:function(e){return a=e.target.value,void g(a);var a}}),i.a.createElement("label",{htmlFor:"height"}," = Height (cm) ")),i.a.createElement("div",{className:"ButtonContainer"},i.a.createElement("button",{type:"submit",className:"Button",onClick:function(e){return function(e){e.preventDefault();var a=d/(E*E)*1e4;0===E&&(a=0),w(a.toFixed(2)),r(!0)}(e)}},"Calculate BMI"))),i.a.createElement("hr",null)),t?i.a.createElement(o.a.div,{variants:h,initial:"hidden",animate:"visible",transition:{delay:.75},className:"Graph"},i.a.createElement("label",{htmlFor:"bmi"},"BMI: ",y),i.a.createElement("b",null,i.a.createElement("label",{htmlFor:"bmi"},"(",O,")")),i.a.createElement("img",{className:"Chart",src:m.a,alt:"BMI Chart"}),i.a.createElement("p",null,"More information on"," ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Body_mass_index",rel:"noopener noreferrer",target:"_blank"},"Wikipedia")),i.a.createElement("div",{className:"SocialMedia"},i.a.createElement("a",{href:"https://github.com/aliberkinsahin",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-github-square fa-3x"})),i.a.createElement("a",{href:"https://www.reddit.com/user/_ambitiousSloth",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-reddit-square fa-3x"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/ali-berkin-sahin/",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-linkedin fa-3x"})))):null)}function b(){return i.a.createElement("div",null,i.a.createElement(d,null))}l.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.a9ad1933.chunk.js.map