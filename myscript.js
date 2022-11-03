class person{
    name = "vetri"
    print(){
        console.log("welcome vetri");
    }
}

class employee extends person{
    position  = "software engineer";

    print(){
        super.print();
        console.log("bye vetri");
    }
}
const obj = new employee();
console.log("employeee name "+obj.name);
obj.print();