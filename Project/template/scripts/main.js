'use strict';

graph_svg.append("rect")
    .style("width", 100 + "%")
    .style("height", 100 + "%");

sub_graph_svg.append("rect")
    .style("width", 100 + "%")
    .style("height", 100 + "%");


d3.csv("../data/final_data_perc.csv", function (data) {
    console.log(data)
});