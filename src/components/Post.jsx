import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post ({author, publishedAt}){
  console.log(author.avatarUrl);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo} >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='11 de Maio ás 12:00' dateTime='2022-05-11 08:13:30'>
          Públicado há {publishedAt.toString()}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projecto no meu portifolio. É um projecto que fiz no NLW Return, evento da Rocktseat 🚀</p>

        <p>👉 {' '} <a href="">Simão.design</a></p>
        <p>
          <a href="">#novoprojecto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
