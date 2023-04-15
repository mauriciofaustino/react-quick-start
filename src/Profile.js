import './Profile.css'

const user = {
    name: "Maurício Castro",
    imageUrl: "https://avatars.githubusercontent.com/u/879268",
    imageSize: 90
}

const skills = [
    { id: 1, title: 'Java' },
    { id: 2, title: 'JavaScript' },
    { id: 3, title: 'React JS' }
]


export default function Profile() {
    const skillsItems = skills.map(skill =>
    <li key={skill.id}>{skill.title}</li>)
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <br />
            <ul>
                {skillsItems}
            </ul>

        </>
    )
}