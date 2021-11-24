
import PropTypes from 'prop-types'

const ModalButton = ({text,onClick,color,modalFormId}) => {

    return (
        <button dangerouslySetInnerHTML={{ __html: text }} onClick={onClick} 
                type="button" className="p-1 m-2" 
                data-bs-toggle="modal" 
                data-bs-target={'#'+modalFormId}
                style={{color:color}}>
            {}
        </button>
    )
}

ModalButton.propTypes={
    text:PropTypes.string,
    modalFormId:PropTypes.string,
    color:PropTypes.string,
    width:PropTypes.string,
    onClick:PropTypes.func
}

export default ModalButton
