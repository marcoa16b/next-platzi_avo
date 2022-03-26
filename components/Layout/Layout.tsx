import React from 'react';
import Navbar from '@components/Navbar/Navbar';

// import '../style.css';
import styles from './layout.module.css';

// Agregamos a el archivo "tsconfig.json" la configuracion para 
// poder usar "@components" y simplificar las rutas.

// Es importante agregar las siguientes lineas para que funcione:
// "baseUrl": "./", //        <-- para que reconozca la raiz
// "paths": { //              <-- le indicamos las rutas
//   "@database": [
//     "database/db.ts"
//   ],
//   "@cors": ["cors-middleware.ts"],
//   "@components/*": ["components/*"],
// },

const Layout: React.FC  = ({ children }) => {
  return (
    // <div className='container'> <-- para poner los estilos convencionales (.css)
    // <div className={styles.container}> 
    // {/* ^-- De esta forma se agregan los estilos con module.css */}
    <div>
      <Navbar />
        {children}
      <footer className="container">This is the footer</footer>

      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  );
};

export default Layout;