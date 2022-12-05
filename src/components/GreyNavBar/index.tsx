import { useContext, useEffect, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg"
import UseComics from "../../context/useComics.context";
import cleanData from "../../utils/cleanDate.util";
import okButton from "../../assets/imgs/okButton.png"
import { getComics } from "../../services/comicsSession";

function GreyNavBar() {

    const { setDataComicsFiltered} = useContext(UseComics);

    const [handleCheck, setHandleCheck] = useState<any>();
    const [datComicsFilter, setDataComicsFilter] = useState<any>();
    const [filterBtn, setFilterBtn] = useState<string[]>([]);

    useEffect(() => {
        getComics(20) 
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

        const filterArray: string[] = [];

        //Get only active checkbox values;
        Object.keys(handleCheck).forEach((key) => {
            if (handleCheck[key]) {
                filterArray.push(key);
            }
        });

        setFilterBtn(filterArray);

        const filter = (value: any) => {
            let arrayFilter: string[] = [];

            if (value === 'SERIES')
                filterArray?.map((names: string) => {
                    datComicsFilter?.map((comics: any) => {
                        if (comics?.series?.name === names) {
                            arrayFilter.push(comics);
                        }
                    })
                })
            else if (value === 'CREATOR') {
                filterArray?.map((names: string) => {
                    datComicsFilter?.map((comics: any) => {
                        if (comics?.creators?.items[0]?.name === names) {
                            arrayFilter.push(comics);
                        }
                    })
                })
            }
            else if (value === 'CHAR') {
                filterArray?.map((names: string) => {
                    datComicsFilter?.map((comics: any) => {
                        if (comics?.characters?.items[0]?.name === names) {
                            arrayFilter.push(comics);
                        }
                    })
                })
            }
            return arrayFilter;
        }

        const selectedFilter = filter(filterType);

        setDataComicsFiltered(selectedFilter.length ? selectedFilter : datComicsFilter);
    }

    return (
        <>
            <div className={'greyNavBarContainer'}>
                <div className='greyNavBar'>
                    <nav>
                        <ul>
                            <div style={{ marginTop: '2rem', fontFamily: 'Roboto', fontWeight: '900', color: '#353535', fontSize: '24px' }}>BROWSER BY</div>
                            <li className="grayMenuBtn">SERIES <DownArrow className='downArrow' />
                                <div className={'graysubMenu'}>
                                    <ul className={'graySubMenuList'}>
                                        {cleanData(seriesRaw)?.length &&
                                            cleanData(seriesRaw)?.map((item: any, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        <input 
                                                        type='checkbox' 
                                                        onChange={(e) => setHandleCheck({ ...handleCheck, [e.target.name]: e.target.checked })} 
                                                        name={item} 
                                                        className='checkFilter' />
                                                        {item}
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <img className='readyBtn' onClick={() => handleCreatorFilter("SERIES")} style={{ position: 'absolute', bottom: '-22px' }} src={okButton} alt='okButton'></img>
                                </div>
                            </li>

                            <li className="grayMenuBtn">CHARACTERES <DownArrow className='downArrow' />
                                <div className={'graysubMenu'}>
                                    <ul className={'graySubMenuList'}>
                                        {cleanData(charRaw)?.length &&
                                            cleanData(charRaw)?.map((item: any, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        <input 
                                                        type='checkbox' 
                                                        onChange={(e) => setHandleCheck({ ...handleCheck, [e.target.name]: e.target.checked })} 
                                                        name={item} 
                                                        className='checkFilter' 
                                                        />
                                                        {item}
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <img className='readyBtn' onClick={() => handleCreatorFilter("CHAR")} style={{ position: 'absolute', bottom: '-22px' }} src={okButton} alt='okButton'></img>

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
                                                        onChange={(e) => setHandleCheck({ ...handleCheck, [e.target.name]: e.target.checked })}
                                                        name={item} 
                                                        className='checkFilter' />
                                                        {item}
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <img onClick={() => handleCreatorFilter("CREATOR")} className='readyBtn' style={{ cursor: 'pointer', position: 'absolute', bottom: '-22px' }} src={okButton} alt='okButton'></img>
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
                                <div key={index} className='filterBtn'>{item?.toUpperCase()}</div>
                            )
                        }) : null
                    }
                </div>
            </div>
        </>
    );
}

export default GreyNavBar;