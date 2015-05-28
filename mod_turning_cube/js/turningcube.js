var rect1;
var xOffset = 100;
var yOffset = 100;
var zOffset = 0;
var xCentre = 100;
var yCentre = 100;
var zCentre = 100;
var Phi = Math.PI/2;

var svg;
    
lines = [[0,1],[1,2],[2,3],[0,3],[0,4],[1,5],[2,6],[3,7],[4,7],[4,5],[5,6],[6,7]];
points = [{"x": 0, "y": 0, "z": 0},{"x": 0, "y": 200, "z": 0},{"x": 200, "y": 200, "z": 0},{"x": 200, "y": 0, "z": 0},
          {"x": 0, "y": 0, "z": 200},{"x": 0, "y": 200, "z": 200},{"x": 200, "y": 200, "z": 200},{"x": 200, "y": 0, "z": 200}];
    
function insert()
{
var myDiv = document.getElementById('MyCanvas');
myDiv.addEventListener('click', change, false);
var canvas = d3.select("#MyCanvas");

svg = canvas.append("svg")
      .attr("width", 600)
      .attr("height", 500)
      .style("fill", "gray");


var line = svg.selectAll("line")
    .data(lines);
  
    line.enter().append("line")
      .attr("x1", function(d,i) { return points[d[i,0]].x + xOffset; })
      .attr("y1", function(d,i) { return points[d[i,0]].y + yOffset; })
      .attr("x2", function(d,i) { return points[d[i,1]].x + xOffset; })
      .attr("y2", function(d,i) { return points[d[i,1]].y + yOffset; })
      .attr("class", "cube")
      .attr("stroke-width", 1)
      .attr("stroke", "red");   
     
    
//Axes    
var xAx = svg.append("line")
     .attr("x1", 0)
     .attr("y1", 0)
     .attr("x2", 500)
     .attr("y2", 0) 
     .attr("stroke-width", 2)
     .attr("stroke", "black");    
    
var yAx = svg.append("line")
     .attr("x1", 0)
     .attr("y1", 0)
     .attr("x2", 0)
     .attr("y2", 5000) 
     .attr("stroke-width", 2)
     .attr("stroke", "black");    
    
var xCentreAx = svg.append("line")
     .attr("x1", xOffset+xCentre)
     .attr("y1", 0)
     .attr("x2", xOffset+xCentre)
     .attr("y2", 500) 
     .attr("stroke-width", 1)
     .attr("stroke", "gray")
     .style("stroke-dasharray", ("3, 3"));    

var yCentreAx = svg.append("line")
     .attr("x1", 0)
     .attr("y1", yOffset+yCentre)
     .attr("x2", 500)
     .attr("y2", yOffset+xCentre) 
     .attr("stroke-width", 1)
     .attr("stroke", "gray")   
     .style("stroke-dasharray", ("3, 3"));    
   
}

function change()
{
    Phi = Phi + Math.PI/8;
    for(var i=0; i<points.length; i++)
    {
        var x = points[i].x - xCentre;
        var z = points[i].z - zCentre;
        var d = Math.sqrt(x*x + z*z);
        var theta  = Math.atan2(x, z) + Math.PI/16;
        points[i].x = d * Math.sin(theta) + xCentre;
        points[i].z = d * Math.cos(theta) + zCentre;
    }

    for(var i=0; i<points.length; i++)
    {
        var y = points[i].y - yCentre;
        var z = points[i].z - zCentre;
        var d = Math.sqrt(y*y + z*z);
        var theta  = Math.atan2(y, z) + Math.PI/16;
        points[i].y = d * Math.sin(theta) + yCentre;
        points[i].z = d * Math.cos(theta) + zCentre;
    }

    
    
    var line = svg.selectAll("line.cube")
    .data(lines);
  
    line
      .attr("x1", function(d,i) { return points[d[i,0]].x + xOffset; })
      .attr("x2", function(d,i) { return points[d[i,1]].x + xOffset; })
      .attr("y1", function(d,i) { return points[d[i,0]].y + yOffset; })
      .attr("y2", function(d,i) { return points[d[i,1]].y + yOffset; })
    
}

window.onload = insert;

