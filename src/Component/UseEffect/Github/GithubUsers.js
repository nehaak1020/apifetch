import React from 'react'
import { Link } from 'react-router-dom'

const GithubUsers = ({users}) => {
    return (
        <div className="users">
            <div className="container">
                <h2>Github Users</h2>
                <div className="row">
                    {
                        users.map((currElem,i) => {
                            const { login, avatar_url, url} = currElem
                            return(
                            <div className="col-12 col-md-4 mt-5" key={i}>
                                <div className="card">
                                    <div className="image p-3">
                                        <img src={avatar_url} className="img-fluid" alt="" />
                                        <div className="text-content">
                                            <h5 className="card-title text-start">{login.toUpperCase()}</h5>
                                            <h5>Github Profile Link:</h5>
                                            <p className="userlink text-start"><a href={url} target='_blank'>{url}</a></p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="d-flex flex-column pe-3">
                                                <span className="articles">Articles</span>
                                                <span className="number1">38</span>
                                            </div>
                                            <div className="d-flex flex-column pe-3">
                                                <span className="followers">Followers</span>
                                                <span className="number2">980</span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="ratings">Ratings</span>
                                                <span className="number3">3.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GithubUsers
