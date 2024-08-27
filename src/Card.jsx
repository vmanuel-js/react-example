function Card({ portadaDeAlbum, nombreDeAutor, titulo }) {
  return (
    <div className='flex'>
      <div className='group m-3 block w-48 rounded-lg bg-black p-3 text-white hover:bg-[#353535]'>
        <div className='relative'>
          <img className='group w-48 flex-col justify-center rounded-lg' src={portadaDeAlbum} />
          <div className='absolute bottom-0 right-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] transition delay-150 ease-in-out hover:-translate-y-1 group-hover:flex'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6 11L6 4L10.5 7.5L6 11Z' fill='black'></path>
            </svg>
          </div>
        </div>
        <h1 className='pt-4 text-2xl'>{titulo}</h1>
        <a
          href='hhttps://open.spotify.com/intl-es/artist/2R21vXR83lH98kGeO99Y66'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#a2a2a2] hover:underline'
        >
          {nombreDeAutor}
        </a>
      </div>
    </div>
  );
}
//Para que podamos usar nuestros componentes en otros sitios
export default Card;
