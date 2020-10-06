import React from 'react'

export default function House(props) {
    return (
        <section className="container">
            <h4 className="mb-4">House with beauty backyard</h4>
            <div className="container-grid">
                <div className="item column-3 row-1">
                    <div className="card">Card 1 </div>
                </div>
                <div className="item column-3 row-1">
                    <div className="card">Card 2 </div>
                </div>
                <div className="item column-3 row-1">
                    <div className="card">Card 3 </div>
                </div>
                <div className="item column-3 row-1">
                    <div className="card">Card 4 </div>
                </div>
            </div>
        </section >
    )
}
