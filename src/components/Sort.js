
function Sort({isSorted, setIsSorted}) {

    return (
        <div>
            <button 
            onClick={() => {setIsSorted((isSorted) => !isSorted)}}
            >
                {isSorted ? "Sort By Location: ON" : "Sort By Location: OFF"}
            </button>
        </div>
    );
}

export default Sort;