const cst = {
    graph_width: 60,
    graph_height: 55,
    picture_height: 50
};

const margins = {
    root: 2,
    inner: 1
};

const sub_cst = {
    sub_graph_width: cst.graph_width,
    sub_graph_height: 100 - cst.graph_height - margins.inner,
    right_x: cst.graph_width + margins.inner,
    sub_graph_y: cst.graph_height + margins.inner,
    dscr_y: cst.picture_height + margins.inner,
    dscr_height: 100 - cst.picture_height - margins.inner
};
