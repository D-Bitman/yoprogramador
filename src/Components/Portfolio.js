import React from 'react'
import data from "./dataSlider"

const Portfolio = () => {

  return (
    <section className="about" id="portfolio">
        <div className="portfolio__container">
            <h2 className="portfolio__title">Te invito a ver mis videos</h2>
            <div className="portfolio__container--carousel ">
            
                    {data.map(elem=>{
                        return(
                    <div className="card " key={elem.id}>
                        <div className="box">
                            <a href={elem.link} target="_blank" rel="noopener noreferrer">
                                 <img src={elem.img} alt={elem.title} />
                            </a>
                        <div className="text">{elem.title}</div>
                        <a title="Video Youtube"
                        href={elem.link} target="_blank">
                            <i className="fas fa-video" aria-hidden="true"> </i>
                        </a>
                        
                        </div>
       
                    </div>
                        )
                    })}
            </div>
            </div>
    </section>
  )
}

export default Portfolio
