import {Post} from './Componentes/post.jsx'
import {Header} from './Componentes/Header.jsx'
import './Global.css'
import Styles from './App.module.css'
import {Sidebar} from './Componentes/Sidebar.jsx'

const posts= [
  {
    id:1,
    author:{
            authorAvatar:"https://github.com/diego3g.png",
            authorName:"Felipe Cristovão da Silva",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-06-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Fala galeraa 👋',
    },
    {
      type:'paragraph',
      content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',

    },
    {
      type:'link',
      content:'👉 jane.design/doctorcare',
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]

  
  },
  {
    id:1,
    author:{
            authorAvatar:"https://github.com/diego3g.png",
            authorName:"Felipe Cristovão da Silva",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-06-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Fala galeraa 👋',
    },
    {
      type:'paragraph',
      content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',

    },
    {
      type:'link',
      content:'👉 jane.design/doctorcare',
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]

  
  }
]


export function App() {

  return(

    <div>


      <Header></Header>

     <div className={Styles.Wrapper}>
     <Sidebar></Sidebar>
       <main>
       {posts.map(post =>{
        return(
             <Post src={posts[0].author.authorAvatar}
             name={posts[0].author.authorName}
             role={posts[0].author.authorRole}
             paragraph1={posts[0].content[0].content}
             paragraph2={posts[0].content[1].content}
             link1={posts[0].content[2].content}
             link2={posts[0].content[3].content}
             >

             </Post>
        )
       })
      
      }

       </main>
     </div>
      
      
      
     
          
  
    
    </div>
    
  )

  
  
}


