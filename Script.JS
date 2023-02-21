
let Items = [];


function AddItems(product, price){
    let newItem ={
        Products: product,
        Prices : price
    }
    Items.push(newItem)
}

function DisplayItems(){
    Items.forEach((e) => {
        console.log(`Product: ${e.Products} Price:$${e.Prices}`)
    })
}

// function AddCart(Cart) {
//     let Total = Cart.filter( (c) => c.price === ParseFloat(c.price) );
//     for(var i = 0; i <= Cart.Length; i++){
//         let sum = i += c.price
//     }
//     return sum;
    
//     }


