function translate(x, y){
    return "translate(" + x + "," + y + ")"
}

/*
{"type": "stacked_bar", "stacks": [{"value": 5, "color": "yellow"}, ...]}

{"type": "bar", "bar": {"value": 5, "color": "yellow"}}

*/

let barchart_spec = {
    //"orientation": "horizontal",
    "marks": [
        {
            "type": "stacked_bar",
            "key": "Korea",
            "stacks": [
                {"value": 3, "color": "red"},
                {"value": 5, "color": {"name": "B"}},
                {"value": 2, "color": {"name": "O"}},
                {"value": 6, "color": {"name": "AB"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Japan",
            "stacks": [
                {"value": 5, "color": {"name": "A"}},
                {"value": 6, "color": {"name": "O"}},
                {"value": 7, "color": {"name": "AB"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "China",
            "stacks": [
                {"value": 3, "color": {"name": "B"}},
                {"value": 2, "color": {"name": "AB"}},
            ]
        }
    ],
    "meta": {
        "title": "Proportion of bloodtype in Korea, Japan, and China",
        "x_title": "Country",
        "y_title": "Proportion",
        "colors": {
            "A": "rgb(99, 160, 203)",
            "B": "rgb(128, 128, 128)",
            "O": "rgb(188, 131, 196)",
            "AB": "rgb(235, 160, 212)"
        }
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
    let svg_width = 700,
        svg_height = 550,
        margin = {top: 100, left: 50, right: 250, bottom: 50},
        width = svg_width - margin.left - margin.right,
        height = svg_height - margin.top - margin.bottom

    let svg = d3.select("#barchart").attr("width", svg_width).attr("height", svg_height)

    let view_background = svg.append("rect").attr("transform", translate(margin.left, margin.top))
        .attr("width", width).attr("height", height)
        .style("fill", "rgb(230, 230, 230)")

    let view = svg.append("g").attr("transform", translate(margin.left, margin.top))

    let bar_heights = spec.marks.map(d => {
        if(d.type === "stacked_bar"){
            return d.stacks.reduce((a, b) => a + b.value, 0)
        }
        else return d.bar.value
    })

    let title = svg.append("text")
        .attr("transform", translate(svg_width / 2, 50))
        .style("text-anchor", "middle")
        .style("font-size", "150%")
        .style("font-weight", "bold")
        .text(spec.meta.title)
        .call(react_on_hover)

    let x = d3.scaleBand().domain(spec.marks.map(d => d.key)).range([0, width]).padding(0.1)
    let y = d3.scaleLinear().domain([0, d3.max(bar_heights)]).range([height, 0])
    let x_axis = d3.axisBottom(x)
    let y_axis = d3.axisLeft(y)
    svg.append("g").attr("transform", translate(margin.left, margin.top + height)).call(x_axis)
        .selectAll(".tick").call(react_on_hover)
    svg.append("g").attr("transform", translate(margin.left, margin.top)).call(y_axis)
        .selectAll(".tick").call(react_on_hover)

    let x_title = svg.append("text")
        .attr("transform", translate(svg_width / 2, margin.top + height + 2 * margin.bottom / 3))
        .style("text-anchor", "middle")
        .text(spec.meta.x_title)
        .call(react_on_hover)

    let y_title = svg.append("text")
        .attr("transform", translate(margin.left / 2, svg_height / 2) + " rotate(-90)")
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
    .style("fill", d => d.color.name ? spec.meta.colors[d.color.name] : d.color)
    .call(react_on_hover)

    let legend = svg.append("g")
        .attr("transform", translate(margin.left + width + 50, margin.top))
    let legend_items = legend.selectAll("g").data(Object.entries(spec.meta.colors), d=>d[0])
        .enter().append("g")
            .attr("transform", (d, i) => translate(0, 50 * i))
            .call(react_on_hover)
    legend_items
        .append("rect")
            .attr("width", 30).attr("height", 30)
            .style("fill", d => d[1])
    legend_items
        .append("text")
            .attr("transform", translate(50, 15))
            .attr("height", 30)
            .text(d => d[0])
}

render(barchart_spec)