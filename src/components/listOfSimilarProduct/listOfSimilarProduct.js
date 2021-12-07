export default function ListOfSimilarProduct({value}) {
    console.log(value);
    return(
        <div>
            <hr/>
            {value.title} - {value.description}
            <br/>
            <span>Created at: {new Date(value.createdAt).toLocaleString()}</span>

        </div>
    )

}