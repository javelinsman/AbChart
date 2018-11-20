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
        "width": 500,
        "gridline": "grid"
    },
    "marks": [
        {
            "type": "stacked_bar",
            "key": "2002",
            "stacks": [
                {"value": 5, "color": "red", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 82, "color": "blue", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 10, "color": "purple", "label":{"position": "middle", "format": "%v%u"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2003",
            "stacks": [
                {"value": 11, "color": "red", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 60, "color": "blue", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 15, "color": "purple", "label":{"position": "middle", "format": "%v%u"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2004",
            "stacks": [
                {"value": 35, "color": "red", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 43, "color": "blue", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 12, "color": "purple", "label":{"position": "middle", "format": "%v%u"}},
            ]
        },
        {
            "type": "stacked_bar",
            "key": "2005",
            "stacks": [
                {"value": 8, "color": "red", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 55, "color": "blue", "label":{"position": "middle", "format": "%v%u"}},
                {"value": 5, "color": "purple", "label":{"position": "middle", "format": "%v%u"}},
            ]
        },
    ]
}

let grouped1 = {
    meta: {
        title: "",
        x_title: "",
        y_title: "",
        gridline: "horizontal",
        colors: {
            "BEFORE PROGRAM": "rgb(0, 169, 167)",
            "AFTER PROGRAM": "rgb(26, 57, 103)",
        },
        width: 850,
        x_tick_rotate: "30",
    },
    marks: [
        {
            type: "grouped_bar",
            key: "WORK RETURN INTEREST",
            groups: [
                {type: "bar", bar: {value: 1.8, color: {"name": "BEFORE PROGRAM"}, label:{position: "top", format: "%v"}}},
                {type: "bar", bar: {value: 4.4, color: {"name": "AFTER PROGRAM"}, label:{position: "top", format: "%v"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "SLEEP",
            groups: [
                {type: "bar", bar: {value: 2.8, color: {"name": "BEFORE PROGRAM"}, label:{position: "top", format: "%v"}}},
                {type: "bar", bar: {value: 6.1, color: {"name": "AFTER PROGRAM"}, label:{position: "top", format: "%v"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "ACTIVITY LEVEL",
            groups: [
                {type: "bar", bar: {value: 2.8, color: {"name": "BEFORE PROGRAM"}, label:{position: "top", format: "%v"}}},
                {type: "bar", bar: {value: 6.3, color: {"name": "AFTER PROGRAM"}, label:{position: "top", format: "%v"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "MOOD",
            groups: [
                {type: "bar", bar: {value: 3.0, color: {"name": "BEFORE PROGRAM"}, label:{position: "top", format: "%v"}}},
                {type: "bar", bar: {value: 7.3, color: {"name": "AFTER PROGRAM"}, label:{position: "top", format: "%v"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "ABILITY TO MANAGE PAIN",
            groups: [
                {type: "bar", bar: {value: 3.1, color: {"name": "BEFORE PROGRAM"}, label:{position: "top", format: "%v"}}},
                {type: "bar", bar: {value: 6.7, color: {"name": "AFTER PROGRAM"}, label:{position: "top", format: "%v"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "PAIN LEVEL",
            groups: [
                {type: "bar", bar: {value: 6.9, color: {"name": "BEFORE PROGRAM"}, label:{position: "top", format: "%v"}}},
                {type: "bar", bar: {value: 4.6, color: {"name": "AFTER PROGRAM"}, label:{position: "top", format: "%v"}}},
            ]
        },
    ]
}

let grouped2 = {
    meta: {
        title: "Applications to 3 US Universities",
        x_title: "Faculty Area",
        y_title: "Number of Student Applications",
        gridline: "horizontal",
        colors: {
            "1990": "blue",
            "2000": "red",
            "2010": "yellowgreen",
        },
        width: 800
    },
    marks: [
        {
            type: "grouped_bar",
            key: "Biology",
            groups: [
                {type: "bar", bar: {value: 3000, color: {"name": "1990"}}},
                {type: "bar", bar: {value: 1500, color: {"name": "2000"}}},
                {type: "bar", bar: {value: 900, color: {"name": "2010"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "Engineering",
            groups: [
                {type: "bar", bar: {value: 4000, color: {"name": "1990"}}},
                {type: "bar", bar: {value: 2500, color: {"name": "2000"}}},
                {type: "bar", bar: {value: 600, color: {"name": "2010"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "Business",
            groups: [
                {type: "bar", bar: {value: 2000, color: {"name": "1990"}}},
                {type: "bar", bar: {value: 3000, color: {"name": "2000"}}},
                {type: "bar", bar: {value: 4000, color: {"name": "2010"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "Social Work",
            groups: [
                {type: "bar", bar: {value: 1000, color: {"name": "1990"}}},
                {type: "bar", bar: {value: 1400, color: {"name": "2000"}}},
                {type: "bar", bar: {value: 1900, color: {"name": "2010"}}},
            ]
        },
    ]
}

let grouped3 = {
    meta: {
        title: "Fitness Report: Runtime and Oxygen Consumed",
        x_title: "Experimental group",
        y_title: "Oxygen consumption",
        subx_title: "Min. to run 15 miles",
        colors: {
            "0": "red",
            "1": "green",
            "2": "blue",
        },
    },
    marks: [
        {
            type: "grouped_bar",
            key: "0",
            groups: [
                {type: "bar", key: "10", bar: {value: 54, color: {"name": "0"}}},
                {type: "bar", key: "12", bar: {value: 45, color: {"name": "0"}}},
                {type: "bar", key: "14", bar: {value: 39, color: {"name": "0"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "1",
            groups: [
                {type: "bar", key: "10", bar: {value: 48, color: {"name": "1"}}},
                {type: "bar", key: "12", bar: {value: 45, color: {"name": "1"}}},
                {type: "bar", key: "14", bar: {value: 36, color: {"name": "1"}}},
            ]
        },
        {
            type: "grouped_bar",
            key: "2",
            groups: [
                {type: "bar", key: "10", bar: {value: 50, color: {"name": "2"}}},
                {type: "bar", key: "12", bar: {value: 43, color: {"name": "2"}}},
                {type: "bar", key: "14", bar: {value: 0, color: {"name": "2"}}},
            ]
        },

    ]
}



let example_specs = [
    {name: 'simple1', spec: simple1},
    {name: 'stacked1', spec: stacked1},
    {name: 'stacked2', spec: stacked2},
    {name: 'stacked3', spec: stacked3},
    {name: 'grouped1', spec: grouped1},
    {name: 'grouped2', spec: grouped2},
    {name: 'grouped3', spec: grouped3},
]