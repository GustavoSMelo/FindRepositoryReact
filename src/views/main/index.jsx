import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, SubmitButton, List } from './styled';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newRepo: '',
            repositories: [],
            loading: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    };

    componentDidUpdate = (_, prevState) => {
        if (prevState.repositories !== this.state.repositories) {
            localStorage.setItem(
                'repositories',
                JSON.stringify(this.state.repositories)
            );
        }
    };

    handleInputChange = async event =>
        await this.setState({ newRepo: event.target.value });

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true });

        const response = await api.get(`repos/${this.state.newRepo}`);
        const data = {
            name: response.data.full_name,
            url: response.data.url,
            avatar: response.data.owner.avatar_url,
        };

        console.log(response);

        await this.setState({
            repositories: this.state.repositories.concat(data),
            newRepo: '',
            loading: false,
        });
    };

    render() {
        return (
            <Container>
                <h1>
                    {' '}
                    <FaGithubAlt /> Repositorios
                    {this.state.loading && (
                        <>
                            <br />
                            Carregando repositorio... <br />
                        </>
                    )}
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.newRepo}
                        onChange={this.handleInputChange}
                        placeholder="Adicionar um novo repositorio... "
                    />

                    <SubmitButton type="submit" loading={this.state.loading}>
                        {this.state.loading ? (
                            <FaSpinner></FaSpinner>
                        ) : (
                            <FaPlus />
                        )}
                    </SubmitButton>
                </Form>

                <List>
                    {this.state.repositories.map(item => (
                        <li key={item.name}>
                            <>
                                <img src={item.avatar} />
                                {'  '} {item.name}
                            </>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    item.name
                                )}`}
                            >
                                Descover this repository here!{' '}
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}

export default Home;
