import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className='flex'>
      <Card
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
      />
    </div>
  );
}

export default App;
