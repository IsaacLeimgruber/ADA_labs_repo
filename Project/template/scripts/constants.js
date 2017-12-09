const cst = {
    left_width: 60,
    graph_height: 55,
    picture_height: 50,
    vb_width: 600,
    vb_height: 400
};

const margins = {
    root: 2,
    inner: 2,
    graph_left: 15,
    graph_bottom: 7
};

const sub_cst = {
    sub_graph_height: 100 - cst.graph_height - margins.inner,
    right_x: cst.left_width + margins.inner,
    sub_graph_y: cst.graph_height + margins.inner,
    dscr_y: cst.picture_height + margins.inner,
    dscr_height: 100 - cst.picture_height - margins.inner,
    vb_graph_axis_x: margins.graph_left*cst.vb_width/100,
    vb_graph_axis_hor_y: (100 - margins.graph_bottom)*cst.vb_height/100,
    vb_graph_axis_vert_y: margins.inner*cst.vb_height/100,
    vb_graph_width: (100 - margins.inner - margins.graph_left)*cst.vb_width/100,
    vb_graph_height: (100 - margins.inner - margins.graph_bottom)*cst.vb_height/100
};

const DATA_FOLDER = "../data/";
