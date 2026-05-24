import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
    productName: string;
    quantity: number;
};

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 3 },
    { productName: 'Luiggi', quantity: 8 },
]

export function FirstStepsApp() {

    return (
    <>
        <h1>Carrito de compras</h1>

        {
            itemsInCart.map( ({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName}  quantity={quantity} />
            ) )
        }

        {/* <ItemCounter name="Ninetendo Switch 2"  quantuty={2}/>
        <ItemCounter name="Pro Controller" quantuty={ 3 } />
        <ItemCounter name="Super Smash" quantuty={ 4 }/>
        <ItemCounter name="Luiggi" quantuty={ 5 }/> */}
    </>
    )
}




// copia del archivo practico anteriormente
// export function FirstStepsApp() {

//     return (
//     <>
//         <h1>Hola Mundo!!</h1>
//         <p>Esto es un parrafo</p>

//         <button>Click me</button>

//         <div>
//             <h2>Hola dentro de un div</h2>
//         </div>
//     </>
//     )
// }