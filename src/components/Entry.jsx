export default function Entry(props){
    console.log(props)                       
    return(
        <section className="section-wrapper">
            <img src={props.image.src} alt={props.nameOfPlace.alt}></img>
            <section className="descriptive-text">
                <div className="location">
                <img type="icon" src="src/assets/reshot-icon-google-maps-WBY8X5M4UL.svg" alt="location icon"></img>
                <span>{props.country}</span>
                <a href={props.link}>View on google maps</a>
                </div>
                
                <h1>{props.nameOfPlace}</h1>
                <p>
                    {props.description}
                </p>
            </section>
        </section>
    )
}