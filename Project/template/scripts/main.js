'use strict';

sub_graph_svg.append("rect")
    .style("width", cst.vb_width)
    .style("height", cst.vb_height);


const curves_colors = ["blue", "green", "red"];
const sub_paths = [
    "prod_nuc_Ghw.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv",
    "prod_nuc_perc.csv"
];

d3.csv(DATA_FOLDER + "final_data_perc.csv", function (data) {

        let keys = d3.keys(data[0]);
        let years = [];
        let curves = [];

        helpers.load_main_data(keys, data, sub_paths, years, curves, curves_colors);
        const first_year = years[0];
        const last_year = years[years.length - 1];

        axis.year_scale.domain([first_year, last_year]);
        axis.year_ref.call(axis.year_axis);

        axis.y_scale.domain([100, 0]);
        axis.y_ref.call(axis.y_axis);


        curves[0].draw(helpers.line(axis.year_scale, axis.y_scale, keys[0], first_year));
        curves[0].add_checkbox();
        console.log(axis.year_scale(+(first_year / 1 + 1)));
        console.log(years);
        console.log(curves)

});
