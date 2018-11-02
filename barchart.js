function translate(x, y){
    return "translate(" + x + "," + y + ")"
}
let data = [
    [1, 2, 5],
    [3, 5, 9],
    [10, 3, 2],
    [5, 3, 5],
    [1, 1, 1]
]

function to_stack(l){
  l.map((d, i, arr) => {
  })
}

let svg_width = 500,
    svg_height = 500,
    margin = 30,
    width = svg_width - 2 * margin,
    height = svg_height - 2 * margin

let svg = d3.select("#barchart").attr("width", width).attr("height", height)
let view = svg.append("g").attr("transform", translate(margin, margin))

let x = d3.scaleBand().domain(data.map((d, i) => i)).range([0, width]).padding(0.1)
let y = d3.scaleLinear().domain([0, d3.max(data.reduce((a, b) => a.concat(b)))]).range([height, 0])

let bars = view.selectAll("g").data(data)
let stacks = bars.enter().append("g").selectAll("rect").data(d => to_stack(d))
stacks.enter().append("rect")
  .attr("width", x.bandwidth())
  .attr("height", )