let root = d3.select("#root")
    .style("height", 100 - 2*margins.root + "%")
    .style("width", 100 - 2*margins.root + "%")
    .style("left", margins.root + "%")
    .style("top", margins.root + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");

let left = root.append("div")
    .attr("id", "left")
    .style("height", 100 + "%")
    .style("width", cst.left_width + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");

let graph_svg = left.append("svg")
    .attr("id", "graph")
    .style("height", cst.graph_height + "%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block")
    .attr("viewBox", "0 0 600 400")
    .attr("preserveAspectRatio", "none");

let sub_graph_svg = left.append("svg")
    .attr("id", "sub_graph")
    .style("top", sub_cst.sub_graph_y + "%")
    .style("height", sub_cst.sub_graph_height + "%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block")
    .attr("viewBox", "0 0 600 400")
    .attr("preserveAspectRatio", "none");

let right = root.append("div")
    .attr("id","right")
    .style("left", sub_cst.right_x + "%")
    .style("height", 100 + "%")
    .style("width", cst.left_width + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");

let picture = right.append("div")
    .attr("id", "picture")
    .style("height", cst.picture_height + "%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");

let description = right.append("div")
    .attr("id", "descr")
    .style("top", sub_cst.dscr_y + "%")
    .style("height", sub_cst.dscr_height + "%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");