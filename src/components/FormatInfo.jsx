export const FormatInfo = ({formato}) => {
    
    return(
        <div className="container my-4">        
            <h3>{formato.name}</h3>
            <p className="justificado">{formato.intro}</p>
            <p className="justificado">{formato.details}</p>
        </div>
    );
}