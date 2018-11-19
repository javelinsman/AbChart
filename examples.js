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

let stacked2 = {
    "meta": {
        "title": "Revenue by Category",
        "x_title": "",
        "y_title": "",
        "colors": {
            "Hardware": "rgb(0, 69, 124)",
            "Software": "rgb(220, 124, 125)",
            "Office Equipment": "rgb(247, 218, 188)",
        }
    },
    "marks": [
        {
            "type": "stacked_bar",
            "key": "Jun 06",
            "stacks": [
                {"value": 98000, "color": {"name": "Hardware"}},
                {"value": 20000, "color": {"name": "Software"}},
                {"value": 110000, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Jul 06",
            "stacks": [
                {"value": 430000, "color": {"name": "Hardware"}},
                {"value": 35000, "color": {"name": "Software"}},
                {"value": 150000, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Aug 06",
            "stacks": [
                {"value": 31000, "color": {"name": "Hardware"}},
                {"value": 30080, "color": {"name": "Software"}},
                {"value": 5584, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Sep 06",
            "stacks": [
                {"value": 280000, "color": {"name": "Hardware"}},
                {"value": 9850, "color": {"name": "Software"}},
                {"value": 29387, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Oct 06",
            "stacks": [
                {"value": 134000, "color": {"name": "Hardware"}},
                {"value": 17000, "color": {"name": "Software"}},
                {"value": 300000, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Nov 06",
            "stacks": [
                {"value": 23000, "color": {"name": "Hardware"}},
                {"value": 580, "color": {"name": "Software"}},
                {"value": 350, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Dec 06",
            "stacks": [
                {"value": 80000, "color": {"name": "Hardware"}},
                {"value": 755, "color": {"name": "Software"}},
                {"value": 400, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Feb 07",
            "stacks": [
                {"value": 55000, "color": {"name": "Hardware"}},
                {"value": 901, "color": {"name": "Software"}},
                {"value": 1300, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Mar 07",
            "stacks": [
                {"value": 128008, "color": {"name": "Hardware"}},
                {"value": 21000, "color": {"name": "Software"}},
                {"value": 16000, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Apr 07",
            "stacks": [
                {"value": 85041, "color": {"name": "Hardware"}},
                {"value": 371, "color": {"name": "Software"}},
                {"value": 890, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "May 07",
            "stacks": [
                {"value": 93500, "color": {"name": "Hardware"}},
                {"value": 120043, "color": {"name": "Software"}},
                {"value": 90, "color": {"name": "Office Equipment"}}
            ]
        },
        {
            "type": "stacked_bar",
            "key": "Jun 07",
            "stacks": [
                {"value": 230, "color": {"name": "Hardware"}},
                {"value": 313, "color": {"name": "Software"}},
                {"value": 190, "color": {"name": "Office Equipment"}}
            ]
        },
    ]
}

let stacked3 = {
    "meta": {
        "title": "",
        "x_title": "",
        "y_title": "",
        "y_unit": "pt",
        "width": 450,
    },
    "marks": [
        {
            "type": "stacked_bar",
            "key": "2002",
            "stacks": [
                {"value": 5, "color": "red", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 82, "color": "blue", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 10, "color": "purple", "label":{"position": "middle", "format": "%vpt"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2003",
            "stacks": [
                {"value": 11, "color": "red", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 60, "color": "blue", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 15, "color": "purple", "label":{"position": "middle", "format": "%vpt"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2004",
            "stacks": [
                {"value": 35, "color": "red", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 43, "color": "blue", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 12, "color": "purple", "label":{"position": "middle", "format": "%vpt"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2005",
            "stacks": [
                {"value": 8, "color": "red", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 55, "color": "blue", "label":{"position": "middle", "format": "%vpt"}},
                {"value": 5, "color": "purple", "label":{"position": "middle", "format": "%vpt"}},
            ]
        },
    ]
}






let example_specs = [
    {name: 'simple1', spec: simple1},
    {name: 'stacked1', spec: stacked1},
    {name: 'stacked2', spec: stacked2},
    {name: 'stacked3', spec: stacked3},
]