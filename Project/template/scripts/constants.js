const cst = {
    left_width: 60,
    graph_height: 55,
    picture_height: 50,
    vb_width: 600,
    vb_height: 400
};

const margins = {
    root: 2,
    inner: 1
};

const sub_cst = {
    sub_graph_height: 100 - cst.graph_height - margins.inner,
    right_x: cst.left_width + margins.inner,
    sub_graph_y: cst.graph_height + margins.inner,
    dscr_y: cst.picture_height + margins.inner,
    dscr_height: 100 - cst.picture_height - margins.inner

};
