import './App.css';
import Card from './Card';

function App() {
  const user = { nombre: 'Manuel', saludo: 'Buenas tardes!', apellido: 'Jordan' };
  const casilla1 = {
    nombreDeAutor: 'Feid',
    titulo: 'SIXDO',
    portadaDeAlbum: 'https://i.scdn.co/image/ab67616d0000b2737cc7b0d6a82846cd8b158f99',
  };
  const casilla2 = {
    nombreDeAutor: 'Anuel',
    titulo: 'Real Hasta la Muerte',
    portadaDeAlbum:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28CYhx0w4vX7YpatpP4HrKhQwTAgIBbTgYQ&s',
  };
  const casilla3 = {
    nombreDeAutor: 'Eladio Carrión',
    titulo: '3MEN2 KBRN',
    portadaDeAlbum:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZcAXhOsrufdD7o7BCpKyJcsRwtOndcyX5A&s',
  };
  const casilla4 = {
    nombreDeAutor: 'Alvaro Diaz',
    titulo: 'SAYONARA',
    portadaDeAlbum: 'https://i.scdn.co/image/ab67616d0000b273af1e2e143561cf4df9941f5b',
  };
  const casilla5 = {
    nombreDeAutor: 'Duki',
    titulo: 'Antes de Ameri',
    portadaDeAlbum: 'https://i.scdn.co/image/ab67616d0000b273f74269b6ebdb5ab2773c0be9',
  };

  const array = [casilla1, casilla2, casilla3, casilla4, casilla5];

  return (
    <>
      <h2 className='text-4xl font-sans '>
        {user.apellido}, {user.nombre}
      </h2>
      <div className='flex'>
        {/* {array.map((elemento) => (
          <Card
            nombreDeAutor={elemento.nombreDeAutor}
            portadaDeAlbum={elemento.portadaDeAlbum}
            titulo={elemento.titulo}
          ></Card>
        ))} */}
        {array.map(function (elemento) {
          return (
            <Card
              nombreDeAutor={elemento.nombreDeAutor}
              titulo={elemento.titulo}
              portadaDeAlbum={elemento.portadaDeAlbum}
            />
          );
        })}
        {/* <Card
          nombreDeAutor={'Feid'}
          titulo={'SIXDO'}
          portadaDeAlbum={'https://i.scdn.co/image/ab67616d0000b2737cc7b0d6a82846cd8b158f99'}
        />
        <Card
          nombreDeAutor={'Anuel'}
          titulo={'Real Hasta La Muerte'}
          portadaDeAlbum={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28CYhx0w4vX7YpatpP4HrKhQwTAgIBbTgYQ&s'
          }
        />
        <Card
          nombreDeAutor={'Eladio Carrión'}
          titulo={'3MEN2 KBRN'}
          portadaDeAlbum={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZcAXhOsrufdD7o7BCpKyJcsRwtOndcyX5A&s'
          }
        />
        <Card
          nombreDeAutor={'Alvaro Diaz'}
          titulo={'SAYONARA'}
          portadaDeAlbum={'https://i.scdn.co/image/ab67616d0000b273af1e2e143561cf4df9941f5b'}
        />
        <Card
          nombreDeAutor={'Duki'}
          titulo={'Antes de Ameri'}
          portadaDeAlbum={'https://i.scdn.co/image/ab67616d0000b273f74269b6ebdb5ab2773c0be9'}
        /> */}
      </div>
    </>
  );
}

export default App;
