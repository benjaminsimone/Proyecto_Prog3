import Detail from "../Detail";

function ScreenMovie (props) {
    let id = props.id
    return(
        <section>
            <Detail id = {id} /> 
        </section>
    )
}


export default ScreenMovie;