const cst = {
    left_width: 60,
    graph_height: 45,
    picture_height: 30,
    vb_width: 600,
    vb_height: 400,
    checkbox_height: 10,
    sub_checkbox_height: 4,
};

const margins = {
    root: 2,
    inner: 2,
    graph_left: 15,
    graph_bottom: 7
};

const sub_cst = {
    left_height: 100 - cst.checkbox_height - margins.inner,
    sub_graph_height: 100 - cst.graph_height - cst.sub_checkbox_height - 2*margins.inner,
    right_x: cst.left_width,
    sub_graph_y: cst.graph_height + cst.sub_checkbox_height+ 2*margins.inner,
    dscr_y: cst.picture_height + margins.inner,
    dscr_height: 100 - cst.picture_height - margins.inner,
    vb_graph_axis_x: margins.graph_left*cst.vb_width/100,
    vb_graph_axis_hor_y: (100 - margins.graph_bottom)*cst.vb_height/100,
    vb_graph_axis_vert_y: margins.inner*cst.vb_height/100,
    vb_graph_width: (100 - margins.inner - margins.graph_left - 4)*cst.vb_width/100,
    vb_graph_height: (100 - margins.inner - margins.graph_bottom)*cst.vb_height/100,
    sub_checkbox_y: cst.graph_height +  4*margins.inner
};

const COLORS = ["#795548","#7293cb","#d35e60","#4c4844","#000000","#6af275","#e0d618","#3e9651"];
const SUB_COLORS = ["#396ab1", "#da7c30", "#3e9651", "#535154", "#922428", "#958a3d"];

const DATA_FOLDER = "../data/";
