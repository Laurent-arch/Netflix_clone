import styles from './SectionCards.module.css'
import Card from './Card'

const SectionCards = ({title, videos, size}) => {
  console.log({videos});

  return (
   <section className={styles.container}>
     <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, index) => {
          return <Card id={index} imgUrl={video.imgUrl} size={size} />
        })}
       
     </div>
   </section>
  )
}


export default SectionCards