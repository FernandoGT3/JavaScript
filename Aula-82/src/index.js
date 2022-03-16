import 'core-js/stable'
import 'regenerator-runtime/runtime';
//importamos esses dois para que a aplicação rode em navegadores mais antigos
//sem eles ao "transpilar" o código js moderno para antigo, o regenerator-runtime não é definido
// e as promises por exemplo não existem em navegadores antigos, precisamos então, alterá-los, por isso o core-js
import executa from './modules/promises';

import './assets/css/styles.css'

executa();