function translate(x, y){
    return "translate(" + x + "," + y + ")"
}

/*
{"type": "stacked_bar", "stacks": [{"value": 5, "color": "yellow"}, ...]}

{"type": "bar", "bar": {"value": 5, "color": "yellow"}}

*/

function make_offset(stack, key){
    return stack.map((d, i, a) => {
        if(i == 0) d.offset = 0
        else d.offset = a[i-1].offset + a[i-1].value
        d.key = key
        return d
    })
}

function if_exists(value, default_value=""){
    return value ? value : default_value
}

function react_on_hover(selection){
    return selection
        .on("mouseover", function(){ d3.select(this).classed("focused", true) })
        .on("mouseout", function(){ d3.select(this).classed("focused", false) })
}

function render(spec){
    let svg_width = spec.meta.width ? spec.meta.width : 700,
        svg_height = spec.meta.height ? spec.meta.height : 550,
        margin = {
            top: svg_height * 0.15,
            left: svg_width * 0.1,
            right: spec.meta.colors ? svg_width * 0.3 : svg_width * 0.1,
            bottom: svg_height * 0.15
        },
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
        else if(d.type === "grouped_bar"){
            return d3.max(d.groups.map(d => d.bar.value))
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
    let x_axis_g = svg.append("g").attr("id", "x-axis")
            .attr("transform", translate(margin.left, margin.top + height)).call(x_axis)
    let x_ticks = x_axis_g
            .selectAll(".tick").call(react_on_hover)
    if(spec.meta.x_tick_rotate) x_ticks.selectAll("text")
        .attr("transform", "rotate(" + spec.meta.x_tick_rotate + ")")
        .style("text-anchor", "start")
    svg.append("g").attr("id", "y-axis")
        .attr("transform", translate(margin.left, margin.top)).call(y_axis)
        .selectAll(".tick").call(react_on_hover)

    let title_and_unit = (title, unit) => {
        if(title && unit) return title + " (" + unit + ")"
        else return if_exists(title) + if_exists(unit)
    }

    let x_title = svg.append("text")
        .attr("transform", translate(svg_width / 2, margin.top + height + 2 * margin.bottom / 3))
        .style("text-anchor", "middle")
        .text(title_and_unit(spec.meta.x_title, spec.meta.x_unit))
        .call(react_on_hover)

    let y_title = svg.append("text")
        .attr("transform", translate(margin.left / 2, svg_height / 2) + " rotate(-90)")
        .style("text-anchor", "middle")
        .text(title_and_unit(spec.meta.y_title, spec.meta.y_unit))
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
    if(spec.marks[0].type == "grouped_bar"){
        let groups = bars.enter().append("g")
                .attr("transform", d => translate(x(d.key), 0))
            .selectAll("rect").data((d, i) => d.groups.map(bar => ({
                "parent_key": d.key,
                "bar": bar,
                "subx": d3.scaleBand()
                    .domain(d.groups.map((t, j) => t.key ? t.key : j))
                    .range([0, x.bandwidth()]).padding(0.1)
            })))
        let rects = groups.enter().append("rect")
            .attr("width", d => {
                return d.subx.bandwidth()
            })
            .attr("height", d => height - y(d.bar.bar.value))
            .attr("transform", (d, i) => {
                return translate(d.subx(d.bar.key ? d.bar.key : i), y(d.bar.bar.value))
            })
            .style("fill", d => d.bar.bar.color.name ? spec.meta.colors[d.bar.bar.color.name] : d.bar.bar.color)
            .call(react_on_hover)
            .each(function(d, i){
                if(!d.bar.bar.label) return
                let label = view.append("text")
                    .attr("transform", translate(x(d.parent_key) + d.subx(d.bar.key ? d.bar.key : i) + d.subx.bandwidth() / 2, y(d.bar.bar.value) + 20))
                    .style("text-shadow", "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white")
                    .style("text-anchor", "middle")
                    .text(d.bar.bar.label.format.replace(/%v/g, d.bar.bar.value).replace(/%u/g, if_exists(spec.meta.y_unit)))
                if(d.bar.bar.label.position === "middle"){
                    label.attr("transform", translate(x(d.parent_key) + d.subx(d.bar.key ? d.bar.key : i) + d.subx.bandwidth() / 2, (height + y(d.bar.bar.value)) / 2 + 5))
                }
            })
        
        // draw subx axis if some bars have "key" attribute
        if(spec.marks.map(mark => mark.groups.map(bar => bar.key)).reduce((a, b) => a.concat(b)).filter(d => d).length){
            bars.enter().append("g").each(function(d, i){
                let subx = d3.axisBottom(d3.scaleBand()
                    .domain(d.groups.map((t, j) => t.key ? t.key : j))
                    .range([0, x.bandwidth()]).padding(0.1))
                d3.select(this)
                    .classed("sub-axis", true)
                    .attr("transform", translate(x(d.key), height))
                    .call(subx)
                x_axis_g
                    .attr("transform", translate(margin.left, margin.top + height + 25))
            })
            if(spec.meta.subx_title){
                svg.append("text").attr("transform", translate(margin.left + width, margin.top + height + 10))
                    .text(spec.meta.subx_title)
            }
        }
    }
    else{
        let stacks = bars.enter().append("g")
                .attr("transform", d => translate(x(d.key), 0))
            .selectAll("rect").data(d => d.type === "bar" ? make_offset([d.bar], d.key) : make_offset(d.stacks, d.key))
        let rects = stacks.enter().append("rect")
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.value))
            .attr("transform", (d, i) => {
                return translate(0, y(d.offset + d.value))
            })
            .style("fill", d => d.color.name ? spec.meta.colors[d.color.name] : d.color)
            .call(react_on_hover)
            .each(function(d, i){
                if(!d.label) return
                let label = view.append("text")
                    .attr("transform", translate(x(d.key) + x.bandwidth() / 2, y(d.offset + d.value) + 20))
                    .style("text-shadow", "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white")
                    .style("text-anchor", "middle")
                    .text(d.label.format.replace(/%v/g, d.value).replace(/%u/g, if_exists(spec.meta.y_unit)))
                if(d.label.position === "middle"){
                    label.attr("transform", translate(x(d.key) + x.bandwidth() / 2, 5 + y(d.offset + d.value) + (height - y(d.value)) / 2))
                }
            })
    }

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