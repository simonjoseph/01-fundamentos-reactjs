import styles from './Header.module.css'

import uniTuendaLogo from '../assets/uniTuenda-logo.png'

export function Header (){
  return (
    <header className={styles.header}>
      <img src={uniTuendaLogo} alt="uniTuenda Logotipo" />
    </header>
  )
}
