export default function MovieItem ({items,listTitle}){
    function renderFarm(){
        return items.data.map((currentItem)=>{
            return(
                <li>
                    <img src ={currentItem.poster}/>
                    <h2>{currentItem.title}</h2>
                </li>
            )
        });
    }
    return(
        <div >
            <h2>{listTitle}</h2>
          <ul>{renderFarm()}</ul>
        </div>
    )
}