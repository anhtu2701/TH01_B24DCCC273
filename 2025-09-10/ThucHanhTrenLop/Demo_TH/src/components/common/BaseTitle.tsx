interface BaseTitleProps {
    title: string;
}

const BaseTitle = ({title}: BaseTitleProps) => {
    return (
        <h1>{title}</h1>
    )
}

export default BaseTitle;