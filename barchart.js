function translate(x, y){
    return "translate(" + x + "," + y + ")"
}
let data = [
    {
        "type": "stacked_bar",
        "stacks": [
            {"value": 3, "color": "red"},
            {"value": 5, "color": "blue"},
            {"value": 2, "color": "green"}
        ]
    },
    {
        "type": "bar",
        "bar": {"value": 6, "color": "yellow"}
    },
    {
        "type": "stacked_bar",
        "stacks": [
            {"value": 5, "color": "red"},
            {"value": 6, "color": "blue"},
            {"value": 7, "color": "green"}
        ]
    },
    {
        "type": "stacked_bar",
        "stacks": [
            {"value": 3, "color": "purple"},
            {"value": 2, "color": "cyan"},
        ]
    },
    {
        "type": "bar",
        "bar": {"value": 7, "color": "blue"}
    }
]

function make_offset(stack){
    return stack.map((d, i, a) => {
        if(i == 0) d.offset = 0
        else d.offset = a[i-1].offset + a[i-1].value
        return d
    })
}

let svg_width = 500,
    svg_height = 500,
    margin = 30,
    width = svg_width - 2 * margin,
    height = svg_height - 2 * margin

let svg = d3.select("#barchart").attr("width", svg_width).attr("height", svg_height)
let view = svg.append("g").attr("transform", translate(margin, margin))

let bar_heights = data.map(d => {
    if(d.type === "stacked_bar"){
        return d.stacks.reduce((a, b) => a + b.value, 0)
    }
    else return d.bar.value
})

console.log(bar_heights)

let x = d3.scaleBand().domain(data.map((d, i) => i)).range([0, width]).padding(0.1)
let y = d3.scaleLinear().domain([0, d3.max(bar_heights)]).range([0, height])

let bars = view.selectAll("g").data(data)
let stacks = bars.enter().append("g")
        .attr("transform", (d, i) => translate(x(i), 0))
    .selectAll("rect").data(d => d.type === "bar" ? make_offset([d.bar]) : make_offset(d.stacks))
stacks.enter().append("rect")
  .attr("width", x.bandwidth())
  .attr("height", d => y(d.value))
  .attr("transform", (d, i) => {
      return translate(0, height - y(d.offset + d.value))
  })
  .style("fill", d => d.color)