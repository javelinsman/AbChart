let spec = {
    "meta": {
        "title": "공동주택 공시가격 이의신청 추이",
        "x_title": "연도",
        "y_title": "호",
        "colors": {
            "아파트": "rgb(7, 109, 158)",
            "연립주택": "rgb(173, 210, 239)",
            "다세대": "rgb(68, 157, 191)",
        }
    },
    "marks": [
        {
            "type": "stacked_bar",
            "key": "2015년",
            "stacks": [
                {"value": 230, "color": {"name": "아파트"}},
                {"value": 31, "color": {"name": "연립주택"}},
                {"value": 90, "color": {"name": "다세대"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2016년",
            "stacks": [
                {"value": 159, "color": {"name": "아파트"}},
                {"value": 23, "color": {"name": "연립주택"}},
                {"value": 57, "color": {"name": "다세대"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2017년",
            "stacks": [
                {"value": 265, "color": {"name": "아파트"}},
                {"value": 55, "color": {"name": "연립주택"}},
                {"value": 98, "color": {"name": "다세대"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2018년",
            "stacks": [
                {"value": 737, "color": "rgb(228, 188, 103)"},
                {"value": 116, "color": {"name": "연립주택"}},
                {"value": 264, "color": {"name": "다세대"}}
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