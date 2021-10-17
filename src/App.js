import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import LoadingIcons from 'react-loading-icons';
import './App.css';
import SearchBar from './components/SearchBar/Searchbar';
import fetchImages from './components/services/pixabay';
import GalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    data: [],
    query: '',
    page: 1,
    loading: false,
    showMoadl: false,
    error: null,
  };

  componentDidUpdate(pervProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchApi();
    }
  }

  fetchApi = () => {
    this.setState({ loading: true });
    fetchImages(this.state.query, this.state.page)
      .then(data => {
        this.setState(state => ({
          data: [...state.data, ...data],
          page: state.page + 1,
        }));
        if (this.state.page !== 1) {
          this.scrollOnLoadButton();
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
      largeImage: largeImageURL,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const showMore = this.state.data.length > 0 && this.state.data.length >= 12;
    return (
      <>
        <SearchBar searchProp={this.handleSearch} />
        <ToastContainer autoClose={3000} />

        <>
          <ul className="ImageGallery">
            {this.state.data.map(el => {
              return (
                <GalleryItem
                  key={el.id}
                  image={el}
                  onImageClick={this.handleGalleryLargeItem}
                />
              );
            })}
          </ul>
        </>

        {/* <ImageGallery
          data={this.state.data}
          onImageClick={this.handleGalleryLargeItem}
        /> */}
        {this.state.loading && <LoadingIcons.Oval />}
        {showMore && <Button onClick={this.fetchApi} />}
      </>
    );
  }
}
