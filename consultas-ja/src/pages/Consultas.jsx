import LoginButton from '../components/LoginButton'

function Consultas({ username }) {
  return (
    <div className='bg-orange-500'>
      <h1 className='text-white'>Consultas</h1>
      <h2>{username}</h2>
      <LoginButton />
    </div>
  );
}

export default Consultas;
