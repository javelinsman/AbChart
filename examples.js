let stacked1 = {
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

let simple1 = {
    "meta": {
        "title": "Cars sold in January",
        "x_title": "",
        "y_title": "Number of Cars Sold",
        "gridline": "horizontal",
        "width": 600,
        "height": 450
    },
    "marks": [
        {
            "type": "bar",
            "key": "BMW",
            "bar": {"value": 40, "color": "blue"}
        },
        {
            "type": "bar",
            "key": "Buick",
            "bar": {"value": 25, "color": "purple"}
        },
        {
            "type": "bar",
            "key": "Toyota",
            "bar": {"value": 35, "color": "magenta"}
        },
        {
            "type": "bar",
            "key": "Honda",
            "bar": {"value": 50, "color": "green"}
        },
        {
            "type": "bar",
            "key": "Mercedes",
            "bar": {"value": 15, "color": "yellow"}
        },
        {
            "type": "bar",
            "key": "Kia",
            "bar": {"value": 20, "color": "orange"}
        }
    ]
}


let example_specs = [
    {name: 'simple1', spec: simple1},
    {name: 'stacked1', spec: stacked1},
]