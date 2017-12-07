/*  Class graph
* Takes data and a svg in which to draw
* creates axis for data
* creates path for data
* path are clickable
*
*
* */

class Graph{
    constructor(d, svg){
        this.data = d;
        this.svg = svg;
        this.width = cst.vb_width;
        this.height = cst.vb_height;
    }
}