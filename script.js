class Product{
    #id;
    title;
    manufacture;
    price;
    constructor(id, title, manufacture, price) {
        this.#id = id;
        this._title = title;
        this._manufacture = manufacture;
        this._price = price;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get manufacture() {
        return this._manufacture;
    }

    set manufacture(value) {
        this._manufacture = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

class Milk extends Product{
    fat;
    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this._fat = fat;
    }

    get fat() {
        return this._fat;
    }

    set fat(value) {
        this._fat = value;
    }
}

class Chocolate extends Product{
    kind;
    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this._kind = kind;
    }

    get kind() {
        return this._kind;
    }

    set kind(value) {
        this._kind = value;
    }
}

class Wine extends Product{
    alcohol;
    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this._alcohol = alcohol;
    }

    get alcohol() {
        return this._alcohol;
    }

    set alcohol(value) {
        this._alcohol = value;
    }
}



class Store{
    products;
    constructor() {
        this.products = [];
    }
    add(product){
        if(!product){
            this.products.push(product);
        }
    }
    getAll(){
        return[...this.products];
    }
    getByType(type){
        return this.products.filter (product =>
                 product.constructor.name === type);
        }
}