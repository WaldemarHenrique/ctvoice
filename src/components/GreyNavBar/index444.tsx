import { useContext, useEffect, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg"
import UseComics from "../../context/useComics.context";
import cleanData from "../../utils/cleanDate.util";
import okButton from "../../assets/imgs/okButton.png"
import { getComics } from "../../services/comicsSession";

function GreyNavBar() {

    const { setDataComicsFiltered } = useContext(UseComics);
    const [handleCheck, setHandleCheck] = useState<any>();
    const [datComicsFilter, setDataComicsFilter] = useState<any>();
    const [filterBtn, setFilterBtn] = useState<string[]>([]);

    useEffect(() => {
        getComics(12)
            .then(res => {
                setDataComicsFilter(res.data.results);
            })
    }, [])


    //Clean Filter Menu Names;
    const creatorRaw = datComicsFilter?.map((item: any) => item.creators?.items[0]?.name);
    const charRaw = datComicsFilter?.map((item: any) => item.characters?.items[0]?.name);
    const seriesRaw = datComicsFilter?.map((item: any) => item.series.name);

    //Filter Session
    const handleCreatorFilter = (filterType: string) => {

        const filterArray: any[] = [];

        //Get only active checkbox values;
        Object.keys(handleCheck).forEach((key) => {
            if (handleCheck[key].checked) {
                filterArray.push({ [handleCheck[key].type] : {name: key, type: handleCheck[key].type} });
            }
        });

        console.log('FILTER', filterArray)
        setFilterBtn(filterArray);


        const filter = () => {
            let arrayFilter: any[] = [];

            filterArray?.map((item: any) => {

                datComicsFilter?.map((comics: any) => {
                    if (comics?.series?.name! && 
                        comics?.series?.name === item?.SERIES?.name) {
                        
                            arrayFilter.push(comics); 
                    } 
                    else if (comics?.creators?.items[0]?.name! && 
                        comics?.creators?.items[0]?.name === item?.CREATORS?.name) {
                        
                            arrayFilter.push(comics); 
                    }
                    else if (comics?.characters?.items[0]?.name! && 
                        comics?.characters?.items[0]?.name === item?.CHAR?.name) {
                        
                            arrayFilter.push(comics); 
                    }  
                })

            })

            console.log('arrayFilter', arrayFilter)
            
            return arrayFilter;
        }

        const selectedFilter = filter();

        setDataComicsFiltered(selectedFilter.length ? selectedFilter : datComicsFilter);
    }

    return (
        <>
            <div className={'greyNavBarContainer'}>
                <div className='greyNavBar'>
                    <nav>
                        <ul>
                            <div style={{marginTop: '2rem', fontFamily: 'Roboto', fontWeight: '900', color: '#353535', fontSize: '24px' }}>BROWSER BY</div>
                            <li className="grayMenuBtn">SERIES <DownArrow className='downArrow' />
                                <div className={'graysubMenu'}>
                                    <ul className={'graySubMenuList'}>
                                        {cleanData(seriesRaw)?.length &&
                                            cleanData(seriesRaw)?.map((item: any, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        <input 
                                                        type='checkbox' 
                                                        onChange={(e) => setHandleCheck({ ...handleCheck, [e.target.name]: { name: e.target.name, checked: e.target.checked, type: 'SERIES'} })} 
                                                        name={item} 
                                                        className='checkFilter' 
                                                        />
                                                        {item}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <img className='readyBtn' onClick={() => handleCreatorFilter("SERIES")} style={{ position: 'absolute', bottom: '-10%' }} src={okButton} alt='okButton'></img>
                                </div>
                            </li>

                            <li className="grayMenuBtn">CHARACTERES <DownArrow className='downArrow' />
                                <div className={'graysubMenu'}>
                                    <ul className={'graySubMenuList'}>
                                        {cleanData(charRaw)?.length &&
                                            cleanData(charRaw)?.map((item: any, index: number) => {
                                                return (
                                                    <li 
                                                        key={index}>
                                                        <input 
                                                        type='checkbox' 
                                                        onChange={(e) => setHandleCheck({ ...handleCheck, [e.target.name]: { name: e.target.name, checked: e.target.checked, type: 'CHAR' } })} 
                                                        name={item} 
                                                        className='checkFilter' 
                                                        />
                                                        {item}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <img className='readyBtn' onClick={() => handleCreatorFilter("CHAR")} style={{ position: 'absolute', bottom: '-10%' }} src={okButton} alt='okButton'></img>

                                </div>
                            </li>
                            <li className="grayMenuBtn">CREATORS <DownArrow className='downArrow' />
                                <div className={'graysubMenu'}>
                                    <ul className={'graySubMenuList'}>
                                        {cleanData(creatorRaw)?.length &&
                                            cleanData(creatorRaw)?.map((item: any, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        <input 
                                                        type='checkbox' 
                                                        onChange={(e) => setHandleCheck({ ...handleCheck, [e.target.name]: { name: e.target.name, checked: e.target.checked, type: 'CREATORS' } })} 
                                                        name={item} 
                                                        className='checkFilter' 
                                                        />
                                                        {item}
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <img onClick={() => handleCreatorFilter("CREATOR")} className='readyBtn' style={{ cursor: 'pointer', position: 'absolute', bottom: '-9%' }} src={okButton} alt='okButton'></img>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='showFilterBtnContainer'>
                <div className='showFilterBtn'>
                    {filterBtn?.length ?
                        filterBtn?.map((item: any, index: number) => {
                            return (
                        
                                <div key={index+Math.random()} className='filterBtn'>
                                    {item?.CHAR?.type === "CHAR" ? item?.CHAR?.name?.toUpperCase() : ""}
                                    {item?.SERIES?.type === "SERIES" ? item?.SERIES?.name?.toUpperCase() : ""}
                                    {item?.CREATORS?.type === "CREATORS" ? item?.CREATORS?.name?.toUpperCase() : ""}
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        </>
    );
}

export default GreyNavBar;