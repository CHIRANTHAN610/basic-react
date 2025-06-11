export  default function Entry(props) {
return(
<article className="journal-entry">
    <div className="main-image-container">
        <img src={props.img} alt="mountfuji" srcset="" className="main-image"/>
    </div>
    
    <div className="entry-content">
        <img src="../images/marker.png" alt="" srcset=""  />
        <span>{props.country}</span>
        <a href={props.googleMapLink}>View On Google Map</a>
        <h2>{props.title}</h2>
        <p className="date">{props.date}</p>
        <p>{props.description}</p>
    </div>
    
</article>
)
}