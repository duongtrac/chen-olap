function rgbToHex(e){const t=e.match(/\d+/g);if(3===t.length)var[a,r,n]=t.map(Number);return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),n=Math.max(0,Math.min(255,n)),`#${a.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`.toUpperCase()}function getChartColorsArray(e){const t=document.getElementById(e);if(t){const a=t.dataset.chartColors;if(a)return JSON.parse(a).map((e=>{const t=e.replace(/\s/g,"");if(t.includes("#"))return t;{const e=document.querySelector(t);if(e)return window.getComputedStyle(e).backgroundColor||t;{const e=document.createElement("div");e.className=t,document.body.appendChild(e);const a=window.getComputedStyle(e);return(a.backgroundColor.includes("#")?a.backgroundColor:rgbToHex(a.backgroundColor))||t}}}));console.warn(`chart-colors attribute not found on: ${e}`)}}function generateData(e,t,a){for(var r=0,n=[];r<t;){var o=Math.floor(750*Math.random())+1,m=Math.floor(Math.random()*(a.max-a.min+1))+a.min,i=Math.floor(61*Math.random())+15;n.push([o,m,i]),r++}return n}var chart,options={series:[{name:"Bubble1",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:350,type:"bubble"},dataLabels:{enabled:!1},colors:getChartColorsArray("simpleChart"),fill:{opacity:.8},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70}};(chart=new ApexCharts(document.querySelector("#simpleChart"),options)).render(),options={series:[{name:"Product1",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product2",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product3",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product4",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:350,type:"bubble"},dataLabels:{enabled:!1},fill:{type:"gradient"},colors:getChartColorsArray("bubble_chart"),xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70},theme:{palette:"palette2"}},(chart=new ApexCharts(document.querySelector("#bubble_chart"),options)).render();