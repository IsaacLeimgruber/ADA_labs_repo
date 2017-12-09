const axis = {};

axis.year_scale = d3.scaleLinear()
    .range([0, sub_cst.vb_graph_width]);

axis.year_axis = d3.axisBottom()
    .scale(axis.year_scale)
    .tickFormat(d3.format("d"));

axis.year_ref = graph_svg.append("g")
    .style("font", "10px Verdana")
    .attr("transform", "translate(" + sub_cst.vb_graph_axis_x + "," + +(sub_cst.vb_graph_axis_hor_y) + ")")
    .attr("class", "axis unfocusable no_pointer_event");

axis.y_scale = d3.scaleLinear()
    .range([0, sub_cst.vb_graph_height]);

axis.y_axis = d3.axisLeft()
    .scale(axis.y_scale)
    .tickFormat(d3.format("d"));

axis.y_ref = graph_svg.append("g")
    .style("font", "10px Verdana")
    .attr("transform", "translate(" + sub_cst.vb_graph_axis_x + "," + +(sub_cst.vb_graph_axis_vert_y) + ")")
    .attr("class", "axis unfocusable no_pointer_event");

