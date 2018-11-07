let spec = {
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
    },
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
                {"value": 7, "color": {"name": "AB"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "China",
            "stacks": [
                {"value": 3, "color": {"name": "B"}},
                {"value": 2, "color": {"name": "AB"}}
            ]
        }
    ]
}

let spec_area = d3.select("#spec")
let convert_button = d3.select("#convert")

spec_area.text(JSON.stringify(spec, null, 4))

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