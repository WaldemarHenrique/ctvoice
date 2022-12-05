import { useContext } from "react";
import LoadMoreButton from "../../assets/imgs/loadMoreBtn.png"
import UseComics from "../../context/useComics.context";


function ComicsSession() {

    const { datComics, pagination, setPagination } = useContext(UseComics);
    
    const handleClick = (url: string) => {
        window.open(url, 'blank')
    }

    return (
        <div className={'comicsSessionContainer'}>
            <div className='comicsSession'>
                <div className='comicsWrapper gridContainerComics'>
                    {datComics! ? 
                        datComics?.map((item: any) => {
                            return (
                                <div onClick={() => handleClick(item.urls[0]?.url)} key={item.id} className="gridItemComics">
                                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='teste'></img>
                                    <h1>{item.title}</h1>
                                    <h5>{item.creators?.items[0]?.name.toUpperCase() || 'NÃO INFORMADO'}</h5>
                                    <span className='lineComics'></span>
                                </div>
                            )
                        }) : null
                    }
                </div>
                <div className="btnWrapperLoadMore">
                    <img className='loadMoreBtn' onClick={() => setPagination(pagination + 4)} src={LoadMoreButton} alt='load_more'></img>
                    <span className="lineBtn"></span>
                </div>
            </div>
        </div>
    )
}

export default ComicsSession;