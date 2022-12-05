function Ads( { color } : any) {
    return (
        <div style={{background: color}} className={'adsContainer'}>
            <div className='ads'>
                <div className="adsTextCont">
                    <p style={{
                        fontSize: '11px',
                        color: '#959595',
                        fontFamily: 'Roboto Condensed',
                        margin: 0
                    }}
                    >
                        ADVERTISEMENT
                    </p>
                    <div className='adsContent' />
                </div>
            </div>
        </div >
    );
}

export default Ads;