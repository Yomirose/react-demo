function Subscribe({newSub}){
    return(
        <div className="subscribe">
            {newSub.map((card, i) =>{
                return <div key={i}>
                    <p className="contact">{card.contact}</p>
                </div>           
            })}
            <p className="newsletters">Newsletters</p>
        </div>
    )
}

export default Subscribe 