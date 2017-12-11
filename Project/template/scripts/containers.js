
let root = d3.select("#root")
    .style("height", 100 - 2*margins.root + "%")
    .style("width", 100 - 2*margins.root + "%")
    .style("left", margins.root + "%")
    .style("top", margins.root + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");
    //.style("overflow", "hidden");

let left = root.append("div")
    .attr("id", "left")
    .style("height", sub_cst.left_height + "%")
    .style("left", 0)
    .style("top", margins.inner + cst.checkbox_height + "%")
    .style("width", cst.left_width + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block")
    .attr("class", "no_pointer_event");

let graph_svg = left.append("svg")
    .attr("id", "graph")
    .style("height", cst.graph_height + "%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block")
    .attr("viewBox", "0 0 600 400")
    .attr("preserveAspectRatio", "none")
    .attr("pointer-events", "auto");

let sub_graph_svg = left.append("svg")
    .attr("id", "sub_graph")
    .style("top", sub_cst.sub_graph_y + "%")
    .style("height", sub_cst.sub_graph_height + "%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block")
    .attr("viewBox", "0 0 600 400")
    .attr("preserveAspectRatio", "none")
    .attr("pointer-events", "auto");

let right = root.append("div")
    .attr("id","right")
    .style("left", sub_cst.right_x + "%")
    .style("height", 100 + "%")
    .style("width", 100 - cst.left_width - margins.inner + "%")
    .style("float", "left")
    .style("position", "absolute")
    .style("display", "inline-block");

let picture = right.append("div")
    .attr("id", "picture")
    .style("height", cst.picture_height +"%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "relative")
    .attr("viewBox", "0 0 58 50")
    .attr("preserveAspectRatio", "none")
    .style("display", "inline-block");

let description = right.append("div")
    .attr("id", "descr")
    .style("left", 0)
    .style("text-align", "justified")
    .style("top", margins.inner + "%")
    .style("height", 100 - cst.picture_height +"%")
    .style("width", 100 + "%")
    .style("float", "left")
    .style("position", "relative")
    .style("display", "inline-block")
    .style("overflow-y", "scroll");

document.documentElement.style.overflow = 'hidden';
let checkbox = d3.select("#checkboxes")
    .style("width", cst.left_width + "%")
    .style("height", cst.checkbox_height + "%")
    .style("display", "inline-block")
;

let sub_checkbox = d3.select("#sub_checkboxes")
    .style("width", cst.left_width + "%")
    .style("height", cst.sub_checkbox_height + "%")
    .style("top", sub_cst.sub_checkbox_y + "%")
    .style("position", "absolute")
    .style("display", "inline-block")
    .style("left", 0)
;