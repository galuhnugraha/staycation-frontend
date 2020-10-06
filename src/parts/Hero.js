import React from 'react'
import ImageHero from 'assets/Images/banner.png';
import IconCities from 'assets/Images/icons/icon_cities.svg'
import IconTravelers from 'assets/Images/icons/icon_traveler.svg'
import IconTreasure from 'assets/Images/icons/icon_treasure.svg'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'
import Fade from 'react-reveal/Fade';

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }


    return (
        <Fade bottom delay={100}>
            <section className="container pt-5">
                <div className="row align-item-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="h2 font-weight-bold line-height-1 mb-4">
                            Forget Busy Work, <br />Start Next Vacation
                    </h1>
                        <p className="mb-5 font-weight-light text-gray-500 w-75">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show me Now
                    </Button>

                        <div className="row" style={{ marginTop: 80 }}>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36" src={IconTravelers} alt={`${props.data.travelers} Travelers`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers)}{" "} <span className="text-gray-500 font-weight-light">travelers</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasure} Travelers`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)}{" "} <span className="text-gray-500 font-weight-light">treasure</span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Travelers`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)}{" "} <span className="text-gray-500 font-weight-light">cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5">
                        <div style={{ width: 450, height: 250 }}>
                            <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
