import type { CSSProperties } from 'react';

const firstName = 'Andres';
const lastName = 'Paternina';

const favoriteGames = [ 'Elden ring', 'Smash', 'Metal gerad' ];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada',
}

const myStyles: CSSProperties = { 
        backgroundColor: '#067821' ,
        borderRadius: 10,
        padding: 10,
        marginTop: 40,
}

export function MyAwesome() {
    return (
    <div data-testid='div-app' >
        <h1 data-testid='first-name-title' > {firstName} </h1>
        <h3> {lastName} </h3>

        <p>{2 + 2}</p>
        <p className='mi-clase-favorita' > {favoriteGames} </p>
        <h1> {isActive ? 'activo' : 'No activo' } </h1>

        <p style={myStyles} > {JSON.stringify(address)} </p>
    </div>
    );
};


// export function MyAwesome() {
//     return (
//     <>
//         <h1> Andres </h1>
//         <h3> Paternina </h3>
//     </>
//     )
// }
