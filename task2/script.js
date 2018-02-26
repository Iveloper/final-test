var arr = [2, 5, 8, 4, 1, 12];
var temp;
function firstTask(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=0; j < i; j++){
            if(arr[j] > arr[i]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
    console.log(arr);
}
firstTask(arr);



var text = "The quick brown fox jumps over the lazy dog";
function secondTask(text){
    var split = text.split(" ");
    for(var i=0; i<split.length; i++){
        if(split[i].length > 4){
            console.log(split[i]);
        }
    }
}

secondTask(text);

var items = [
    {
        id: 1,
        title: "Item 1",
        price: 4.3
    },
    {
        id: 2,
        title: "Item 2",
        price: 2.0
    },
    {
        id: 3,
        title: "Item 3",
        price: 6.5
    },
    {
        id: 4,
        title: "Item 4",
        price: 1.5
    }
];

function lastTask(items){
    items.sort(function(a, b){
        return a.price-b.price;
    })
    console.log(items);
}
lastTask(items);

setInterval(function(){
    var node = document.createElement("P");
    var textnode = document.createTextNode("repetition is fun ");
    var final = node.appendChild(textnode);
    document.getElementById("container").appendChild(final);
    }, 1000);

// setTimeout(function(){
//     // document.getElementById("images").style.rotateY(180deg);
// }, 2000);