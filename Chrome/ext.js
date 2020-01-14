selection = window.getSelection()
range = selection.getRangeAt(0)

// reemplazar el substring seleccionado 1 
range.startContainer.parentElement.innerHTML = range
    .startContainer
    .parentElement
    .innerHTML
    .replace(range.startContainer.substringData(
        range.startOffset, range.endOffset - range.startOffset), 
        "<span style='background-color:yellow;'>" + range.startContainer.substringData(range.startOffset, range.endOffset - range.startOffset) + "</span>"
    )            

// reemplazar el substring seleccionado 2
range.endContainer.parentElement.innerHTML = range
    .endContainer
    .parentElement
    .innerHTML
    .replace(range.endContainer.substringData(
        range.startOffset, range.endOffset - range.startOffset), 
        "<span style='background-color:yellow;'>" + range.endContainer.substringData(range.startOffset, range.endOffset - range.startOffset) + "</span>"
    )   
