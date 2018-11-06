let convert_button = d3.select("body").append("div").append("button")
    .text("Convert to CDG")
    .on("click", convert)

let cdg_area = d3.select("body").append("div")

function convert(){
    let spec = barchart_spec
    let chart = d3.select("#barchart")

    let cdg = d3.select("body").append('graph')
    /* Meta */
    let meta = cdg.append("meta")
    let title = meta.append("title").text(spec.meta.title)
    let x_label = meta.append("label").attr("axis", "x").text(spec.meta.x_title)
    let y_label = meta.append("label").attr("axis", "y").text(spec.meta.y_title)
    let colors = meta.append("colors")
    Object.entries(spec.meta.colors).forEach(([name, color]) => {
        colors.append("color")
            .attr("name", name)
            .attr("value", color)
    })
    /* Marks */
    let marks = cdg.append('marks').attr("type", "bar")
    spec.marks.forEach(d => {
        let stacked = d.type === "stacked_bar"
        let bar = marks.append("bar")
            .attr("stacked", stacked)
        if(stacked) d.stacks.forEach(stack => {
            bar.append("stack")
                .attr("data", stack.value)
                .attr("color", stack.color.name ? stack.color.name : stack.color)
        })
    })

    /* Axes */
    let axes = cdg.append('axes')
    let x = axes.append("axis").attr("id", "x").attr("type", "discrete")
    chart.select("#x-axis").selectAll(".tick").each(function(){
        x.append("tick")
            .attr("value", d3.select(this).select("text").text())
    })

    let y = axes.append("axis").attr("id", "y").attr("type", "continuous")
    chart.select("#y-axis").selectAll(".tick").each(function(){
        y.append("tick")
            .attr("value", d3.select(this).select("text").text())
    })
    return cdg
}

function DOMstring(selection){
    let div = document.createElement("div")
    div.appendChild(selection.node())
    return div.innerHTML
}

convert().each(function(){console.log(this)})