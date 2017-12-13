const helpers = {};

helpers.load_main_data = function (keys, data, sub_paths, years, curves, infos, sub_infos) {

        let iKey = 0;
        keys.forEach(function (key) {
            let tmp_arr = [];
            for (let iRow = 0; iRow < data.length; iRow++) {
                if (key === 'Year') {
                    years[iRow] = data[iRow][key]
                } else {
                    tmp_arr[iRow] = +(data[iRow][key])
                }
            }
            if (key !== 'Year') {
                curves[iKey] = (new Curve(key, tmp_arr.slice(), DATA_FOLDER + sub_paths[iKey], sub_graph_svg,
                    graph_svg, COLORS[iKey], infos[1][key], infos[0][key], sub_infos[iKey]));
                iKey++;
            }
        });

};

helpers.load_sub_data = function (keys, data, sub_paths, years, sub_curves, infos) {
    let iKey = 0;
    let max = 0;
    keys.forEach(function (key) {
        let tmp_arr = [];
        for (let iRow = 0; iRow < data.length; iRow++) {
            let val = data[iRow][key];
            if (key === 'Year') {
                years[iRow] = val
            } else {
                tmp_arr[iRow] = +(val);
                if (+val > max) {
                    max = val;
                }
            }
        }
        if (key !== 'Year') {
            sub_curves[iKey] = (new SubCurve(key, tmp_arr.slice(), DATA_FOLDER + sub_paths[iKey], sub_graph_svg,
                graph_svg, SUB_COLORS[iKey], infos[1][key], infos[0][key]));
            iKey++;
        }
    });
    return max;
};

helpers.line = function (scale_x, scale_y, key, first_year) {
    return d3.line()
        .x(function (d, i) {
            return +sub_cst.vb_graph_axis_x + scale_x(i + +first_year);
        })
        .y(function (d, i) {
            return scale_y(d) + sub_cst.vb_graph_axis_vert_y;
        });
};