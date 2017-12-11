const axis = {};

axis.init_scale = function(range){
    return d3.scaleLinear()
        .range(range);
};
axis.init_axis_hor = function(scale){
    return d3.axisBottom()
        .scale(scale)
        .tickFormat(d3.format("d"));
};
axis.init_axis_vert = function(scale){
    return d3.axisLeft()
        .scale(scale)
        .tickFormat(d3.format("d"));
};
axis.init_ref = function(x, y, svg){
    return svg.append("g")
        .style("font", "14px Verdana")
        .attr("transform", "translate(" + +(x) + "," + +(y) + ")")
        .attr("class", "axis unfocusable no_pointer_event");
};

axis.year_scale = axis.init_scale([0, sub_cst.vb_graph_width]);
axis.year_axis = axis.init_axis_hor(axis.year_scale);
axis.year_ref = axis.init_ref(sub_cst.vb_graph_axis_x,  sub_cst.vb_graph_axis_hor_y, graph_svg);

axis.y_scale = axis.init_scale([0, sub_cst.vb_graph_height]);
axis.y_axis = axis.init_axis_vert(axis.y_scale);
axis.y_ref = axis.init_ref(sub_cst.vb_graph_axis_x, sub_cst.vb_graph_axis_vert_y, graph_svg);

axis.sub_year_scale = axis.init_scale([0, sub_cst.vb_graph_width]);
axis.sub_year_axis = axis.init_axis_hor(axis.sub_year_scale);
axis.sub_year_ref = axis.init_ref(sub_cst.vb_graph_axis_x, sub_cst.vb_graph_axis_hor_y, sub_graph_svg);

axis.sub_y_scale = axis.init_scale([0, sub_cst.vb_graph_height]);
axis.sub_y_axis = axis.init_axis_vert(axis.sub_y_scale);
axis.sub_y_ref = axis.init_ref(sub_cst.vb_graph_axis_x, sub_cst.vb_graph_axis_vert_y, sub_graph_svg);


