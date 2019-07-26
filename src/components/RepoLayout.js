import React from 'react'
import starImg from '../images/star.svg'
import forkImg from '../images/fork.png'

const RepoLayout = (props) => {
    
    const { item } = props
    const color = {
        CSS: '#563d7c',
        JavaScript: '#f1e05a',
        HTML: '#e34c26'
    }

    return(
        <div className="repoItem">
            <a className="title" href={item.html_url}>{item.name}</a>
            <p>{item.description}</p>
            <ul>

                {item.language &&
                    <li>
                        <label style={{backgroundColor: color[item.language]}}></label>
                        <span>{item.language}</span>
                    </li>
                }

                {item.stargazers_count !== 0 &&
                <li>
                    <a className="sub" href={`${item.html_url}/stargazers`}>
                        <img src={starImg} alt="icon" />
                        <span>{item.stargazers_count}</span>
                    </a>
                </li>
                }

                {(item.fork && item.forks_count !== 0) &&
                    <li>
                        <a className="sub" href={`${item.html_url}/network/members`}>
                            <img src={forkImg} alt="icon" />
                            <span>{item.forks_count}</span>
                        </a>
                    </li>
                }

            </ul>
        </div>
    )
}

export default RepoLayout