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

let stacked4 = {
    meta: {
        title: "",
        x_title: "",
        y_title: "",
        y_unit: "%",
        colors: {
            "Barley": "rgb(152, 153, 157)",
            "Wheat": "rgb(116, 117, 119)",
            "Rye": "rgb(209, 210, 212)"
        }
    },
    marks: [
        {
            type: "stacked_bar",
            key: "20X1",
            stacks: [
                {value: 12, color: {name: "Barley"}},
                {value: 43, color: {name: "Wheat"}},
                {value: 45, color: {name: "Rye"}},
            ]
        },
        {
            type: "stacked_bar",
            key: "20X2",
            stacks: [
                {value: 7, color: {name: "Barley"}},
                {value: 39, color: {name: "Wheat"}},
                {value: 54, color: {name: "Rye"}},
            ]
        },
        {
            type: "stacked_bar",
            key: "20X3",
            stacks: [
                {value: 7, color: {name: "Barley"}},
                {value: 41, color: {name: "Wheat"}},
                {value: 52, color: {name: "Rye"}},
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

let histogram1 = {
    meta: {
        title: "",
        x_title: "",
        y_title: "",
        gridline: "grid",
        width: 600,
        height: 450,
        orientation: "horizontal",
        x_tick_rotate: "15",
    },
    marks: [
        {
            type: "bar",
            key: "January",
            bar: {value: 82000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "February",
            bar: {value: 60000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "March",
            bar: {value: 35000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "April",
            bar: {value: 20000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "May",
            bar: {value: 25000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "June",
            bar: {value: 13000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "July",
            bar: {value: 21000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "August",
            bar: {value: 32000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "September",
            bar: {value: 29000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "October",
            bar: {value: 45000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "November",
            bar: {value: 72000, color: "gold", label:{position:"top", format:"%v"}}
        },
        {
            type: "bar",
            key: "December",
            bar: {value: 65000, color: "gold", label:{position:"top", format:"%v"}}
        },

    ]
}

let histogram2 = {
    meta: {
        title: "Pupil/Teacher Ratio in Primary Schools, January 1997",
        x_title: "Pupil/Teacher Ratio",
        y_title: "Percentage",
        orientation: "horizontal",
        x_tick_rotate: "45"
    },
    marks: [
        { type: "bar", key: "Less than 16", bar: {value: 2, color: "skyblue"}, },
        { type: "bar", key: "16", bar: {value: 1, color: "skyblue"}, },
        { type: "bar", key: "17", bar: {value: 2, color: "skyblue"}, },
        { type: "bar", key: "18", bar: {value: 3, color: "skyblue"}, },
        { type: "bar", key: "19", bar: {value: 4, color: "skyblue"}, },
        { type: "bar", key: "20", bar: {value: 6, color: "skyblue"}, },
        { type: "bar", key: "21", bar: {value: 8, color: "skyblue"}, },
        { type: "bar", key: "22", bar: {value: 11, color: "skyblue"}, },
        { type: "bar", key: "23", bar: {value: 13, color: "skyblue"}, },
        { type: "bar", key: "24", bar: {value: 14, color: "skyblue"}, },
        { type: "bar", key: "25", bar: {value: 12, color: "skyblue"}, },
        { type: "bar", key: "26", bar: {value: 5, color: "skyblue"}, },
        { type: "bar", key: "Over 27", bar: {value: 4, color: "skyblue"}, },
    ]
}

let sorted1 = {
    meta: {
        title: "All Incidents by Assignment",
        x_title: "",
        y_title: "Incidents",
        orientation: "",
        x_tick_rotate: "15",
        gridline: "grid"
    },
    marks: [
        { type: "bar", key: "ITIL UserV", bar: {value: 17, color: "skyblue"}, },
        { type: "bar", key: "David Loo", bar: {value: 10, color: "darkgreen"}, },
        { type: "bar", key: "Don Goodlife", bar: {value: 7, color: "yellow"}, },
        { type: "bar", key: "Beth Anglin", bar: {value: 5, color: "darkblue"}, },
        { type: "bar", key: "Howard Johnson", bar: {value: 3, color: "orange"}, },
        { type: "bar", key: "Luke Wilson", bar: {value: 3, color: "purple"}, },
        { type: "bar", key: "Bud Richman", bar: {value: 2, color: "blue"}, },
        { type: "bar", key: "Charlie Whitherspoon", bar: {value: 2, color: "green"}, },
        { type: "bar", key: "Bow Ruggeri", bar: {value: 1, color: "cyan"}, },
        { type: "bar", key: "Fred Luddy", bar: {value: 1, color: "gray"}, },
        { type: "bar", key: "Other", bar: {value: 1, color: "pink"}, },
    ]
}

let example_specs = [
    {name: 'simple1', spec: simple1},
    {name: 'stacked1', spec: stacked1},
    {name: 'stacked2', spec: stacked2},
    {name: 'stacked3', spec: stacked3},
    {name: 'stacked4', spec: stacked4},
    {name: 'grouped1', spec: grouped1},
    {name: 'grouped2', spec: grouped2},
    {name: 'grouped3', spec: grouped3},
    {name: 'histogram1', spec: histogram1},
    {name: 'histogram2', spec: histogram2},
    {name: 'sorted1', spec: sorted1},
]