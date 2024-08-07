import Item from "../item/item";

export default function List({ arr }) {
    const items = arr.map(item => <Item text={item}/>)
    return (
        <ul>
            {items}
        </ul>
    )
}