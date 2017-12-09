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

const STROKE = 3;
const STROKE_OVER = 4;

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
        this.ref = 0;
        this.checkbox = 0;
    }

    draw(line){
        this.ref = this.svg.append("path")
            .datum(this.data)
            .attr("id", this.id)
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
        d3.csv(this.sub_path, function(data){
            console.log(data)
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
        console.log("add");
        let label= document.createElement("label");
        let description = document.createTextNode("");
        this.checkbox = document.createElement("input");
        let self = this;
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

}


