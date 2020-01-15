selection = window.getSelection()
range = selection.getRangeAt(0)

// reemplazar el substring seleccionado 1 
range.startContainer.parentNode.innerHTML = range
    .startContainer
    .parentNode
    .innerHTML
    .replace(range.startContainer.substringData(
        range.startOffset, range.endOffset - range.startOffset), 
        "<span style='background-color:yellow;'>" + range.startContainer.substringData(range.startOffset, range.endOffset - range.startOffset) + "</span>"
    )            

// reemplazar el substring seleccionado 2
range.endContainer.parentNode.innerHTML = range
    .endContainer
    .parentNode
    .innerHTML
    .replace(range.endContainer.substringData(
        range.startOffset, range.endOffset - range.startOffset), 
        "<span style='background-color:yellow;'>" + range.endContainer.substringData(range.startOffset, range.endOffset - range.startOffset) + "</span>"
    )   
