import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../SearchBar/searchBar.module.css';

export default class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Input image name');
      return;
    }
    this.props.searchProp(this.state.imageName);
    this.setState({ imageName: '' });
  };

  handleChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
