document.addEventListener("DOMContentLoaded", function() {
  let nodes;
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT71NYKGc4-K1qqjVBT5VsrcWRw2FGN8TTKed2Ajwzx6pYqiRneZQpwBoZ9kua1Ec-_EQEPxQ5rg6pG/pub?gid=0&single=true&output=csv';

  function csvToJSON(csv) {
    const lines = csv.split('\n').filter(line => line.trim() !== '');
    const result = [];
    const headers = lines[0].split(',').map(header => header.trim());
  
    for (let i = 1; i < lines.length; i++) {
      const currentline = lines[i].split(',');
      const obj = {};
  
      for (let j = 0; j < headers.length; j++) {
        if (currentline[j] !== undefined) {
          obj[headers[j]] = currentline[j].trim();
        } else {
          obj[headers[j]] = ''; // or handle missing data in another way
        }
      }
  
      result.push(obj);
    }
  
    return result;
  }

  fetch(csvUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(csvText => {
    const jsonData = csvToJSON(csvText);
    
    nodes = jsonData
    
  })





  let links;
  const csvUrlLinks = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT71NYKGc4-K1qqjVBT5VsrcWRw2FGN8TTKed2Ajwzx6pYqiRneZQpwBoZ9kua1Ec-_EQEPxQ5rg6pG/pub?gid=1595531840&single=true&output=csv';

  fetch(csvUrlLinks)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text();
  })
  .then(csvText => {
    const jsonData = csvToJSON(csvText);
    
    links = jsonData
  })




  
  .then(function() {
    console.log('nodesGS :', nodes); // Use jsonData in your application
    console.log(links)
    
      
      
          const graph = { nodes, links };
    
          const nodeBaseOpacity = 0.5;
          const linkBaseOpacity = 0.2;
      
          // Calculate node degrees
          const nodeDegrees = {};
          links.forEach(link => {
              nodeDegrees[link.source] = (nodeDegrees[link.source] || 0) + 0.5;
              nodeDegrees[link.target] = (nodeDegrees[link.target] || 0) + 0.5;
          });
      
          // Set degree as a property of each node
          nodes.forEach(node => {
              node.degree = nodeDegrees[node.id] || 0;
          });
      
          const width = document.getElementById('network-graph').clientWidth;
          const height = document.getElementById('network-graph').clientHeight;
      
          const svg = d3.select("#network-graph")
              .append("svg")
              .attr("width", width)
              .attr("height", height);
    
          svg.append("rect")
              .attr("width", "100%")
              .attr("height", "100%")
              .attr("fill", "#E6E7E8");
      
          const colorPalette = {
              1: "#57B9A0", // Group 1 color - Al'Malaq
              2: "#E85968", // Group 2 color - Vollheim
              3: "#52ACCC", // Group 3 color - Clara Nocte
              4: "#E7A54A", // Group 4 color - Xing Alda
              5: "#9C84D8", // Group 5 color - Ananda
              6: "#82B34D", // Group 6 color - Arvandor
              7: "#D477AB", // Group 7 color - Nomades
              8: "#E97058", // Group 8 color - Cerah
          };
          
          const color = d3.scaleOrdinal()
              .domain(Object.keys(colorPalette))
              .range(Object.values(colorPalette));
      
          const simulation = d3.forceSimulation(graph.nodes)
              .force("link", d3.forceLink(graph.links).id(d => d.id).distance(200))
              .force("charge", d3.forceManyBody().strength(-200))
              .force("center", d3.forceCenter(width / 2, height / 2))
              .force("collision", d3.forceCollide().radius(d => 5 + d.degree * 2)); // Add collision detection
      
    
      
          const link = svg.append("g")
              .attr("class", "links")
              .selectAll("line")
              .data(graph.links)
              .enter().append("line")
              .attr("class", "link")
              .attr("stroke-width", d => Math.max(Math.sqrt(d.weight), 4)) // Minimum stroke width of 2
              .attr("stroke", "#999") // Default color
              .attr("stroke-opacity", linkBaseOpacity)
              .on("mouseover", function(event, d) {
                  d3.select(this)
                  .transition()
                  .duration(600)
                  .attr("stroke-opacity", 1)
                  .attr("stroke", linkColor(d.type)); // Change color on hover
              })
              .on("mouseout", function(event, d) {
                  d3.select(this)
                  .transition()
                  .duration(600)
                  .attr("stroke-opacity", linkBaseOpacity)
                  .attr("stroke", "#999"); // Revert color on mouseout
              });
      
          // Create anchor tags for nodes
          const nodeGroup = svg.append("g")
              .attr("class", "nodes")
              .selectAll("a")
              .data(graph.nodes)
              .enter().append("a")
              .attr("href", d => d.url)
              .attr("target", "_blank");
      
          // Append circles to the anchor tags
          const node = nodeGroup.append("circle")
              .attr("class", "node")
              .attr("r", d => 5 + d.degree * 2) // Radius based on degree
              .attr("fill", d => color(d.group)) // Set the color based on the group
              .attr("fill-opacity", nodeBaseOpacity)
              .call(drag(simulation))
              .on("mouseover", highlight)
              .on("mouseout", unhighlight);
      
          // Append text labels to the nodes
          const labels = svg.append("g")
              .attr("class", "labels")
              .selectAll("text")
              .data(graph.nodes)
              .enter().append("text")
              .attr("class", "label")
              .attr("x", d => d.x)
              .attr("y", d => d.y)
              .attr("dy", -10)  // Offset to position the label above the node
              .attr("dx", -20)  // Offset to position the label above the node
              .text(d => d.label);
      
          simulation.on("tick", () => {
              link
                  .attr("x1", d => d.source.x)
                  .attr("y1", d => d.source.y)
                  .attr("x2", d => d.target.x)
                  .attr("y2", d => d.target.y);
      
              node
                  .attr("cx", d => d.x)
                  .attr("cy", d => d.y);
      
              labels
                  .attr("x", d => d.x)
                  .attr("y", d => d.y - 10);  // Keep the offset to position the label above the node
          });
    
          function drag(simulation) {
              function dragstarted(event, d) {
                  if (!event.active) simulation.alphaTarget(0.3).restart();
                  d.fx = d.x;
                  d.fy = d.y;
              }
      
              function dragged(event, d) {
                  d.fx = event.x;
                  d.fy = event.y;
              }
      
              function dragended(event, d) {
                  if (!event.active) simulation.alphaTarget(0);
                  d.fx = null;
                  d.fy = null;
              }
      
              return d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended);
          }
    
    
          function linkColor(type) {
              // Define colors for different link types
              const colorMap = {
                  "Amour": "#D92062",
                  "Amitié": "#3D8113",
                  "Connaissance Positive": "#20D9C3",
                  "Connaissance Neutre": "#2096D9",
                  "Connaissance Négative": "#5020D9",
                  "Ennemi": "#B22727",
                  "Némésis": "#000000",
                  "Famille": "#D9A520",
                  "Rival": "#862ACE",
                  "Compliqué": "#D96E20"
              }
                ;
              return colorMap[type] || "gray";
          }
    
    
          function highlight(event, d) {
            d3.selectAll(".node").transition().duration(200).attr("fill-opacity", 0.2);
            d3.selectAll(".link").transition().duration(200).attr("stroke-opacity", 0.2);
            d3.selectAll(".label").transition().duration(200).attr("opacity", 0.2);
        
            d3.select(this).transition().duration(200).attr("fill-opacity", 1);
        
            link.filter(l => l.source === d || l.target === d)
                .transition().duration(200)
                .attr("stroke-opacity", 0.4)
                .attr("stroke", l => linkColor(l.type));
        
            node.filter(n => graph.links.some(l => (l.source === d && l.target === n) || (l.target === d && l.source === n)))
                .transition().duration(200)
                .attr("fill-opacity", 0.8);
    
            labels.filter(n => n.id === d.id || graph.links.some(l => (l.source.id === d.id && l.target.id === n.id) || (l.target.id === d.id && l.source.id === n.id)))
                .transition().duration(200)
                .attr("opacity", 1);
            
        }
        
        function unhighlight() {
            d3.selectAll(".node").transition().duration(200).attr("fill-opacity", nodeBaseOpacity);
            d3.selectAll(".link").transition().duration(200).attr("stroke-opacity", linkBaseOpacity).attr("stroke", "#999");
            d3.selectAll(".label").transition().duration(200).attr("opacity", 1);
            d3.select(this).transition().duration(200).attr("fill-opacity", nodeBaseOpacity);
        }
  })
  .catch(error => console.error('Error fetching the Google Sheet data:', error));


  











  });

  document.addEventListener("DOMContentLoaded", () => {
    const infoHeader = document.getElementById("infoHeader");
    const infoContent = document.getElementById("infoContent");
    const infoPanel = document.getElementById("infoPanel");

    // Toggle panel open/close on header click
    infoHeader.addEventListener("click", () => {
        infoContent.style.display = infoContent.style.display === "block" ? "none" : "block";
    });

    // Close the panel when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!infoPanel.contains(event.target) && infoContent.style.display === "block") {
            infoContent.style.display = "none";
        }
    });
});
