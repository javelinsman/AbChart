function translate(x, y){
    return "translate(" + x + "," + y + ")"
}

/*
{"type": "stacked_bar", "stacks": [{"value": 5, "color": "yellow"}, ...]}

{"type": "bar", "bar": {"value": 5, "color": "yellow"}}

*/

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
    let svg_width = spec.meta.width ? spec.meta.width : 700,
        svg_height = spec.meta.height ? spec.meta.height : 550,
        margin = {top: 100, left: 70, right: 250, bottom: 70},
        width = svg_width - margin.left - margin.right,
        height = svg_height - margin.top - margin.bottom

    let svg = d3.select("#barchart").attr("width", svg_width).attr("height", svg_height)
    svg.selectAll("*").remove()

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
    svg.append("g").attr("id", "x-axis")
        .attr("transform", translate(margin.left, margin.top + height)).call(x_axis)
        .selectAll(".tick").call(react_on_hover)
    svg.append("g").attr("id", "y-axis")
        .attr("transform", translate(margin.left, margin.top)).call(y_axis)
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

    if(["horizontal", "grid"].indexOf(spec.meta.gridline) >= 0){
        view.append("g")			
            .attr("class", "grid")
            .call(y_axis
                .tickSize(-width)
                .tickFormat("")
            )
    }

    if(["vertical", "grid"].indexOf(spec.meta.gridline) >= 0){
        view.append("g")			
            .attr("class", "grid")
            .attr("transform", "translate(" + (x.bandwidth() / (1 - x.padding()) / 2) + "," + height + ")")
            .call(x_axis
                .tickSize(-height)
                .tickFormat("")
            )
    }

    let bars = view.append("g").selectAll("g").data(spec.marks)
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

    if(spec.meta.colors){
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

}