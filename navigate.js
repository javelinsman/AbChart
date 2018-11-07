function addNavigator(cdg, cdg_area){

    let pointers = {
        guides: cdg.children[0],
        meta: cdg.children[1],
        marks: cdg.children[2],
        axes: cdg.children[3],
        insights: cdg.children[4]
    }
    let current = "guides"

    function update(){
        cdg_area.selectAll("*").classed("selected_guide", false)
        pointers.guides.vis.classed("selected_guide", true)
        cdg_area.selectAll("*").classed("selected_meta", false)
        pointers.meta.vis.classed("selected_meta", true)
        cdg_area.selectAll("*").classed("selected_marks", false)
        pointers.marks.vis.classed("selected_marks", true)
        cdg_area.selectAll("*").classed("selected_axes", false)
        pointers.axes.vis.classed("selected_axes", true)
        cdg_area.selectAll("*").classed("selected_insights", false)
        pointers.insights.vis.classed("selected_insights", true)
        cdg_area.selectAll("*").classed("current_pointer", false)
        pointers[current].vis.classed("current_pointer", true)
    }

    let keys = {
    }
    for(let i=97;i<=122;i++){
        keys[String.fromCharCode(i)] = i - 32
    }

    function next(node, flag=true){
        if(flag && node.children.length > 0) return node.children[0]
        if(node.parentElement == cdg) return node.children[0]
        if(node.nextSibling !== null) return node.nextSibling
        return next(node.parentElement, false)
    }

    function navigator_keydown_listener(event) {
        if(event.keyCode === keys.g){
            if(current === 'guides') pointers.guides = next(pointers.guides)
            current = 'guides'
        }
        if(event.keyCode === keys.m){
            if(current === 'meta') pointers.meta = next(pointers.meta)
            current = 'meta'
        }
        if(event.keyCode === keys.d){
            if(current === 'marks') pointers.marks = next(pointers.marks)
            current = 'marks'
        }
        if(event.keyCode === keys.x){
            if(current === 'axes') pointers.axes = next(pointers.axes)
            current = 'axes'
        }
        if(event.keyCode === keys.i){
            if(current === 'insights') pointers.insights = next(pointers.insights)
            current = 'insights'
        }
        if(event.keyCode === keys.n){
            pointers[current] = next(pointers[current])
        }
        update()
    }
    update()
    return navigator_keydown_listener
}