interface BaseDescriptionProps {
    content: string;
}

const BaseDescription = ({content}: BaseDescriptionProps) => {
    return (
        <h4 style={{marginBottom: '20px'}}>{content}</h4>
    )
}

export default BaseDescription;