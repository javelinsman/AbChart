let convert_button = d3.select("body").append("div").append("button")
    .text("Convert to CDG")
    .on("click", convert)

let cdg_area = d3.select("body").append("div")

function convert(){
    let spec = barchart_spec
    let chart = d3.select("#barchart")

    let tag = (s) => {
        return {
            "tag": s, 
            "attr": {},
            "prop": [],
            "value": [],
            "append": function(name){
                let newobj = tag(name)
                this.value.push(newobj)
                return newobj
            }
        }
    }

    let body = tag("body")
    let axes = body.append("axes")
    let x = axes.append("x")

    return convert_to_xml(body)
}

function tag_string(tag_name, attributes, properties){
    segments = []
    segments.push(tag_name)
    if(attributes) for(let [key, value] of Object.entries(attributes)){
        segments.push(key + "=\"" + value + "\"")
    }
    if(properties) for(let prop of properties){
        segments.push(prop)
    }
    let cap = (s) => ("<" + s + ">")
    return [cap(segments.join(" ")), cap("/" + tag_name)]
}

function convert_to_xml(obj, indent_leap=4, indent=0){
    let idt = " ".repeat(indent)
    let [opentag, closetag] = tag_string(obj.tag, obj.attr, obj.prop)
    if(typeof obj.value === 'object'){
        let rets = []
        for(let child of obj.value){
            rets.push(convert_to_xml(child, indent_leap, indent + indent_leap))
        }
        if(rets.length) return idt + opentag + "\n" + rets.join('\n') + "\n" + idt + closetag
        else return idt + opentag + closetag
    }
    else if(obj.value) return idt + opentag + obj.value + closetag
    else return idt + opentag + closetag
}

console.log(convert())