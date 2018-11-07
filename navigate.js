function addNavigator(cdg, cdg_area){

    let guides = cdg.children[0]
    let meta = cdg.children[1]
    let marks = cdg.children[2]
    let axes = cdg.children[3]
    let insights = cdg.children[4]
    let current = guides

    function update(){
        cdg_area.selectAll("*").classed("selected_guide", false)
        guides.vis.classed("selected_guide", true)
        cdg_area.selectAll("*").classed("selected_meta", false)
        meta.vis.classed("selected_meta", true)
        cdg_area.selectAll("*").classed("selected_marks", false)
        marks.vis.classed("selected_marks", true)
        cdg_area.selectAll("*").classed("selected_axes", false)
        axes.vis.classed("selected_axes", true)
        cdg_area.selectAll("*").classed("selected_insights", false)
        insights.vis.classed("selected_insights", true)
        cdg_area.selectAll("*").classed("current_pointer", false)
        current.vis.classed("current_pointer", true)
    }

    let keys = {
        g: 71,
        m: 77,
        d: 68,
        x: 88,
        i: 73
    }

    function next(node, flag=true){
        if(flag && node.children.length > 0) return node.children[0]
        if(node.parentElement == cdg) return node.children[0]
        if(node.nextSibling !== null) return node.nextSibling
        return next(node.parentElement, false)
    }

    function navigator_keydown_listener(event) {
        if(event.keyCode === keys.g){
            if(current === guides) guides = next(guides)
            current = guides
        }
        if(event.keyCode === keys.m){
            if(current === meta) meta = next(meta)
            current = meta
        }
        if(event.keyCode === keys.d){
            if(current === marks) marks = next(marks)
            current = marks
        }
        if(event.keyCode === keys.x){
            if(current === axes) axes = next(axes)
            current = axes
        }
        if(event.keyCode === keys.i){
            if(current === insights) insights = next(insights)
            current = insights
        }
        update()
    }
    update()
    return navigator_keydown_listener
}