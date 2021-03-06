import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Video from '../Video'
import './styles.scss';

class TrailerSlides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            videoId: [],
            page: 1,
        };
    }

    componentDidMount() {
        const url = ("https://api.themoviedb.org/3/movie/popular?language=en&api_key=5952fca5b680beeeeb34acf859935418&page=1");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data: data.results });
                this.setState({})
            })
            .catch((err) => {
                console.log("something went wrong ", err);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <Carousel className="Carousel">
                        {this.state.data.map((details, i) => {
                            if (i < 3) {
                                return <Carousel.Item key={i}>
                                    <Video key={i} details={details} />
                                    <Carousel.Caption className="Caption">
                                        <h3>{details.original_title}</h3>
                                        <p>{details.release_date}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            } else {return null}
                        })}
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default TrailerSlides