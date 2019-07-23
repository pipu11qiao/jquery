var convert = function(data){
    for (var i = 0, len = data.length; i < len; i++) {
        var obj =  data[i];
    if(obj.children && obj.children.lenght > 0){
        convert(obj.children);
        obj.n = obj.text;
        obj.id = obj.value;
        obj.c = obj.children;
    }
    }
}
