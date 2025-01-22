// assets/js/graph.js
document.addEventListener("DOMContentLoaded", function () {
  const container = d3.select("#graph-container");
  const width = container.node().getBoundingClientRect().width;
  const height = container.node().getBoundingClientRect().height || 500; // Default height

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .call(
      d3
        .zoom()
        .scaleExtent([1 / 2, 8])
        .on("zoom", zoomed)
    ) // Set zoom limits
    .append("g");

  function zoomed(event) {
    svg.attr("transform", event.transform);
  }

  d3.json(window.graphDataEndpoint)
    .then(function (graph) {
      // --- Force Simulation ---
      const simulation = d3
        .forceSimulation(graph.nodes)
        .force(
          "link",
          d3
            .forceLink(graph.links)
            .id((d) => d.id)
            .distance(100)
        ) // Increase link distance
        .force("charge", d3.forceManyBody().strength(-50)) // Weaken charge strength
        .force("center", d3.forceCenter(width / 2, height / 2));
      // --- Create Links ---
      const link = svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(graph.links)
        .join("line")
        .attr("stroke-width", 2);
      // --- Arrowheads ---
      svg
        .append("defs")
        .selectAll("marker")
        .data(["arrowhead"])
        .enter()
        .append("marker")
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15) // Adjust arrowhead position
        .attr("refY", 0)

        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "#999");

      link.attr("marker-end", "url(#arrowhead)");

      // --- Create Nodes ---
      const node = svg
        .append("g")
        .selectAll("a")
        .data(graph.nodes)
        .join("a")
        .attr("xlink:href", (d) => d.id)
        .call(
          d3
            .drag()

            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

      node
        .append("circle")
        .attr("r", (d) => d.count * 2 + 5) // Reduce node size
        .attr("fill", (d) => {
          if (d.section === "notes") return "#5588aa";
          if (d.section === "posts") return "#aadd88";
          return "#ccc";
        });

      // --- Add Labels ---
      const label = node
        .append("text") // Append text to the "a" element
        .text((d) => d.title)
        .attr("font-size", "10px") // Make labels smaller
        .attr("x", 0)
        .attr("y", 0) // Position labels above the node
        .attr("text-anchor", "middle"); // Center align labels

      // --- Simulation Tick ---
      simulation.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("transform", (d) => `translate(${d.x}, ${d.y})`); // Position the "a" element
      });

      // --- Drag Functions ---
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
    })
    .catch(function (error) {
      console.error("Error fetching or parsing JSON:", error);
    });
});
