function rgbToHex(e){const t=e.match(/\d+/g);if(3===t.length)var[a,n,i]=t.map(Number);return a=Math.max(0,Math.min(255,a)),n=Math.max(0,Math.min(255,n)),i=Math.max(0,Math.min(255,i)),`#${a.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}`.toUpperCase()}function getChartColorsArray(e){const t=document.getElementById(e);if(t){const a=t.dataset.chartColors;if(a)return JSON.parse(a).map((e=>{const t=e.replace(/\s/g,"");if(t.includes("#"))return t;{const e=document.querySelector(t);if(e)return window.getComputedStyle(e).backgroundColor||t;{const e=document.createElement("div");e.className=t,document.body.appendChild(e);const a=window.getComputedStyle(e);return(a.backgroundColor.includes("#")?a.backgroundColor:rgbToHex(a.backgroundColor))||t}}}));console.warn(`chart-colors attribute not found on: ${e}`)}}var chart,options={series:[{data:[{x:"Code",y:[new Date("2019-03-02").getTime(),new Date("2019-03-04").getTime()]},{x:"Test",y:[new Date("2019-03-04").getTime(),new Date("2019-03-08").getTime()]},{x:"Validation",y:[new Date("2019-03-08").getTime(),new Date("2019-03-12").getTime()]},{x:"Deployment",y:[new Date("2019-03-12").getTime(),new Date("2019-03-18").getTime()]}]}],chart:{height:350,type:"rangeBar"},plotOptions:{bar:{horizontal:!0}},colors:getChartColorsArray("basicTimeline"),xaxis:{type:"datetime"}};(chart=new ApexCharts(document.querySelector("#basicTimeline"),options)).render(),options={series:[{data:[{x:"Analysis",y:[new Date("2019-02-27").getTime(),new Date("2019-03-04").getTime()]},{x:"Design",y:[new Date("2019-03-04").getTime(),new Date("2019-03-08").getTime()]},{x:"Coding",y:[new Date("2019-03-07").getTime(),new Date("2019-03-10").getTime()]},{x:"Testing",y:[new Date("2019-03-08").getTime(),new Date("2019-03-12").getTime()]},{x:"Deployment",y:[new Date("2019-03-12").getTime(),new Date("2019-03-17").getTime()]}]}],chart:{height:350,type:"rangeBar"},colors:getChartColorsArray("colorTimeline"),plotOptions:{bar:{horizontal:!0,distributed:!0,dataLabels:{hideOverflowingLabels:!1}}},dataLabels:{enabled:!0,formatter:function(e,t){var a=t.w.globals.labels[t.dataPointIndex],n=moment(e[0]),i=moment(e[1]).diff(n,"days");return a+": "+i+(i>1?" days":" day")}},xaxis:{type:"datetime"},yaxis:{show:!1}},(chart=new ApexCharts(document.querySelector("#colorTimeline"),options)).render(),options={series:[{name:"Bob",data:[{x:"Design",y:[new Date("2019-03-05").getTime(),new Date("2019-03-08").getTime()]},{x:"Code",y:[new Date("2019-03-08").getTime(),new Date("2019-03-11").getTime()]},{x:"Test",y:[new Date("2019-03-11").getTime(),new Date("2019-03-16").getTime()]}]},{name:"Joe",data:[{x:"Design",y:[new Date("2019-03-02").getTime(),new Date("2019-03-05").getTime()]},{x:"Code",y:[new Date("2019-03-06").getTime(),new Date("2019-03-09").getTime()]},{x:"Test",y:[new Date("2019-03-10").getTime(),new Date("2019-03-19").getTime()]}]}],chart:{height:350,type:"rangeBar"},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0,formatter:function(e){var t=moment(e[0]),a=moment(e[1]).diff(t,"days");return a+(a>1?" days":" day")}},colors:getChartColorsArray("multiSeriesChart"),fill:{type:"gradient",gradient:{shade:"light",type:"vertical",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},xaxis:{type:"datetime"},legend:{position:"top"}},(chart=new ApexCharts(document.querySelector("#multiSeriesChart"),options)).render(),options={series:[{name:"Bob",data:[{x:"Design",y:[new Date("2019-03-05").getTime(),new Date("2019-03-08").getTime()]},{x:"Code",y:[new Date("2019-03-02").getTime(),new Date("2019-03-05").getTime()]},{x:"Code",y:[new Date("2019-03-05").getTime(),new Date("2019-03-07").getTime()]},{x:"Test",y:[new Date("2019-03-03").getTime(),new Date("2019-03-09").getTime()]},{x:"Test",y:[new Date("2019-03-08").getTime(),new Date("2019-03-11").getTime()]},{x:"Validation",y:[new Date("2019-03-11").getTime(),new Date("2019-03-16").getTime()]},{x:"Design",y:[new Date("2019-03-01").getTime(),new Date("2019-03-03").getTime()]}]},{name:"Joe",data:[{x:"Design",y:[new Date("2019-03-02").getTime(),new Date("2019-03-05").getTime()]},{x:"Test",y:[new Date("2019-03-06").getTime(),new Date("2019-03-16").getTime()],goals:[{name:"Break",value:new Date("2019-03-10").getTime(),strokeColor:"#CD2F2A"}]},{x:"Code",y:[new Date("2019-03-03").getTime(),new Date("2019-03-07").getTime()]},{x:"Deployment",y:[new Date("2019-03-20").getTime(),new Date("2019-03-22").getTime()]},{x:"Design",y:[new Date("2019-03-10").getTime(),new Date("2019-03-16").getTime()]}]},{name:"Dan",data:[{x:"Code",y:[new Date("2019-03-10").getTime(),new Date("2019-03-17").getTime()]},{x:"Validation",y:[new Date("2019-03-05").getTime(),new Date("2019-03-09").getTime()],goals:[{name:"Break",value:new Date("2019-03-07").getTime(),strokeColor:"#CD2F2A"}]}]}],chart:{height:350,type:"rangeBar"},plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},xaxis:{type:"datetime"},stroke:{width:1},fill:{type:"solid",opacity:.6},colors:getChartColorsArray("advancedMultipleRanges"),legend:{position:"top",horizontalAlign:"left"}},(chart=new ApexCharts(document.querySelector("#advancedMultipleRanges"),options)).render(),options={series:[{name:"George Washington",data:[{x:"President",y:[new Date(1789,3,30).getTime(),new Date(1797,2,4).getTime()]}]},{name:"John Adams",data:[{x:"President",y:[new Date(1797,2,4).getTime(),new Date(1801,2,4).getTime()]},{x:"Vice President",y:[new Date(1789,3,21).getTime(),new Date(1797,2,4).getTime()]}]},{name:"Thomas Jefferson",data:[{x:"President",y:[new Date(1801,2,4).getTime(),new Date(1809,2,4).getTime()]},{x:"Vice President",y:[new Date(1797,2,4).getTime(),new Date(1801,2,4).getTime()]},{x:"Secretary of State",y:[new Date(1790,2,22).getTime(),new Date(1793,11,31).getTime()]}]},{name:"Aaron Burr",data:[{x:"Vice President",y:[new Date(1801,2,4).getTime(),new Date(1805,2,4).getTime()]}]},{name:"George Clinton",data:[{x:"Vice President",y:[new Date(1805,2,4).getTime(),new Date(1812,3,20).getTime()]}]},{name:"John Jay",data:[{x:"Secretary of State",y:[new Date(1789,8,25).getTime(),new Date(1790,2,22).getTime()]}]},{name:"Edmund Randolph",data:[{x:"Secretary of State",y:[new Date(1794,0,2).getTime(),new Date(1795,7,20).getTime()]}]},{name:"Timothy Pickering",data:[{x:"Secretary of State",y:[new Date(1795,7,20).getTime(),new Date(1800,4,12).getTime()]}]},{name:"Charles Lee",data:[{x:"Secretary of State",y:[new Date(1800,4,13).getTime(),new Date(1800,5,5).getTime()]}]},{name:"John Marshall",data:[{x:"Secretary of State",y:[new Date(1800,5,13).getTime(),new Date(1801,2,4).getTime()]}]},{name:"Levi Lincoln",data:[{x:"Secretary of State",y:[new Date(1801,2,5).getTime(),new Date(1801,4,1).getTime()]}]},{name:"James Madison",data:[{x:"Secretary of State",y:[new Date(1801,4,2).getTime(),new Date(1809,2,3).getTime()]}]}],chart:{height:350,type:"rangeBar"},plotOptions:{bar:{horizontal:!0,barHeight:"50%",rangeBarGroupRows:!0}},colors:getChartColorsArray("multipleSeriesGroupRows"),fill:{type:"solid"},xaxis:{type:"datetime"},legend:{position:"right"},tooltip:{custom:function(e){return new Date(e.y1).getFullYear(),new Date(e.y2).getFullYear(),e.ctx.rangeBar.getTooltipValues(e),""}}},(chart=new ApexCharts(document.querySelector("#multipleSeriesGroupRows"),options)).render(),options={series:[{data:[{x:"Operations",y:[2800,4500]},{x:"Customer Success",y:[3200,4100]},{x:"Engineering",y:[2950,7800]},{x:"Marketing",y:[3e3,4600]},{x:"Product",y:[3500,4100]},{x:"Data Science",y:[4500,6500]},{x:"Sales",y:[4100,5600]}]}],chart:{height:350,type:"rangeBar",zoom:{enabled:!1}},plotOptions:{bar:{horizontal:!0,isDumbbell:!0,dumbbellColors:[[getChartColorsArray("multipleSeriesGroupRows")[0],getChartColorsArray("multipleSeriesGroupRows")[1]]]}},title:{text:"Paygap Disparity"},legend:{show:!0,showForSingleSeries:!0,position:"top",horizontalAlign:"left",customLegendItems:["Female","Male"]},fill:{type:"gradient",gradient:{gradientToColors:[getChartColorsArray("dumbbellChart")[1]],inverseColors:!1,stops:[0,100]}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},(chart=new ApexCharts(document.querySelector("#dumbbellChart"),options)).render();