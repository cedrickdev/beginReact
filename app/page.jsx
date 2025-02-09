import LikeButton from "./like-button";

function Header({title}) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Homepage() {
    const names = ['cedrick feze', 'kobe bryan', 'lewis hamilton'];


    return (
        <div>
            <Header title="beginReact"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton/>
        </div>
    );
}
