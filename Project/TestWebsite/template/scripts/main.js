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

const sub_infos = [
    'nucl_img_text.csv',
    'nucl_img_text.csv',
    'nucl_img_text.csv',
    'nucl_img_text.csv',
    'nucl_img_text.csv',
    'nucl_img_text.csv',
    'nucl_img_text.csv',
    'nucl_img_text.csv'
];

const MAIN_INFO = DATA_FOLDER + 'data_info.csv';

d3.csv(DATA_FOLDER + "final_data_perc.csv", function (data) {
    d3.csv(MAIN_INFO, function (infos) {
        let keys = d3.keys(data[0]);
        let years = [];
        let curves = [];

        helpers.load_main_data(keys, data, sub_paths, years, curves, infos, sub_infos);
        console.log("years", years);
        const first_year = years[0];
        const last_year = years[years.length - 1];

        axis.year_scale.domain([first_year, last_year]);
        axis.year_ref.call(axis.year_axis);

        console.log("years[0]", years);
        axis.y_scale.domain([100, 0]);
        axis.y_ref.call(axis.y_axis);

        for (let i = 0; i < curves.length; i++) {
            curves[i].draw(helpers.line(axis.year_scale, axis.y_scale, keys[i], first_year), graph_svg);
            curves[i].add_checkbox();
        }

        console.log("year", years);
        console.log("main_curves", curves)

    });

});
