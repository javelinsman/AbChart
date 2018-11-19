function convert(spec){
    let chart = d3.select("#barchart")

    d3.select("#cdg_temp").selectAll("*").remove()
    let cdg = d3.select("#cdg_temp").append('graph')

    /* Meta */
    let meta = cdg.append("meta")
    let title = meta.append("title").attr("value", spec.meta.title).text("차트 제목 " + spec.meta.title)
    let x_label = meta.append("label").attr("axis", "x").attr("value", spec.meta.x_title).text("X축 레이블 " + spec.meta.x_title)
    let y_label = meta.append("label").attr("axis", "y").attr("value", spec.meta.y_title).text("Y축 레이블 " + spec.meta.y_title)
    if(spec.meta.colors) {
        let colors = meta.append("legends").attr("text", "범례").append("colors").attr("text", "색상 범례")
        Object.entries(spec.meta.colors).forEach(([name, color], i) => {
        colors.append("color")
            .attr("name", name)
            .attr("value", color)
            .text("색상 범례 " + (i + 1) + "번 이름 " + name)
        })
    }
    /* Marks */
    let marks = cdg.append('marks')
    spec.marks.forEach((d, i) => {
        let stacked = d.type === "stacked_bar"
        let bar = marks.append("bar")
            .attr("stacked", stacked)
            .attr("text", "막대" + (stacked ? "더미 ": " ") + (i+1) + "번")
        if(stacked) d.stacks.forEach((stack, j) => {
            bar.append("stack")
                .attr("data", stack.value)
                .attr("color", stack.color.name ? stack.color.name : stack.color)
                .text("막대조각 " + j + "번 높이 " + stack.value + " 색상 " +
                    (stack.color.name ? "범례 " + stack.color.name : stack.color))
        })
    })

    /* Axes */
    let axes = cdg.append('axes')
    let nx = chart.select("#x-axis").selectAll(".tick").size()
    let x = axes.append("axis").attr("id", "x").attr("text", "x축에는 " + nx +"개의 표시가 있습니다.")
    chart.select("#x-axis").selectAll(".tick").each(function(){
        x.append("tick")
            .attr("value", d3.select(this).select("text").text())
            .text(d3.select(this).select("text").text())
    })

    let ny = chart.select("#y-axis").selectAll(".tick").size()
    let y = axes.append("axis").attr("id", "y").attr("text", "y축에는 " + ny + "개의 표시가 있습니다.")
    chart.select("#y-axis").selectAll(".tick").each(function(){
        y.append("tick")
            .attr("value", d3.select(this).select("text").text())
            .text(d3.select(this).select("text").text())
    })

    /* Insights */
    let insights = cdg.append("insights")
    let annotation = insights.append("annotation").attr("text", "차트에서 강조된 부분")
    // highlight
    spec.marks.forEach((d, i) => {
        let stacked = d.type === "stacked_bar"
        if(stacked) d.stacks.forEach((stack, j) => {
            if(!stack.color.name){
                annotation.append("highlight").attr("type", "style:color").text((i+1) +"번 막대더미 " + (j+1) + "번 조각의 색상이 " + stack.color + "로 범례 외의 색상입니다.")
            }
        })
        else{

        }
    })
    // notables
    let notables = insights.append("notables").attr("text", "주목할 만한 데이터")
    
    let bar_heights = spec.marks.map(d => {
        if(d.type === "stacked_bar"){
            return d.stacks.reduce((a, b) => a + b.value, 0)
        }
        else return d.bar.value
    })
    let max_ind = bar_heights.findIndex(d => d === d3.max(bar_heights))
    let min_ind = bar_heights.findIndex(d => d === d3.min(bar_heights))
    notables.append("extreme").attr("type", "max").text("가장 긴 막대는 " + (max_ind + 1) + "번 막대로 높이는 " + d3.max(bar_heights) + "입니다.")
    notables.append("extreme").attr("type", "min").text("가장 짧은 막대는 " + (min_ind + 1) + "번 막대로 높이는 " + d3.min(bar_heights) + "입니다.")

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

function flatten(node, indent=0, result=[]){
    let attrs = {}
    Object.values(node.attributes).forEach(d => {
        attrs[d.name] =  d.value
    })
    let [opentag, closetag] = tag_string(node.tagName, attrs)
    let stringified = ".".repeat(indent) + opentag + (node.children.length === 0 ? node.innerText : "")
    result.push({
        "node": node,
        "text": stringified
    })
    for(let child of node.children){
        flatten(child, indent + 8, result)
    }
    return result
}

function draw_cdg(spec, cdg_area){
    cdg_area.selectAll("*").remove()
    let cdg = convert(spec).node()
    let flattened = flatten(cdg)
    flattened.forEach(d => {
        d.node.vis = cdg_area.append("div").text(d.text)
    })
    return cdg
}