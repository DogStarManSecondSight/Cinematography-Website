var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener ("input", add);
numTwo.addEventListener ("input", add);

numOne.addEventListener ("click", picLink);
numTwo.addEventListener ("click", picLink);


function picLink (){

    var picId = this.attributes ["data-img"].value;

    var pic = document.getElementsById(picId);

    console.log(this);
}



    function add(){

        var one = parseFloat(numOne.value) || 0;
        var two = parseFloat(numTwo.value) || 0;
        addSum.innerHTML = one+two;

    } ;

