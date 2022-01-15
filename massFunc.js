function twoMass(arr1 = [
        5,
        4,
        'word,',
        7,
        57
    ], arr2 = [
        1,
        4,
        7,
        5
    ]) {
    if(arr1.length === arr2.length){
        console.log('same')
    }else if(arr1.length > arr2.length){
        console.log('arr1 longer than arr2')
    }else{
        console.log('arr2 longer than arr1')
    }
}
twoMass()

