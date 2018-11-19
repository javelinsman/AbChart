let spec_area = d3.select("#spec")
let convert_button = d3.select("#convert")

let prev_listener = null

convert_button.on('click', function(){
    console.log(spec_area.property('value'))
    let spec = JSON.parse(spec_area.property('value'))
    render(spec)
    let cdg_area = d3.select("#cdg_area")
    let cdg = draw_cdg(spec, cdg_area)
    let keydown_listener = addNavigator(cdg, cdg_area)
    if(prev_listener !== null) document.removeEventListener('keydown', prev_listener)
    document.addEventListener('keydown', keydown_listener)
    prev_listener = keydown_listener
})

let examples = d3.select("#examples").selectAll("button").data(example_specs)
    .enter().append("button")
        .text((d, i) => "example " + i)
        .attr("spec", d => JSON.stringify(d, null, 4))
        .on('click', function(){
            let spec = d3.select(this).attr("spec")
            spec_area.node().value = spec
            convert_button.node().click()
        })

