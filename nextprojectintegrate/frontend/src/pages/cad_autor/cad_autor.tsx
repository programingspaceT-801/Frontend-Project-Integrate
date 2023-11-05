'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

function cadAutor() {
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
        <div className='divimagem' style={{}}>
          {/* Div com imagem (50% da tela) */}
          <img
            src="/cadastro (2).png"
            alt="Imagem"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </div>
        <div style={{ flex: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1D1D47' }}>
          {/* Div com formulário (50% da tela) */}
          {/*           <form style={{ display: 'flex', flexDirection: 'column', background: 'white', width: '90%', height: '60%', justifyContent: 'center', alignItems: 'center', borderRadius: '4%' }}>
            <h3 style={{ fontFamily: 'Roboto', fontSize: '45px', color: 'blue', gap: '10px' }}>Login</h3> */}
          <form style={{ display: 'flex', flexDirection: 'column', background: 'white', width: '70%', height: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'Roboto', fontSize: '4em', marginBottom: '30px' }}>CADASTRE-SE</h3>
              <label style={{ width: '70%', fontSize: '1.5em' }} htmlFor="email">EMAIL</label>
              <input
                type="text"
                id="email"
                style={{ border: '2px solid #1D1D47', width: '70%', height: '40px', marginBottom: '20px' }}
              />
              <label style={{ width: '70%', fontSize: '1.5em' }} htmlFor="senha">PASSWORD</label>
              <input
                type="password"
                id="senha"
                style={{ border: '2px solid #1D1D47', width: '70%', height: '40px', marginBottom: '20px' }}
              />

              <label style={{ width: '70%', fontSize: '1.5em' }} htmlFor="AFILIAÇÃO">AFILIAÇÃO</label>
              <input
                type="password"
                id="senha"
                style={{ border: '2px solid #1D1D47', width: '70%', height: '40px', marginBottom: '20px' }}
              />

              <label style={{ width: '70%', fontSize: '1.5em' }} htmlFor="ORCID">ORCID</label>
              <input
                type="password"
                id="senha"
                style={{ border: '2px solid #1D1D47', width: '70%', height: '40px', marginBottom: '20px' }}
              />

              <nav style={{ display: 'flex', paddingTop: '10px', justifyContent: 'space-around', width: '90%' }}>
                <Link href="./options">
                  <button style={{ fontSize: '1.5em' }} type="submit">Cadastrar</button>
                </Link>
              </nav>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default cadAutor;

