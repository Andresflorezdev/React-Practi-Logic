import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

//import { ItemCounter } from './shopping-cart/ItemCounter';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn( (_props: unknown) => {
    return (<div data-testid="ItemCounter" />)
});

vi.mock('./shopping-cart/ItemCounter',() => ({
    ItemCounter: (props: unknown) =>  mockItemCounter(props),
}))



// el mock es algo fiptisio con el fin de hacer la prueba mas facil
// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div 
//     data-testid="ItemCounter" 
//     name={props.name} 
//     quantity={props.quantity} />,
// }));


describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks()
    });

    test('should match snapshot', () => {
        const {container} = render(<FirstStepsApp/>)
        expect(container).toMatchSnapshot();
        screen.debug();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp/>)

        const itemCounters = screen.getAllByTestId('ItemCounter')
        // antes de hacer el expect, siempre se debe imprimir primero para saber que valor arrojara
        //console.log(itemCounters.length);
        // luego se pone
        expect(itemCounters.length).toBe(3);

        screen.debug()
    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp/>)

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Nintendo Switch 2', quantity: 1 },
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Pro Controller', quantity: 3 }
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Luiggi', quantity: 8 },
        );

    });


});