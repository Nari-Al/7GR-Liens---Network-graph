document.addEventListener("DOMContentLoaded", function () {
    const csvUrlNodes = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT71NYKGc4-K1qqjVBT5VsrcWRw2FGN8TTKed2Ajwzx6pYqiRneZQpwBoZ9kua1Ec-_EQEPxQ5rg6pG/pub?gid=0&single=true&output=csv';
    const csvUrlLinks = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT71NYKGc4-K1qqjVBT5VsrcWRw2FGN8TTKed2Ajwzx6pYqiRneZQpwBoZ9kua1Ec-_EQEPxQ5rg6pG/pub?gid=1595531840&single=true&output=csv';

    function csvToJSON(csv) {
        const lines = csv.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',').map(header => header.trim());
        const result = [];

        for (let i = 1; i < lines.length; i++) {
            const currentline = lines[i].split(',');
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j]?.trim() || '';
            }
            result.push(obj);
        }
        return result;
    }

    Promise.all([
        fetch(csvUrlNodes).then(response => {
            if (!response.ok) throw new Error('Failed to fetch nodes CSV');
            return response.text();
        }),
        fetch(csvUrlLinks).then(response => {
            if (!response.ok) throw new Error('Failed to fetch links CSV');
            return response.text();
        })
    ])
        .then(([nodesCsv, linksCsv]) => {
            const nodes = csvToJSON(nodesCsv);
            const links = csvToJSON(linksCsv);
            renderGraph(nodes, links);
        })
        .catch(error => console.error('Error fetching Google Sheet data:', error));

    function renderGraph(nodes, links) {
        const graph = { nodes, links };

        const nodeBaseOpacity = 0.6;
        const linkBaseOpacity = 0.2;

        const nodeDegrees = {};
        links.forEach(link => {
            nodeDegrees[link.source] = (nodeDegrees[link.source] || 0) + 0.5;
            nodeDegrees[link.target] = (nodeDegrees[link.target] || 0) + 0.5;
        });

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
            .attr("fill", "#333333");

        const colorPalette = {
            1: "#57B9A0", 2: "#E85968", 3: "#52ACCC", 4: "#E7A54A",
            5: "#9C84D8", 6: "#82B34D", 7: "#D477AB", 8: "#E97058",
        };

        const color = d3.scaleOrdinal()
            .domain(Object.keys(colorPalette))
            .range(Object.values(colorPalette));

        const simulation = d3.forceSimulation(graph.nodes)
            .force("link", d3.forceLink(graph.links).id(d => d.id).distance(200))
            .force("charge", d3.forceManyBody().strength(-200))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(d => 5 + d.degree * 2));

        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("class", "link")
            .attr("stroke-width", d => Math.max(Math.sqrt(d.weight), 4))
            .attr("stroke", "#dbdbdb")
            .attr("stroke-opacity", linkBaseOpacity)
            .on("mouseover", function (event, d) {
                d3.select(this)
                    .transition().duration(600)
                    .attr("stroke-opacity", 1)
                    .attr("stroke", linkColor(d.type));
            })
            .on("mouseout", function () {
                d3.select(this)
                    .transition().duration(600)
                    .attr("stroke-opacity", linkBaseOpacity)
                    .attr("stroke", "#dbdbdb");
            });

        const nodeGroup = svg.append("g")
            .attr("class", "nodes")
            .selectAll("a")
            .data(graph.nodes)
            .enter().append("a")
            .attr("href", d => d.url)
            .attr("target", "_blank");

        const node = nodeGroup.append("circle")
            .attr("class", "node")
            .attr("r", d => 5 + d.degree * 2)
            .attr("fill", d => color(d.group))
            .attr("fill-opacity", nodeBaseOpacity)
            .call(drag(simulation))
            .on("mouseover", highlight)
            .on("mouseout", unhighlight);

        const labels = svg.append("g")
            .attr("class", "labels")
            .selectAll("text")
            .data(graph.nodes)
            .enter().append("text")
            .attr("class", "label")
            .attr("dy", -10)
            .attr("dx", -20)
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
                .attr("y", d => d.y - 10);
        });

        function drag(simulation) {
            return d3.drag()
                .on("start", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                });
        }

        function linkColor(type) {
            const colorMap = {
                "Amour": "#D92062", "Amitié": "#3D8113", "Connaissance Positive": "#20D9C3",
                "Connaissance Neutre": "#2096D9", "Connaissance Négative": "#5020D9",
                "Ennemi": "#B22727", "Némésis": "#000000", "Famille": "#D9A520",
                "Rival": "#862ACE", "Compliqué": "#D96E20"
            };
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
            d3.selectAll(".link").transition().duration(200).attr("stroke-opacity", linkBaseOpacity).attr("stroke", "#dbdbdb");
            d3.selectAll(".label").transition().duration(200).attr("opacity", 1);
            d3.select(this).transition().duration(200).attr("fill-opacity", nodeBaseOpacity);
        }
    }

    // Info panel toggle remains the same
    const infoHeader = document.getElementById("infoHeader");
    const infoContent = document.getElementById("infoContent");
    const infoPanel = document.getElementById("infoPanel");

    infoHeader.addEventListener("click", () => {
        infoContent.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
        if (!infoPanel.contains(event.target)) {
            infoContent.classList.remove("open");
        }
    });

});
