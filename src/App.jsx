import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

import AvatarUser from './assets/avatar.jpg';
import AvatarUser1 from './assets/avatar1.jpg';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: AvatarUser,
      name: 'Simão José',
      role: 'CTO @uniTuenda'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projecto no meu portifolio. É um projecto que fiz no NLW Return, evento da Rocktseat 🚀',},
      { type: 'link', content: 'Simão.design',},
      { type: 'link', content: '#novoprojecto ',},
      { type: 'link', content: '#nlw ',},
      { type: 'link', content: '#rocketseat',}
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: AvatarUser1,
      name: 'Terêncio José',
      role: 'Monster'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projecto no meu portifolio. É um projecto que fiz no NLW Return, evento da Rocktseat 🚀',},
      { type: 'link', content: 'Terêncio.design',},
      { type: 'link', content: '#novoprojecto ',},
      { type: 'link', content: '#nlw ',},
      { type: 'link', content: '#rocketseat',}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  }
]

export function App() {
  return (
    <div>
        <Header />
        
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
      
    </div>
  )
}