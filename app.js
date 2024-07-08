var but = document.querySelector('.sumbit_items');
var but2 = document.querySelectorAll('.butt');
var bar = document.querySelector('.filter');
console.log(but);

const additem = (e)=> {
    e.preventDefault();

    var element = document.querySelector('.items_added');
    var item_added = element.value;
     element.value = null;
    console.log(item_added);

    var newli = document.createElement('li');
    
    var newbutt = document.createElement('button');
    newbutt.className = 'butt';
    newbutt.addEventListener("click" , ()=>{
        var buttparent = newbutt.parentElement;
        var grandfather = document.getElementById('unorder_list');
        grandfather.removeChild(buttparent);
    });
    newli.className = 'items';
    newli.appendChild(document.createTextNode(item_added));
    newbutt.appendChild(document.createTextNode("X"));
    newli.appendChild(newbutt);
    var parent = document.querySelector('#unorder_list');
    parent.appendChild(newli);
}

but2.forEach((val) =>{
    val.addEventListener("click" , ()=>{
        var buttparent = val.parentElement;
        var grandfather = document.getElementById('unorder_list');
        grandfather.removeChild(buttparent);
    });
});

function filteritems(e){
     var text = e.target.value.toLowerCase();
     var itemlist = document.querySelector('#unorder_list');
     var diff = itemlist.getElementsByTagName('li');

     Array.from(diff).forEach( (item)=>{
        var cont = item.firstChild.textContent;
        if(cont.toLowerCase().indexOf(text)==-1){
           item.style.display = 'none';
        }
        else{
            item.style.display = 'block flex';
        }
     });

}
        
but.addEventListener('click', additem);
bar.addEventListener('keyup' , filteritems);
