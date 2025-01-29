interface PropTypes {
    placeholder:string
}

export function InputBox({
    placeholder }:PropTypes){
        return(
            <input placeholder={placeholder} style={{
                borderWidth:1,
                borderColor:"black",
                margin:5,
                padding:5
            }}></input>
        )
    }