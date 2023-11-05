'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Header, Container } from './stylepage'

function options() {
  return (
    <div>
      <header>
        {/* Logo */}
        <img
          src="/logoimg2.webp"
          alt="Logo da Empresa"
          style={{ width: '150px' }}
        />
      </header>
      <main style={{ display: 'flex', height: '100vh' }}>
      <div className='divimagem' style={{ }}>
          {/* Div com imagem (50% da tela) */}
          <img
            src="/imgPage1.jpg"
            alt="Imagem"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </div>
        <div style={{ flex: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1D1D47' }}>
          {/* Div com formulário (50% da tela) */}
{/*           <form style={{ display: 'flex', flexDirection: 'column', background: 'white', width: '90%', height: '60%', justifyContent: 'center', alignItems: 'center', borderRadius: '4%' }}>
            <h3 style={{ fontFamily: 'Roboto', fontSize: '45px', color: 'blue', gap: '10px' }}>Login</h3> */}
           <form style={{ display: 'flex', flexDirection: 'column', background: 'white', width: '70%', height: '65%', justifyContent: 'center', alignItems: 'center', borderRadius: '4%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'Roboto', fontSize: '45px' }}>Options</h3>
              <label style={{ width: '90%' }} htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                style={{ border: '2px solid #1D1D47', padding: '5px', width: '90%' }}
              />
              <label style={{ width: '90%' }} htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                style={{ border: '2px solid #1D1D47', padding: '5px', width: '90%' }}
              />

            <nav style={{ display: 'flex', paddingTop: '10px', justifyContent: 'space-between', width: '100%'  }}>
              <button type="submit">Cadastrar</button>
              <button type="submit">Entrar</button>
            </nav>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default options;

