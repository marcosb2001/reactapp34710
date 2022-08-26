

export default function CartItem({id, name, desc, price}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    )
}