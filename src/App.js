import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import LoadingIcons from 'react-loading-icons';
import './App.css';
import SearchBar from './components/SearchBar/Searchbar';
import fetchImages from './components/services/pixabay';
import GalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import ImageGallery from './components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    data: [],
    query: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(pervProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true });

      fetchImages(this.state.query, this.state.page)
        .then(data => {
          this.setState(
            { data },
            // state => ({
            // data: [...state.data, ...data],
            // page: state.page + 1,
            // })
          );
          if (this.state.page !== 1) {
            this.scrollOnLoadButton();
          }
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
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
        <LoadingIcons.Oval />
      </>
    );
  }
}
