const helpers = {};


/*
* Coal in % // Combustibles nucléaires in % // Crude oil and petroleum products in %
* Electricity, balance import / export in % // Gas in % // Hydraulic force in %
* Industrial waste and scrap in % // Other renewable energies in %
* Wood and charcoal in % // Year
*/
helpers.load_main_data = function(keys, data, sub_paths, years, curves, colors){
    let iKey = 0;
    keys.forEach(function(key){
        let tmp_arr = [];
        for(let iRow = 0; iRow < data.length; iRow++){
            if(key === 'Year'){
                years[iRow] = data[iRow][key]
            }else{
                tmp_arr[iRow] = +(data[iRow][key])
            }
        }
        if(key !== 'Year'){
            curves[iKey] = (new Curve(key, tmp_arr.slice(),DATA_FOLDER + sub_paths[iKey], sub_graph_svg,
                graph_svg, colors[iKey]));
            iKey ++;
        }
    });
};

helpers.line = function(scale_x, scale_y, key, first_year){
    return d3.line()
        .x(function(d, i) { return + sub_cst.vb_graph_axis_x + scale_x(i + +first_year); })
        .y(function(d, i) { return scale_y(d) + sub_cst.vb_graph_axis_vert_y; });
};