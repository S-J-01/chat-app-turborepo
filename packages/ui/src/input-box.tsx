interface PropTypes {
    placeholder:string,
    size:string
}

export function InputBox({
    placeholder,
    size
    }:PropTypes){
        return(
            <input placeholder={placeholder} style={{
                borderWidth:1,
                borderColor:"black",
                margin:size==='big'?10:5,
                padding:size==='big'?10:5
            }}></input>
        )
    }