const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};
  
DomElement.prototype.createElement = function() {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1));
    }
    else if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
    }
    elem.style.cssText =               
    `height:${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;`;
    document.body.append(elem);
};

let text = prompt('Введите текст', 'Привет');  
if (text[0] === '.' || text[0] === '#') {
    const domElem = new DomElement(text, 200, 200, 'red', 14);
    domElem.createElement();
} else {
    alert('Вы ввели некорректные данные.');
}
