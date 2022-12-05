

const cleanData = (value: string[]) => {

    //Remove empty falsie values
    const cleanRaw = value?.filter((item: string) => item);
   
    //Remove duplicates;
    const uniqueArray = cleanRaw?.filter(function(item, pos) {
        return cleanRaw?.indexOf(item) === pos;
    })
    
    return uniqueArray;
}

export default cleanData;