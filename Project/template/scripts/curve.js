/*  Class graph
* takes a svg
* init empty
* append successive pairs of points (x, y)
* creates axis for data
* creates path for data
* path are clickable
*
*
* */

const STROKE = 4;
const STROKE_OVER = 5;

class Curve{
    constructor(key, data, sub_path, sub_svg, svg, color){
        this.id = key;
        this.data = data;
        this.svg = svg;
        this.sub_svg = sub_svg;
        this.sub_path = sub_path;
        this.color = color;
        this.stroke_width = STROKE;
        this.div_checkbox = "checkboxes";
        this.sub_curves = [];
        this.ref = 0;
        this.checkbox = 0;
    }

    draw(line, svg){
        this.ref = svg.append("path")
            .datum(this.data)
            .attr("id", this.id)
            .attr("class", "curve_path")
            .attr("fill", "none")
            .attr("stroke", this.color)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", STROKE)
            .attr("d", line);
        let self = this;
        let dom = document.getElementById(this.id);
        dom.addEventListener("mouseover", function(event) {self.hover(event)});
        dom.addEventListener("mouseout", function(event) {self.out(event)});
        dom.addEventListener("click", function(event) {self.curve_click(event)})
    }

    curve_click(evt){
        sub_graph_svg.selectAll(".curve_path").remove();
        document.getElementById("sub_checkboxes").innerHTML = "";
        d3.csv(this.sub_path, function(data){
            console.log("sub_curves", data);
            let keys = d3.keys(data[0]);
            let years = [];
            let sub_curves = [];
            let max = 0;
            max = helpers.load_sub_data(keys, data, sub_paths, years, sub_curves, max);

            const first_year = years[0];
            const last_year = years[years.length - 1];

            axis.sub_year_scale.domain([first_year, last_year]);
            axis.sub_year_ref.call(axis.sub_year_axis);
            axis.sub_y_scale.domain([max, 0]);
            axis.sub_y_ref.call(axis.sub_y_axis);

            for(let i = 0; i < sub_curves.length; i++){
                sub_curves[i]
                    .draw(helpers.line(axis.sub_year_scale, axis.sub_y_scale, keys[0], first_year), sub_graph_svg);
                sub_curves[i].add_checkbox();
            }

        })
    }
    out(evt){
        this.ref.attr("stroke-width", STROKE)
    }
    hover(evt){
        this.ref.attr("stroke-width", STROKE_OVER)
    }
    checkbox_evt(evt){
        console.log("clicked");
        console.log("check", this.checkbox.clicked);
        if(this.checkbox.checked === true){
            this.ref.attr("stroke-width", STROKE)
        }else{
            this.ref.attr("stroke-width", 0)
        }
    };

    add_checkbox(){
        let label= document.createElement("label");
        let description = document.createTextNode(this.id);
        this.checkbox = document.createElement("input");
        let self = this;
        label.style.color = this.color;
        this.checkbox.type = "checkbox";
        this.checkbox.name = "chbx";
        this.checkbox.id = this.checkbox_id;
        this.checkbox.value = "val";
        this.checkbox.checked = true;
        this.checkbox.addEventListener("click", function(event) {self.checkbox_evt(event)}, false);
        label.appendChild(this.checkbox);
        label.appendChild(description);
        document.getElementById(this.div_checkbox).appendChild(label);
    }
}

class SubCurve extends Curve{
    constructor(key, data, sub_path, sub_svg, svg, color){
        super(key, data, sub_path, sub_svg, svg, color);
        this.div_checkbox = "sub_checkboxes";
    }

    curve_click(){
        console.log("subcurve_click")
    }

}


