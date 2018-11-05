function translate(x, y){
    return "translate(" + x + "," + y + ")"
}

/*
{"type": "stacked_bar", "stacks": [{"value": 5, "color": "yellow"}, ...]}

{"type": "bar", "bar": {"value": 5, "color": "yellow"}}

*/

let color_AB = "rgb(235, 160, 212)",
    color_A = "rgb(99, 160, 203)",
    color_B = "rgb(128, 128, 128)",
    color_O = "rgb(188, 131, 196)"

let barchart_spec = {
    //"orientation": "horizontal",
    "marks": [
        {
            "type": "stacked_bar",
            "key": "Korea",
            "stacks": [
                {"value": 3, "color": color_A},
                {"value": 5, "color": color_B},
                {"value": 2, "color": color_O},
                {"value": 6, "color": color_AB}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Japan",
            "stacks": [
                {"value": 5, "color": color_A},
                {"value": 6, "color": color_O},
                {"value": 7, "color": color_AB}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "China",
            "stacks": [
                {"value": 3, "color": color_B},
                {"value": 2, "color": color_AB},
            ]
        }
    ],
    "meta": {
        "x_title": "Country",
        "y_title": "Proportion"
    }
}

function make_offset(stack){
    return stack.map((d, i, a) => {
        if(i == 0) d.offset = 0
        else d.offset = a[i-1].offset + a[i-1].value
        return d
    })
}

function react_on_hover(selection){
    selection
        .on("mouseover", function(){ d3.select(this).classed("focused", true) })
        .on("mouseout", function(){ d3.select(this).classed("focused", false) })
}

function render(spec){
    let svg_width = 500,
        svg_height = 500,
        margin = 50,
        width = svg_width - 2 * margin,
        height = svg_height - 2 * margin

    let svg = d3.select("#barchart").attr("width", svg_width).attr("height", svg_height)
    let view = svg.append("g").attr("transform", translate(margin, margin))

    let bar_heights = spec.marks.map(d => {
        if(d.type === "stacked_bar"){
            return d.stacks.reduce((a, b) => a + b.value, 0)
        }
        else return d.bar.value
    })

    let x = d3.scaleBand().domain(spec.marks.map(d => d.key)).range([0, width]).padding(0.1)
    let y = d3.scaleLinear().domain([0, d3.max(bar_heights)]).range([height, 0])
    let x_axis = d3.axisBottom(x)
    let y_axis = d3.axisLeft(y)
    svg.append("g").attr("transform", translate(margin, margin + height)).call(x_axis)
        .selectAll(".tick").call(react_on_hover)
    svg.append("g").attr("transform", translate(margin, margin)).call(y_axis)
        .selectAll(".tick").call(react_on_hover)

    let x_title = svg.append("text")
        .attr("transform", translate(svg_width / 2, margin + height + 2 * margin / 3))
        .style("text-anchor", "middle")
        .text(spec.meta.x_title)
        .call(react_on_hover)

    let y_title = svg.append("text")
        .attr("transform", translate(margin / 2, svg_height / 2) + " rotate(-90)")
        .style("text-anchor", "middle")
        .text(spec.meta.y_title)
        .call(react_on_hover)

    let bars = view.selectAll("g").data(spec.marks)
    let stacks = bars.enter().append("g")
            .attr("transform", d => translate(x(d.key), 0))
        .selectAll("rect").data(d => d.type === "bar" ? make_offset([d.bar]) : make_offset(d.stacks))
    stacks.enter().append("rect")
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("transform", (d, i) => {
        return translate(0, y(d.offset + d.value))
    })
    .style("fill", d => d.color)
    .call(react_on_hover)
}

render(barchart_spec)