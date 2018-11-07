function convert(){
    let spec = barchart_spec
    let chart = d3.select("#barchart")

    let cdg = d3.select("body").append('graph')
    /* Guides */
    let guides = cdg.append("guides")
    guides.append("guide").text("차트입니다. 더 알아보시려면 S를, 사용법에 대해 알고 싶으면 G를 눌러주세요.")
    guides.append("guide").text("키보드를 눌러 차트를 탐색하실 수 있습니다. S를 누르면...")

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

    /* Insights */
    let insights = cdg.append("insights")
    let annotation = insights.append("annotation")
    annotation.append("highlight").attr("mark_id", 5).attr("type", "style")
    insights.append("notables")

    return cdg
}

function DOMstring(selection){
    let div = document.createElement("div")
    div.appendChild(selection.node())
    return div.innerHTML
}

function tag_string(tag_name, attributes, properties){
    segments = []
    segments.push(tag_name)
    if(attributes) for(let [key, value] of Object.entries(attributes)){
        segments.push(key + "=\"" + value + "\"")
    }
    if(properties) for(let prop of properties){
        segments.push(prop)
    }
    let cap = (s) => ("<" + s + ">")
    return [cap(segments.join(" ")), cap("/" + tag_name)]
}

let cdg_area = d3.select("body").append("div")
function flatten(node, indent=0, result=[]){
    let attrs = {}
    Object.values(node.attributes).forEach(d => {
        attrs[d.name] =  d.value
    })
    let [opentag, closetag] = tag_string(node.tagName, attrs)
    let stringified = ".".repeat(indent) + opentag
    result.push({
        "node": node,
        "text": stringified
    })
    for(let child of node.children){
        flatten(child, indent + 8, result)
    }
    return result
}

let cdg = convert().node()
let flattened = flatten(cdg)
flattened.forEach(d => {
    d.node.vis = cdg_area.append("div").text(d.text)
})