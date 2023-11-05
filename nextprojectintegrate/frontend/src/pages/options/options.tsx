'use client'
import Image from 'next/image'
import styles from './page.module.css'

function options() {
  return (
    <div>
      <header>
        {/* Logo */}
        <img
          src="/logoimg2.webp"
          alt="Logo da Empresa"
          style={{ width: '150px', marginLeft: '10px' }}
        />
      </header>
      <main style={{ display: 'flex', height: '100vh' }}>
      <div className='divimagem' style={{ }}>
          {/* Div com imagem (50% da tela) */}
          <img
            src="/cadastro (3).png"
            alt="Imagem"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </div>
        <div style={{ flex: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1D1D47' }}>
          {/* Div com formulário (50% da tela) */}
{/*           <form style={{ display: 'flex', flexDirection: 'column', background: 'white', width: '90%', height: '60%', justifyContent: 'center', alignItems: 'center', borderRadius: '4%' }}>
            <h3 style={{ fontFamily: 'Roboto', fontSize: '45px', color: 'blue', gap: '10px' }}>Login</h3> */}
           <form style={{ display: 'flex', flexDirection: 'column', background: 'white', width: '70%', height: '80%', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'Roboto', fontSize: '4em', flexWrap: 'wrap', textAlign: 'center' }}>Entrar<br/> Como</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
              <button style={{padding: '24px', marginBottom: '15px', width: '80%', fontSize: '1.8em'}} type="submit">Visitante</button>
              <button style={{padding: '24px', marginBottom: '15px', width: '80%', fontSize: '1.8em'}} type="submit">Autor</button>
              <button style={{padding: '24px', marginBottom: '15px', width: '80%', fontSize: '1.8em'}} type="submit">Avaliador</button>
            </nav>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default options;

