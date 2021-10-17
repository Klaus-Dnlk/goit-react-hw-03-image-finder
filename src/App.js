import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Oval from './components/Loader/Loader';
import s from '../src/app.module.css';
import SearchBar from './components/SearchBar/Searchbar';
import fetchImages from './components/services/pixabay';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    data: [],
    query: '',
    page: 1,
    bigImage: '',
    loading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(pervProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchApi();
    }
  }

  fetchApi = () => {
    const { query, page } = this.state;
    const { scrollOnLoadButton } = this;
    this.setState({ loading: true });
    fetchImages(query, page)
      .then(data => {
        this.setState(state => ({
          data: [...state.data, ...data],
          page: state.page + 1,
        }));
        if (page !== 1) {
          scrollOnLoadButton();
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearch = query => {
    this.setState({
      query,
      page: 1,
      data: [],
    });
  };

  handleGalleryLargeItem = largeImageURL => {
    this.setState({
      bigImage: largeImageURL,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      bigImage: '',
    }));
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { data, bigImage, loading, showModal } = this.state;
    const { handleSearch, handleGalleryLargeItem, fetchApi, toggleModal } =
      this;
    const showMore = data.length > 0 && data.length >= 12;
    return (
      <div className={s.App}>
        <SearchBar searchProp={handleSearch} />
        <ToastContainer autoClose={3000} />
        <ImageGallery data={data} onImageClick={handleGalleryLargeItem} />
        {loading && <Oval />}
        {showMore && <Button onClick={fetchApi} />}
        {showModal && <Modal onClose={toggleModal} bigImage={bigImage} />}
      </div>
    );
  }
}
