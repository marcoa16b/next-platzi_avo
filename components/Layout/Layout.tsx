import React from 'react';
import Navbar from '@components/Navbar/Navbar';
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
    <div>
      <Navbar />
        {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;