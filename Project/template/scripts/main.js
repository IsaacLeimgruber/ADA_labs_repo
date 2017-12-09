'use strict';

const sub_paths = [
    "trans_prod_nuc_Ghw.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv",
    "trans_prod_nuc_perc.csv"
];

d3.csv(DATA_FOLDER + "final_data_perc.csv", function (data) {

        let keys = d3.keys(data[0]);
        let years = [];
        let curves = [];

        helpers.load_main_data(keys, data, sub_paths, years, curves);
        const first_year = years[0];
        const last_year = years[years.length - 1];

        axis.year_scale.domain([first_year, last_year]);
        axis.year_ref.call(axis.year_axis);

        axis.y_scale.domain([100, 0]);
        axis.y_ref.call(axis.y_axis);

        for(let i = 0; i < curves.length; i++){
            curves[i].draw(helpers.line(axis.year_scale, axis.y_scale, keys[i], first_year), graph_svg);
            curves[i].add_checkbox();
        }
        //curves[0].draw(helpers.line(axis.year_scale, axis.y_scale, keys[0], first_year));
        //curves[0].add_checkbox();
        console.log(axis.year_scale(+(first_year / 1 + 1)));
        console.log(years);
        console.log(curves)

});
