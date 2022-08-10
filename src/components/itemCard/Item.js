
function ItemCard({id, img, name, price}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <p>{price}</p>
                <button>ver más</button>
            </div>
        </div>
    )
}

export default ItemCard;