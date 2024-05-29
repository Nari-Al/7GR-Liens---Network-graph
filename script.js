const links = [
    {
      type: "Connaissance Positive",
      source: "1",
      target: "7",
      weight: "1"
    },
    {
      type: "Connaissance Négative",
      source: "1",
      target: "8",
      weight: "1"
    },
    {
      type: "Connaissance Neutre",
      source: "1",
      target: "28",
      weight: "1"
    },
    {
      type: "Connaissance Neutre",
      source: "1",
      target: "36",
      weight: "1"
    },
    {
      type: "Connaissance Neutre",
      source: "1",
      target: "46",
      weight: "1"
    },
    {
      type: "Connaissance Neutre",
      source: "7",
      target: "1",
      weight: "1"
    },
    {
      type: "Connaissance Positive",
      source: "7",
      target: "8",
      weight: "1"
    },
    {
      type: "Connaissance Positive",
      source: "7",
      target: "3",
      weight: "1"
    },
    {
      type: "Connaissance Positive",
      source: "7",
      target: "47",
      weight: "1"
    },
    {
      type: "Connaissance Neutre",
      source: "7",
      target: "20",
      weight: "1"
    },
    {
      type: "Connaissance Neutre",
      source: "7",
      target: "33",
      weight: "1"
    }
  ];

  const nodes = [
    {
    id: "1",
    label: "Arderus",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t536-ce-qui-se-passe-quand-o"
    },
    {
    id: "2",
    label: "Arie",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t1097-masque-parmi-les-masqu"
    },
    {
    id: "3",
    label: "Daras",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t735-vivre-pour-l-empire-mou"
    },
    {
    id: "4",
    label: "Eurydice",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t855-eurydice-sil-solun-gran"
    },
    {
    id: "5",
    label: "Farah",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t1174-ne-tirez-pas-sur-le-messager"
    },
    {
    id: "6",
    label: "Gabriel",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t1118-l#9123"
    },
    {
    id: "7",
    label: "Hakys",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t471-hakys-okean-protecteur-"
    },
    {
    id: "8",
    label: "Ioannes",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t706-le-temps-est-une-ressource-qui-nous-fait-defaut-profitez-donc-de-celui-dont-je-vous-fais-don-silebor-en-cours"
    },
    {
    id: "9",
    label: "Kang-Dae",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t371-underclass-hero#1791"
    },
    {
    id: "10",
    label: "Laphe",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t837-l-harmonie-des-elements"
    },
    {
    id: "11",
    label: "Lundell",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t1040-lundell-la-charite-n-e"
    },
    {
    id: "12",
    label: "Naïade",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t870-i-m-the-antidote-to-eve"
    },
    {
    id: "13",
    label: "Saren",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t700-uc-let-me-wrap-my-teeth"
    },
    {
    id: "14",
    label: "Severin",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t1112-do-it-to-stay-alive-o-"
    },
    {
    id: "15",
    label: "Tahar",
    group: "Al'Malaq",
    url: "https://7goldenrings.forumactif.com/t637-tahar-le-cavalier-du-de"
    },
    {
    id: "16",
    label: "Blair",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t313-shine-razor-eyes-before"
    },
    {
    id: "17",
    label: "Hròdrig",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t498-son-you-d-better-wait-t"
    },
    {
    id: "18",
    label: "Lilienthal",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t480-iron-maiden#2534"
    },
    {
    id: "19",
    label: "Macha",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t1077-la-douceur-de-vollheim"
    },
    {
    id: "20",
    label: "Sigrun",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t189-the-roar-of-the-iron-fi"
    },
    {
    id: "21",
    label: "Ulrik",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t504-i-won-t-ever-ever-fall-"
    },
    {
    id: "22",
    label: "Vekhia",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t677-damned-runesmith#4305"
    },
    {
    id: "23",
    label: "Víkka",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t1193-the-golden-one-with-th"
    },
    {
    id: "24",
    label: "Visenya",
    group: "Vollheim",
    url: "https://7goldenrings.forumactif.com/t61-blood-code#136"
    },
    {
    id: "25",
    label: "Amadeus",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t1173-walking-around-in-fear"
    },
    {
    id: "26",
    label: "Vaël",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t347-real-darkness-has-love-"
    },
    {
    id: "27",
    label: "Vesper",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t173-c-est-trop-bon-la-brioc"
    },
    {
    id: "28",
    label: "Aurelia",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t53-yeah-i-seduce-with-my-lo"
    },
    {
    id: "29",
    label: "Calignis",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t80-les-mains-qui-creent-ne-"
    },
    {
    id: "30",
    label: "Dan",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t1041-dan-gray-le-survivant-"
    },
    {
    id: "31",
    label: "Eléonora",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t1153-i-m-not-stressed-you-re-stressed-gimme-your-coffe"
    },
    {
    id: "32",
    label: "Elior",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t1185-gloria-regali-elior-vi"
    },
    {
    id: "33",
    label: "Lise",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t210-keep-my-dolls-inside-di"
    },
    {
    id: "34",
    label: "Lugal",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t1061-doigts-de-fee-et-gants"
    },
    {
    id: "35",
    label: "Lyra",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t978-toujours-seconde"
    },
    {
    id: "36",
    label: "Nora",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t67-se-laisser-porter-par-le"
    },
    {
    id: "37",
    label: "Selae",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t795-selae-lame-brulante-de-"
    },
    {
    id: "38",
    label: "Sibyl",
    group: "Clara Nocte",
    url: "https://7goldenrings.forumactif.com/t763-do-you-really-wanna-fal"
    },
    {
    id: "39",
    label: "Heng",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t1027-compagnons-des-mauvais"
    },
    {
    id: "40",
    label: "Jay",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t991-je-mourrais-en-marchant"
    },
    {
    id: "41",
    label: "Jun",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t903-jun-tisseuse-du-destin"
    },
    {
    id: "42",
    label: "Lixian",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t998-introverted-war"
    },
    {
    id: "43",
    label: "Lune",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t853-howling-at-the-moon-o-l"
    },
    {
    id: "44",
    label: "Luyên",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t324-le-courroux-du-renard-l"
    },
    {
    id: "45",
    label: "Shun",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t1152-instinct-shun-xia"
    },
    {
    id: "46",
    label: "Weiyan",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t831-#5964"
    },
    {
    id: "47",
    label: "Xu",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t474-when-the-world-is-your-"
    },
    {
    id: "48",
    label: "Yunhua",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t899-effacer-le-gris-que-le-"
    },
    {
    id: "49",
    label: "Yunmei",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t666-what-if-we-rewrite-the-"
    },
    {
    id: "50",
    label: "Zéi",
    group: "Xing Alda",
    url: "https://7goldenrings.forumactif.com/t754-catch-me-if-you-can"
    },
    {
    id: "51",
    label: "Jofrta",
    group: "Ananda",
    url: "https://7goldenrings.forumactif.com/t54-control-control-awakenin"
    },
    {
    id: "52",
    label: "Kaleb",
    group: "Ananda",
    url: "https://7goldenrings.forumactif.com/t1046-let-me-be-your-secret-"
    },
    {
    id: "53",
    label: "Kethry",
    group: "Ananda",
    url: "https://7goldenrings.forumactif.com/t372-jeux-de-main-jeux-d-apr"
    },
    {
    id: "54",
    label: "Mr Hallowyn",
    group: "Ananda",
    url: "https://7goldenrings.forumactif.com/t1110-le-code-des-gentlemen#"
    },
    {
    id: "55",
    label: "Órfhlaith",
    group: "Ananda",
    url: "https://7goldenrings.forumactif.com/t1210-je-suis-ce-que-tu-veux-pas-ce-dont-tu-as-besoin"
    },
    {
    id: "56",
    label: "Raja",
    group: "Ananda",
    url: "https://7goldenrings.forumactif.com/t45-et-pour-quelques-liges-d"
    },
    {
    id: "57",
    label: "Eudine",
    group: "Cerah",
    url: "https://7goldenrings.forumactif.com/t956-un-jour-je-te-retrouver"
    },
    {
    id: "58",
    label: "Evane",
    group: "Cerah",
    url: "https://7goldenrings.forumactif.com/t609-yours-is-a-long-road-my"
    },
    {
    id: "59",
    label: "Heather",
    group: "Cerah",
    url: "https://7goldenrings.forumactif.com/t1194-etre-different-ce-n-es"
    },
    {
    id: "60",
    label: "Ilyès",
    group: "Cerah",
    url: "https://7goldenrings.forumactif.com/t722-peau-d-homme#4899"
    },
    {
    id: "61",
    label: "Nemus",
    group: "Cerah",
    url: "https://7goldenrings.forumactif.com/t1203-nemus-aspirant-veilleu"
    },
    {
    id: "62",
    label: "Solmari",
    group: "Cerah",
    url: "https://7goldenrings.forumactif.com/t1240-se-noyer-dans-l-autre-"
    },
    {
    id: "63",
    label: "Albirrhoé",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t242-meeeooow"
    },
    {
    id: "64",
    label: "Benhart",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t624-je-suis-plus-libre-que-"
    },
    {
    id: "65",
    label: "Hadrian",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t1135-secret-garden"
    },
    {
    id: "66",
    label: "Huan",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t937-"
    },
    {
    id: "67",
    label: "Isolde",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t950-les-reves-sont-sur-une-force-ou-une-faiblesse-je-suis-la-pour-soigner"
    },
    {
    id: "68",
    label: "Orion",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t255-all-the-pain-is-underne"
    },
    {
    id: "69",
    label: "Ronan",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t81-somebody-else-might-take"
    },
    {
    id: "70",
    label: "Treag",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t566-je-tape-mais-dis-moi-qu"
    },
    {
    id: "71",
    label: "Yule",
    group: "Nomades",
    url: "https://7goldenrings.forumactif.com/t1179-j-ai-toujours-aime-par"
    },
    {
    id: "72",
    label: "Aedan",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t1054-un-bucheron"
    },
    {
    id: "73",
    label: "Aldwin",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t1206-something-that-seemed-"
    },
    {
    id: "74",
    label: "Algidiade",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t942-nos-reves-et-ceux-de-sa-majeste-ne-font-et-ne-feront-qu-un-algidiade"
    },
    {
    id: "75",
    label: "Caliban",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t1207-lightning-hides-the-co"
    },
    {
    id: "76",
    label: "Clefford",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t1001-clefford-crescendo-art"
    },
    {
    id: "77",
    label: "Croquedoigts",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t1195-croquedoigts-o-sea-and"
    },
    {
    id: "78",
    label: "Harzhan",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t982-the-machine-is-immortal"
    },
    {
    id: "79",
    label: "Hycast",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t983-"
    },
    {
    id: "80",
    label: "Lucis",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t1129-my-living-legacy#9189"
    },
    {
    id: "81",
    label: "Milicent",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t627-i-won-t-cry-for-you"
    },
    {
    id: "82",
    label: "Onyxa",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t575-i-ll-not-stop-until-all"
    },
    {
    id: "83",
    label: "Tarabas",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t749-remember-the-feeling-of"
    },
    {
    id: "84",
    label: "Valérian",
    group: "Arvandor",
    url: "https://7goldenrings.forumactif.com/t939-im-giving-myself-up-to-"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const graph = { nodes, links };

    // Calculate node degrees
    const nodeDegrees = {};
    links.forEach(link => {
        nodeDegrees[link.source] = (nodeDegrees[link.source] || 0) + 1;
        nodeDegrees[link.target] = (nodeDegrees[link.target] || 0) + 1;
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
        .force("link", d3.forceLink(graph.links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-3))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .attr("stroke-width", d => Math.max(Math.sqrt(d.weight), 5)) // Minimum stroke width of 2
        .attr("stroke", "#999") // Default color
        .attr("stroke-opacity", 0.6)
        .on("mouseover", function(event, d) {
            d3.select(this)
            .transition()
            .duration(600)
            .attr("stroke", linkColor(d.type)); // Change color on hover
        })
        .on("mouseout", function(event, d) {
            d3.select(this)
            .transition()
            .duration(600)
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
        .call(drag(simulation));

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
            "Amour": "#c73c51",
            "Amitié": "#9c1030",
            "Connaissance Positive": "#519e9e",
            "Connaissance Neutre": "#3656ad",
            "Connaissance Négative": "#70519e",
            "Ennemi": "#612c27"
          }
          ;
        return colorMap[type] || "gray";
    }
});
