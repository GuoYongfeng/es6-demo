class Animal {
    constructor(name){
        this.name = name;
    }
    // type = 'water'这里的意思是当type未传值的时候默认是'water'
    drink(type = 'water'){
        // 使用了箭头函数
        setInterval( () => {
            // 模板字符串
            console.log(`${this.name} want to drink ${type}`)
        }, 1000)
    }
}

let pig = new Animal('pig');

console.log(pig.drink('milk'));
