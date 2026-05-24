import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react'
import { MyAwesome } from './MyAwesomeApp';


describe('MyAwesomeApp', () => {

    test('should render firstName and LastName', () => {
        //console.log(document.body);

        // const { container }  = render(<MyAwesome/>);
        // console.log(container.innerHTML);

        const { container } = render(<MyAwesome/>);
        //screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        expect(h1?.innerHTML).toContain('Andres');
        expect(h3?.innerHTML).toContain('Paternina');
    });

    test('should render firstName and LastName -- screen', () => {
        render(<MyAwesome/>);
        screen.debug();

        // const h1 = screen.getAllByRole('heading', {
        //     level: 1
        // });

        const h1 = screen.getByTestId('first-name-title')
        expect(h1.innerHTML).toContain('Andres');
    });

    test('should match snapshot', () => {

        const { container } = render(<MyAwesome/>);
        expect(container).toMatchSnapshot();

    });

    test('should match snapshot', () => {

        render(<MyAwesome/>);
        expect(screen.getByTestId('div-app')).toMatchSnapshot()

    });
});





// describe('MyAwesomeApp', () => {

//     test('should render firstName and LastName', () => {
//         //console.log(document.body);

//         const { container } = render(<MyAwesome/>);
//         screen.debug();

//         // const { container }  = render(<MyAwesome/>);

//         // console.log(container.innerHTML);

//     });
// });