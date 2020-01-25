function containsName(color, searchTerm){
    return color.name.toLowerCase().includes(searchTerm.toLowerCase());
}

function filterList({list, searchTerm}){
    return list.filter(color => containsName(color, searchTerm))
}

export { filterList };