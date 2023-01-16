import styles from './Sidebar.module.css';
import cover from '../assets/cover.png';
import { Avatar } from './Avatar';

import AvatarUser from '../assets/avatar.jpg';
import { PencilLine } from 'phosphor-react';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={cover} />

      <div className={styles.profile}>
        <Avatar src={AvatarUser} />
        <strong>Simão José</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
          </a>
      </footer>
    </aside>
  )
}
