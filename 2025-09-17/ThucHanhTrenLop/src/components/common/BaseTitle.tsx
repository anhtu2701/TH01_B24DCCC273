interface BaseTitleProps {
    title: string;
}

const BaseTitle = ({title}: BaseTitleProps) => {
    return (
        <h1 style={{marginBottom: '20px'}}>{title}</h1>
    )
}

export default BaseTitle;