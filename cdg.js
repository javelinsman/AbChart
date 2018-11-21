function convert(spec){
    let chart = d3.select("#barchart")

    d3.select("#cdg_temp").selectAll("*").remove()
    let cdg = d3.select("#cdg_temp").append('graph')
    let meta = cdg.append("meta")
    let insights = cdg.append("insights")
    let marks = cdg.append('marks')
    let axes = cdg.append('axes')

    /* Meta */
    let title = meta.append("title").text("차트 제목 " + (spec.meta.title.length ? spec.meta.title : "없음"))
    let x_unit = spec.meta.x_unit ? spec.meta.x_unit : ""
    let x_label = meta.append("label").attr("axis", "x")
        .attr("unit", x_unit ? x_unit : "")
        .text("X축 레이블 " + (spec.meta.x_title.length ? spec.meta.x_title : "없음") + (x_unit ? " 단위 " + x_unit : ""))
    let y_unit = spec.meta.y_unit ? spec.meta.y_unit : ""
    let y_label = meta.append("label").attr("axis", "y")
        .attr("unit", y_unit ? y_unit : "")
        .text("Y축 레이블 " + (spec.meta.y_title.length ? spec.meta.y_title : "없음") + (y_unit ? " 단위 " + y_unit : ""))
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
    spec.marks.forEach((d, i) => {
        let stacked = d.type === "stacked_bar"
        let grouped = d.type === "grouped_bar"
        let x_unit = spec.meta.x_unit ? spec.meta.x_unit : ""
        let y_unit = spec.meta.y_unit ? spec.meta.y_unit : ""
        if(stacked){
            let bar = marks.append("bar")
                .attr("text", 
                        d.stacks.reduce((a, b) => a + b.value, 0) + y_unit
                        + " " + d.key + x_unit 
                        + " " + (i+1) + "번째 막대더미"
                    )
            d.stacks.forEach((stack, j) => {
                bar.append("stack")
                    .text(
                        stack.value + y_unit 
                        + " " + (stack.color.name ? " "  + stack.color.name : "") 
                        + " " + (j+1) + "번째 조각"
                        + " " + d.key + x_unit
                        + (stack.color.name ? "" : " 색상 " + stack.color)
                    )
            })
        }
        else if(grouped){
            let bargroup = marks.append("bargroup")
                .attr("text", d.key + x_unit
                    + " " + (i+1) + "번째 막대그룹")
            d.groups.forEach((bar, j) => {
                bargroup.append("bar")
                    .text(
                        bar.bar.value + y_unit 
                        + (bar.key ? " " + bar.key : "")
                        + (bar.bar.color.name ? (bar.key ? " 색상범례 " : " ") + bar.bar.color.name : "")
                        + " " + (j+1) + "번째 막대"
                        + (bar.bar.color.name ? "" : " 색상 " + bar.bar.color)
                    )
            })
        }
        else{
            let bar = marks.append("bar")
                .text(
                    d.bar.value + y_unit 
                    + (d.bar.color.name ? " " + d.bar.color.name : "")
                    + " " + (i+1) + "번째 막대"
                    + (d.bar.color.name ? "" : " 색상 " + d.bar.color)
                )
        }
    })

    /* Axes */
    if(spec.marks[0].type === "grouped_bar"){
        let nx = chart.select("#x-axis").selectAll(".tick").size()
        let x = axes.append("axis").attr("id", "x").attr("text", nx +"개의 막대그룹이 있습니다.")
        chart.select("#x-axis").selectAll(".tick").each(function(){
            x.append("tick")
                .text("값 " + d3.select(this).select("text").text() + (x_unit.length ? " 단위 " + x_unit : ""))
        })
    }
    else{
        let nx = chart.select("#x-axis").selectAll(".tick").size()
        let x = axes.append("axis").attr("id", "x").attr("text", nx +"개의 막대가 있습니다.")
        chart.select("#x-axis").selectAll(".tick").each(function(){
            x.append("tick")
                .text("값 " + d3.select(this).select("text").text() + (x_unit.length ? " 단위 " + x_unit : ""))
        })
    }

    let ny = chart.select("#y-axis").selectAll(".tick").size()
    let ys = []
    chart.select("#y-axis").selectAll(".tick").each(function(){
        ys.push(+d3.select(this).select("text").text().replace(/,/g, ""))
    })
    let maxy = d3.max(ys)
    let y = axes.append("axis").attr("id", "y").attr("text", "y축의 범위는 약 0부터 " + maxy + "까지입니다.")
    chart.select("#y-axis").selectAll(".tick").each(function(){
        y.append("tick")
            .text("값 " + d3.select(this).select("text").text() + (y_unit.length ? " 단위 " + y_unit : ""))
    })

    /* Insights */
    //let insights = cdg.append("insights")
    let annotation = insights.append("annotation").attr("text", "차트에서 강조된 부분")
    // highlight
    spec.marks.forEach((d, i) => {
        let stacked = d.type === "stacked_bar"
        if(stacked) d.stacks.forEach((stack, j) => {
            if(spec.meta.colors && !stack.color.name){
                annotation.append("highlight").attr("type", "style:color").text((i+1) +"번 막대더미 " + (j+1) + "번 조각의 색상이 " + stack.color + "로 범례 외의 색상입니다.")
            }
        })
        else{

        }
    })
    // notables
    let notables = insights.append("notables").attr("text", "주목할 만한 데이터")
    
    let is_ascending = bar_heights => {
        if(new Set(bar_heights).size == 1) return 0
        return (bar_heights.map((d, i, a) => i + 1 != bar_heights.length && d.value <= a[i+1].value)
            .filter(d => d).length) / (bar_heights.length - 1)
    }
    let is_descending = bar_heights => {
        if(new Set(bar_heights).size == 1) return 0
        return (bar_heights.map((d, i, a) => i + 1 != bar_heights.length && d.value >= a[i+1].value)
            .filter(d => d).length) / (bar_heights.length - 1)
    }
    let is_up_and_down = bar_heights => {
        return d3.max(bar_heights.map((d, i, a) => {
            if(i == 0 || i + 1 == a.length) return 0
            let left = is_ascending(a.slice(0, i+1))
            let right = is_descending(a.slice(i, a.length))
            return (left * i + right * (a.length - i - 1)) / (a.length - 1)
        }))
    }
    let is_down_and_up = bar_heights => {
        return d3.max(bar_heights.map((d, i, a) => {
            if(i == 0 || i + 1 == a.length) return 0
            let left = is_descending(a.slice(0, i+1))
            let right = is_ascending(a.slice(i, a.length))
            console.log([i, a.slice(0, i), a.slice(i, a.length), left, right, (left * i + right * (a.length - i)) / a.length])
            return (left * i + right * (a.length - i - 1)) / (a.length - 1)
        }))
    }

    if(spec.marks[0].type === "bar"){
        let bar_heights = spec.marks.map((d, i) => ({
            value: d.bar.value,
            bar_ind: i,
            bar_key: d.key
        }))

        if(is_ascending(bar_heights) >= 0.99){
            notables.append("trend").attr("type", "increasing")
                .text("막대가 왼쪽부터 오른쪽까지 오름차순으로 정렬되어 있습니다.")
        }
        else if(is_descending(bar_heights) >= 0.99){
            notables.append("trend").attr("type", "decreasing")
                .text("막대가 왼쪽부터 오른쪽까지 내림차순으로 정렬되어 있습니다.")
        }
        else if(is_ascending(bar_heights) >= 0.75){
            notables.append("trend").attr("type", "increasing")
                .text("막대가 왼쪽부터 오른쪽까지 오름차순으로 정렬된 경향이 있습니다.")
        }
        else if(is_descending(bar_heights) >= 0.75){
            notables.append("trend").attr("type", "decreasing")
                .text("막대가 왼쪽부터 오른쪽까지 내림차순으로 정렬된 경향이 있습니다.")
        }
        else if(is_up_and_down(bar_heights) >= 0.75){
            notables.append("trend").attr("type", "up-down")
                .text("막대가 올라가다가 내려오는 경향이 있습니다.")
        }
        else if(is_down_and_up(bar_heights) >= 0.75){
            notables.append("trend").attr("type", "down-up")
                .text("막대가 내려가다가 올라오는 경향이 있습니다.")
        }

        let max_bar = bar_heights.filter(d => d.value === d3.max(bar_heights.map(t => t.value)))
        let min_bar = bar_heights.filter(d => d.value === d3.min(bar_heights.map(t => t.value)))
        if(max_bar.length == bar_heights.length){
            notables.append("trend").attr("type", "constant")
                .text("모든 막대의 길이가 " + max_bar[0].value + y_unit + "로 같습니다.")
        }
        else{
            if(max_bar.length > 1)
                notables.append("extreme").attr("type", "max")
                    .text("가장 긴 막대는 " + max_bar.length + "개 있으며 높이는 " + max_bar[0].value + y_unit + "입니다.")
                    .data(max_bar).enter().append("bar").text(d => d.value + y_unit + " " + d.bar_ind + "번째 막대")
            else notables.append("extreme").attr("type", "max")
                .text("가장 긴 막대는 " + (max_bar[0].bar_ind + 1) + "번 막대로 높이는 " + max_bar[0].value + y_unit + "입니다.")
            if(min_bar.length > 1)
                notables.append("extreme").attr("type", "min")
                    .text("가장 짧은 막대는 " + min_bar.length + "개 있으며 높이는 " + min_bar[0].value + y_unit + "입니다.")
                    .data(min_bar).enter().append("bar").text(d => d.value + y_unit + " " + d.bar_ind + "번째 막대")
            else notables.append("extreme").attr("type", "min")
                .text("가장 짧은 막대는 " + (min_bar[0].bar_ind + 1) + "번 막대로 높이는 " + min_bar[0].value + y_unit + "입니다.")
        }


    }
    else if(spec.marks[0].type === "grouped_bar"){
    }
    else if(spec.marks[0].type === "stacked_bar"){
        let stacks = spec.marks.map((stacked_bar, i) => 
            stacked_bar.stacks.map(
                (stack, j) => ({
                    value: stack.value,
                    bar_ind: i,
                    stack_ind: j,
                    bar_key: stacked_bar.key,
                    stack_key: stack.color.name ? stack.color.name : ""
                })
            )
        )
        let bar_heights = stacks.map(values => values.reduce((a,b)=>({
            value: a.value + b.value,
            bar_ind: a.bar_ind,
            bar_key: a.bar_key
        })))
        if(is_ascending(bar_heights) > 0.99)
            notables.append("trend").attr("type", "increasing")
                .text("막대가 왼쪽부터 오른쪽까지 오름차순으로 정렬되어 있습니다.")
        else if(is_descending(bar_heights) > 0.99)
            notables.append("trend").attr("type", "increasing")
                .text("막대가 왼쪽부터 오른쪽까지 내림차순으로 정렬되어 있습니다.")
        else if(is_ascending(bar_heights) >= 0.75){
            notables.append("trend").attr("type", "increasing")
                .text("막대가 왼쪽부터 오른쪽까지 오름차순으로 정렬된 경향이 있습니다.")
        }
        else if(is_descending(bar_heights) >= 0.75){
            notables.append("trend").attr("type", "decreasing")
                .text("막대가 왼쪽부터 오른쪽까지 내림차순으로 정렬된 경향이 있습니다.")
        }
        else if(is_up_and_down(bar_heights) >= 0.75)
            notables.append("trend").attr("type", "up-down")
                .text("막대가 올라가다가 내려오는 경향이 있습니다.")
        else if(is_down_and_up(bar_heights) >= 0.75)
            notables.append("trend").attr("type", "down-up")
                .text("막대가 내려가다가 올라오는 경향이 있습니다.")

        let max_bar = bar_heights.filter(d => d.value === d3.max(bar_heights.map(t => t.value)))
        let min_bar = bar_heights.filter(d => d.value === d3.min(bar_heights.map(t => t.value)))
        if(max_bar.length == bar_heights.length){
            notables.append("trend").attr("type", "constant")
                .text("모든 막대의 길이가 " + max_bar[0].value + y_unit + "로 같습니다.")
        }
        else{
            if(max_bar.length > 1)
                notables.append("extreme").attr("type", "max")
                    .text("가장 긴 막대는 " + max_bar.length + "개 있으며 높이는 " + max_bar[0].value + y_unit + "입니다.")
                    .data(max_bar).enter().append("bar").text(d => d.value + y_unit + " " + d.bar_ind + "번째 막대")
            else notables.append("extreme").attr("type", "max")
                .text("가장 긴 막대는 " + (max_bar[0].bar_ind + 1) + "번 막대로 높이는 " + max_bar[0].value + y_unit + "입니다.")
            if(min_bar.length > 1)
                notables.append("extreme").attr("type", "min")
                    .text("가장 짧은 막대는 " + min_bar.length + "개 있으며 높이는 " + min_bar[0].value + y_unit + "입니다.")
                    .data(min_bar).enter().append("bar").text(d => d.value + y_unit + " " + d.bar_ind + "번째 막대")
            else notables.append("extreme").attr("type", "min")
                .text("가장 짧은 막대는 " + (min_bar[0].bar_ind + 1) + "번 막대로 높이는 " + min_bar[0].value + y_unit + "입니다.")
        }
        let stack_heights = stacks.reduce((a, b) => a.concat(b))
        max_ind = stack_heights.findIndex(d => d.value === d3.max(stack_heights.map(t => t.value)))
        min_ind = stack_heights.findIndex(d => d.value === d3.min(stack_heights.map(t => t.value)))
        let max_stack = stack_heights[max_ind]
        let min_stack = stack_heights[min_ind]
        notables.append("extreme").attr("type", "max")
            .text("가장 긴 막대조각은 "
                + (max_stack.bar_ind + 1) + "번째 막대인 " + (max_stack.bar_key) + "의 "
                + (max_stack.stack_ind + 1) + "번째 조각" + (max_stack.stack_key.length ? "인 " + max_stack.stack_key : "") +  "으로 높이는 " 
                + max_stack.value + y_unit + "입니다.")
        notables.append("extreme").attr("type", "min")
            .text("가장 짧은 막대조각은 "
                + (min_stack.bar_ind + 1) + "번째 막대인 " + (min_stack.bar_key) + "의 "
                + (min_stack.stack_ind + 1) + "번째 조각" + (min_stack.stack_key.length ? "인 " + min_stack.stack_key : "") +  "으로 높이는 " 
                + min_stack.value + y_unit + "입니다.")
    }
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