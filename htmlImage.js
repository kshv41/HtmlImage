function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
    this.render = 'standard render service';
}

HtmlElement.prototype.focus = function (){
    console.log('focused');
}

function HtmlSelectElement(array){
    HtmlElement.call(this);
    this.items = array;
    this.addItem = function(item){
        this.items.push(item);
    };
    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }
}

function HtmlImageElement(src){
    HtmlElement.call(this);
    this.src = src;
    this.render = 'this is an image element';
}

HtmlImageElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// h = new HtmlImageElement();

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for(let element of elements)
    console.log(element.render);