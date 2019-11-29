import React from 'react';
import api from '../../services/api';
import { FaSpinner } from 'react-icons/fa';
import { ContainerLoading, ContainerLoaded } from './styled';
import { Link } from 'react-router-dom';

class Repository extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            repo: {},
        };
    }

    componentDidMount = async () => {
        const { match } = this.props;

        const RepoName = decodeURIComponent(match.params.repositorie);

        const response = await api.get(`/repos/${RepoName}`);

        console.log(response);

        this.setState({
            loading: false,
            repo: response,
        });
    };

    render() {
        if (this.state.loading) {
            return (
                <ContainerLoading loading={this.state.loading}>
                    <h1>
                        Carregando, aguarde...
                        <br />
                    </h1>
                    <FaSpinner></FaSpinner>
                </ContainerLoading>
            );
        }

        return (
            <ContainerLoaded>
                <Link className="link" to="/">
                    {' '}
                    ← Voltar aos repositorios
                </Link>
                <br />
                <img
                    className="person"
                    src={this.state.repo.data.owner.avatar_url}
                />
                <br />
                <h1 className="name"> {this.state.repo.data.owner.login} </h1>

                <p>{this.state.repo.data.description}</p>

                <a href={this.state.repo.data.svn_url}>
                    <button>Acessar o repositorio</button>
                </a>
            </ContainerLoaded>
        );
    }
}

export default Repository;
