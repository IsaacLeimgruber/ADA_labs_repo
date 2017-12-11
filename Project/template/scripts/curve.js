const STROKE = 5;
const STROKE_OVER = 6;

class Curve {
    constructor(key, data, sub_path, sub_svg, svg, color, descr, img, sub_infos) {
        this.id = key;
        this.data = data;
        this.svg = svg;
        this.img_path = img;
        this.sub_infos = sub_infos;
        this.descr = descr;
        this.sub_path = sub_path;
        this.color = color;
        this.div_checkbox = "checkboxes";
        this.sub_curves = [];
        this.ref = 0;
        this.checkbox = 0;
    }

    draw(line, svg) {
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
        dom.addEventListener("mouseover", function (event) {
            self.hover(event)
        });
        dom.addEventListener("mouseout", function (event) {
            self.out(event)
        });
        dom.addEventListener("click", function (event) {
            self.curve_click(event)
        })
    }

    load_img(s) {
        let myImage = new Image();
        myImage.id = "image";
        myImage.src = s.img_path;
        myImage.setAttribute("class", "unfocusable no_pointer_event");
        let picture = document.getElementById("picture");
        picture.innerHTML = "";
        picture.appendChild(myImage);
    }

    load_descr(s) {
        let descr = document.getElementById("descr");
        descr.textContent = s.descr;
    }

    curve_click(evt) {
        sub_graph_svg.selectAll(".curve_path").remove();
        document.getElementById("sub_checkboxes").innerHTML = "";
        let self = this;
        d3.csv(self.sub_path, function (data) {
            d3.csv(DATA_FOLDER + self.sub_infos, function (infos) {
                console.log("sub_curves", data);
                let keys = d3.keys(data[0]);
                let years = [];
                let sub_curves = [];
                let max = 0;
                max = helpers.load_sub_data(keys, data, sub_paths, years, sub_curves, infos);

                const first_year = years[0];
                const last_year = years[years.length - 1];

                axis.sub_year_scale.domain([first_year, last_year]);
                axis.sub_year_ref.call(axis.sub_year_axis);
                axis.sub_y_scale.domain([max, 0]);
                axis.sub_y_ref.call(axis.sub_y_axis);

                for (let i = 0; i < sub_curves.length; i++) {
                    sub_curves[i]
                        .draw(helpers.line(axis.sub_year_scale, axis.sub_y_scale, keys[0], first_year), sub_graph_svg);
                    sub_curves[i].add_checkbox();
                }

                self.load_descr(self);

                self.load_img(self)
            });
        })
    }

    out(evt) {
        if (this.checkbox.checked === true) {
            this.ref.attr("stroke-width", STROKE)
        }
    }

    hover(evt) {
        if (this.checkbox.checked === true) {
            this.ref.attr("stroke-width", STROKE_OVER)
        }

    }

    checkbox_evt(evt) {
        console.log("clicked");
        console.log("check", this.checkbox.clicked);
        if (this.checkbox.checked === true) {
            this.ref.attr("stroke-width", STROKE)
        } else {
            this.ref.attr("stroke-width", 0)
        }
    };

    add_checkbox() {
        let label = document.createElement("label");
        let description = document.createTextNode(this.id);
        this.checkbox = document.createElement("input");
        let self = this;
        label.style.color = this.color;
        this.checkbox.type = "checkbox";
        this.checkbox.name = "chbx";
        this.checkbox.id = this.checkbox_id;
        this.checkbox.value = "val";
        this.checkbox.checked = true;
        this.checkbox.addEventListener("click", function (event) {
            self.checkbox_evt(event)
        }, false);
        label.appendChild(this.checkbox);
        label.appendChild(description);
        document.getElementById(this.div_checkbox).appendChild(label);
    }
}

class SubCurve extends Curve {
    constructor(key, data, sub_path, sub_svg, svg, color, descr, img) {
        super(key, data, sub_path, sub_svg, svg, color, descr, img, null);
        this.div_checkbox = "sub_checkboxes";
    }

    curve_click() {
        let self = this;
        this.load_img(self);
        this.load_descr(self);
    }
}


