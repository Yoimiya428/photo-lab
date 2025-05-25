// frontend/src/App.jsx
import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
//  import PhotoList from './components/PhotoList';
//  import TopicList from './components/TopicList';
//  import TopNavigation from './components/TopNavigationBar';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from "./mocks/photos";
import topics from "./mocks/topics";
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `/profile-1.jpg`,
// };



// Note: Rendering a single component to build components in isolation

// const App = () => (
//   <div className="App">
//     <PhotoListItem photo={sampleDataForPhotoListItem} />
//   </div>
// );

const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics} />
  </div>
)




export default App;
